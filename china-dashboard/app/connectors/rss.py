"""RSS aggregator - free, no key. English-language feeds only.

Feed URLs are either confirmed from a publisher's own feed (SpaceNews returned
live items during verification), or listed in a feed directory (FeedSpot)
pending the connector's own live check. Each feed reports its own status and
fails independently. World-wide feeds keep only China-relevant headlines.
"""
from __future__ import annotations
from .base import Item, ConnectorResult
from ..classify import classify

NAME = "rss"

FEEDS = [
    # Earlier build (not fetched live from the build sandbox; live status is reported per feed)
    {"url": "https://www.xinhuanet.com/english/rss/worldrss.xml", "source": "Xinhua (state media) - World"},
    {"url": "https://www.xinhuanet.com/english/rss/chinarss.xml", "source": "Xinhua (state media) - China"},
    {"url": "https://www.scmp.com/rss/4/feed", "source": "SCMP - China"},
    {"url": "https://www.scmp.com/rss/5/feed", "source": "SCMP - World"},
    {"url": "https://www.scmp.com/rss/2/feed", "source": "SCMP - Hong Kong"},
    {"url": "https://www.scmp.com/rss/91/feed", "source": "SCMP - China Politics"},
    {"url": "https://www.scmp.com/rss/318198/feed", "source": "SCMP - China Military"},
    {"url": "https://feeds.bbci.co.uk/news/world/asia/rss.xml", "source": "BBC News - Asia"},
    {"url": "https://www.aljazeera.com/xml/rss/all.xml", "source": "Al Jazeera"},
    {"url": "https://www.taipeitimes.com/xml/index.rss", "source": "Taipei Times (Taiwan, English)"},
    # Defence and naval (USNI: listed in FeedSpot; live status reported)
    {"url": "https://news.usni.org/feed", "source": "USNI News (US naval, Taiwan Strait, fleet tracking)"},
    {"url": "https://blog.usni.org/feed", "source": "USNI Blog (naval analysis)"},
    {"url": "https://breakingdefense.com/feed", "source": "Breaking Defense (military, space, tech)"},
    # Taiwan
    {"url": "https://news.ltn.com.tw/rss/all.xml", "source": "Liberty Times (Taiwan)"},
    # Space (SpaceNews: publisher feed confirmed live; Space.com: FeedSpot listing)
    {"url": "https://spacenews.com/feed/", "source": "SpaceNews (space business and policy)"},
    {"url": "https://www.space.com/feeds.xml", "source": "Space.com"},
    # Cyber (The Record: FeedSpot listing)
    {"url": "https://therecord.media/feed", "source": "The Record (cyber, Recorded Future News)"},
]

WORLD_WIDE_SOURCES = ("BBC News - Asia", "Al Jazeera", "SCMP - World")
CHINA_TERMS = ["china", "chinese", "beijing", "xi jinping", "pla ", "plaaf", "plan ", "taiwan", "tibet", "lhasa",
               "south china sea", "hong kong", "xinjiang", "shanghai", "taipei", "scarborough", "spratly", "paracel",
               "pla navy", "carrier", "submarine", "ccp", "politburo", "huawei", "beidou", "tiangong", "long march"]


def configured() -> bool:
    return True


def _looks_english(text: str) -> bool:
    if not text:
        return False
    latin = sum(1 for c in text if c.isascii() and c.isalpha())
    letters = sum(1 for c in text if c.isalpha())
    if letters == 0:
        return True
    return (latin / letters) > 0.6


def _relevant(title: str, source: str) -> bool:
    if not source.startswith(WORLD_WIDE_SOURCES):
        return True
    t = title.lower()
    return any(term in t for term in CHINA_TERMS)


def fetch(per_feed_limit: int = 15) -> ConnectorResult:
    from .. import safe_http
    import feedparser
    all_items, errors, ok_feeds = [], [], 0
    for feed in FEEDS:
        try:
            r = safe_http.safe_get(feed["url"])
            if r.status_code != 200:
                errors.append(f"{feed['source']}: HTTP {r.status_code}")
                continue
            parsed = feedparser.parse(r.content)
            if parsed.bozo and not parsed.entries:
                errors.append(f"{feed['source']}: not a readable feed")
                continue
            ok_feeds += 1
            count = 0
            for entry in parsed.entries:
                title = getattr(entry, "title", "").strip()
                if not title or not _looks_english(title) or not _relevant(title, feed["source"]):
                    continue
                all_items.append(Item(
                    category=classify(title), label=title[:90] if len(title) > 90 else title,
                    text=title, source=feed["source"],
                    date=getattr(entry, "published", "") or getattr(entry, "updated", ""),
                    url=getattr(entry, "link", None), connector=NAME,
                ).to_dict())
                count += 1
                if count >= per_feed_limit:
                    break
        except safe_http.FetchError as e:
            errors.append(f"{feed['source']}: blocked ({e})")
        except Exception as e:
            errors.append(f"{feed['source']}: {type(e).__name__}")
    if not all_items and errors:
        return ConnectorResult(NAME, True, False, "; ".join(errors)[:300])
    msg = f"{len(all_items)} items from {ok_feeds} of {len(FEEDS)} feeds"
    if errors:
        msg += f" ({len(errors)} failed: {'; '.join(errors)[:200]})"
    return ConnectorResult(NAME, True, True, msg, all_items)
