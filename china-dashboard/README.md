# China Digital Dashboard - v6

Covers China, Taiwan, Tibet and the South China Sea. A local production server
(waitress) with auto-restart, real open-data map layers, and 15 headings fed
from clear-web, Telegram, Instagram (official route) and dark-web sources.

## Start (Windows)

Double-click `start.bat`. It creates the virtual environment, installs the
packages, runs a self-check, starts the server under `supervisor.py` (restarts
it after a crash), and opens http://127.0.0.1:8787/. The page opens at once and
fills in as sources answer; the first pass takes a minute or two because GDELT
asks clients to pace their requests.

## The 15 headings

Geopolitical & Diplomatic - Military Operations & Force Posture - Strategic Arms
& Nuclear Program - Naval & Maritime Security - South China Sea - Air Force &
Aviation - Space Tech & Aerospace - Critical Tech & AI Governance - Cyber
Espionage & APTs - Darkweb & Threat Intel - Economic & Trade - Internal Security
& MSS Operations - Social Pulse & Public Sentiment - Happiness & Wellbeing
Indices - Natural Hazards & Environmental Risks.

Every headline is routed by ordered keyword rules in `app/classify.py`. The
rules are readable and editable. A headline that matches no rule goes to
Geopolitical & Diplomatic.

## The running news feed

It shows the last 72 hours only, always. The All Time switch does not widen it.
It shows only news that is not pinned to a map location (located news is on the
map). Undated background items never count as "latest".

## Where news comes from, and what you need for each

| Source | Needs | Notes |
|---|---|---|
| GDELT (global news search) | nothing | 14 English-language topic queries, paced 6 seconds apart. On HTTP 429 it waits 20 seconds and retries once. The status panel shows the real error. |
| RSS (Xinhua, SCMP, BBC Asia, Al Jazeera, Taipei Times, Liberty Times, USNI News, Breaking Defense, SpaceNews, Space.com, The Record) | nothing | Each feed reports its own status. World-wide feeds keep only China-relevant headlines. |
| Telegram public channels | nothing (no account) | Read through t.me/s/<name>. Your list is in `data/telegram_channels.json`, with a group for each channel. Each channel reports whether it answers. |
| Instagram (official Business Discovery) | a Meta developer app, an Instagram Business or Creator account you own, and a token - see below | Only Business and Creator accounts can be read. Personal accounts cannot be read through this route at all. |
| Dark web via Tor | Tor running on this PC - see below | Only the onion sources you add yourself, in `data/onion_sources.json`. |
| Ransomware.live (dark-web leak sites) | nothing | Group claims, not verified facts. Asia-Pacific filter. |
| USGS earthquakes | nothing | Map dots when USGS reports events in the region. |

### Telegram channels (your list)

Included, grouped as: news (ReutersWorldChannel, nytimes, guardian, bloomberg,
south_china_morning_post, SCMP_News, insiderpaper); defence (DefenseBlog); osint
(OsintTVNews, OSINTdefender, ClashReport, war_noir, Middle_East_Spectator); cyber
(BlueTeamKit, IRCyberGuardians); darkweb (DarkfeedNews).

Excluded on purpose:
- **OffensiveTwitter**: offensive-security and exploit content. It is not a news source, and a dashboard should not display exploit material.
- **HaveIBeenPwnedBreaches**: channels of this type can carry raw breach records. Use the official haveibeenpwned.com service instead.

Channels marked `verified: false` are from your research. This build could not
confirm each handle live. Remove any that do not answer.

### Dark web: how to read onion sources

1. Install **Tor Browser** and open it, which listens on SOCKS port **9150**; or install the **Tor service** and start it, which listens on **9050**.
2. Keep it running. The dashboard checks both ports and uses whichever answers.
3. Add onion RSS sources you verified on the outlet's **own official website** to `data/onion_sources.json`. Fake onion lookalikes are common, so check the address against the official site before you add it. The dashboard rejects anything that is not a well-formed v3 onion address (56 characters, a-z and 2-7, then .onion).
4. Press Refresh.

No account is needed for onion RSS sources. Sources that require a login are not supported.

What this does NOT do: it does not crawl the dark web, search it, scrape forums
or marketplaces, or open .onion pages in a browser. It does not read stealer-log,
credential or carding markets, and the Telegram search results for those are
excluded deliberately.

### Instagram (Meta Business Discovery)

1. Make an Instagram **Business or Creator** account that you own, and link it to a Facebook Page.
2. Create a **Meta developer app**, and add the Instagram/Facebook Login product.
3. Generate a **Facebook user access token** with `instagram_basic` and `pages_read_engagement` (and `instagram_manage_insights` if Meta requires it for your setup). Use a long-lived token, since short-lived ones expire.
4. Put the numeric ID of your Business/Creator account and the token into the gear icon (Settings). They are stored encrypted with AES-256.
5. List the target usernames in `data/instagram_accounts.json`. Only public Business or Creator accounts can be read.

Meta's review rules can change. Check the current requirements in Meta's
developer documentation before you rely on this route.

## Security

- Keys and tokens are encrypted with AES-256-GCM. The token is removed from every error message before it is displayed.
- The server listens on 127.0.0.1 only.
- Strict Content-Security-Policy; no third-party scripts, fonts or trackers.
- Hostile text (headlines, channel posts, marker labels) is escaped before display; only http and https links become clickable.
- Telegram handles and Instagram usernames are validated before any URL is built, so a bad entry cannot redirect a fetch.
- Clear-web requests can go through a proxy you choose (`PROXY_URL`, e.g. a VPN's local proxy). Dark-web requests go through Tor only, never direct.
- Onion sources must be well-formed v3 addresses. Each one is fetched through Tor and parsed as text.

What a dashboard **cannot** do: secure your whole PC or phone from attack (that
takes current OS updates, a firewall, endpoint protection and sensible accounts),
or hide your IP address and location from the sites it fetches from unless you
route traffic through a VPN or Tor. Even then, the VPN or Tor provider can see
your traffic.

## Tests

`pip install -r requirements.txt pytest` then `python -m pytest tests/`
(35 tests). Browser-side tests run with `npm install` then `npm test`. They load
the shipped `dashboard.js` into a real DOM, so they check what a user sees.

## Honest limitations

- **Live sources were not reachable from the build sandbox.** Every external connector reported a connection error there, so no live news appears in this build. The status panel shows the real result on your machine. Check it on the first run.
- **Ransomware.live:** the documented endpoint is `/v2/recentvictims`. The connector now checks `/v2/info` first and reports exactly which call failed. A 404 on your machine could not be reproduced from the build sandbox, which cannot reach that host.
- **GDELT:** the status panel now shows the exact error (for example HTTP 429). I believe rate limiting was the cause of the ✗ on your machine, but I have not confirmed that from here.
- **Space, army and air force** have good coverage. **South China Sea** and **MSS and espionage** have less: GDELT queries and SCMP feeds only. I did not find verified dedicated feeds for those topics, so I did not add any.
- **Japan** coverage is thin: no verified Japanese English feed.
- **Telegram channels** are read from public previews only. Private channels would need your own Telegram account and API credentials, which this build does not implement.
- **No submarine positions** and no PLA garrison coordinates beyond the theatre commands. No open dataset publishes them, and I did not invent them.
- **Single-user, local.** It runs on your machine while it is open. It is not a hosted multi-user service with an uptime guarantee.
