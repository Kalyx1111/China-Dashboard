# China Digital Dashboard - v6.4

## What changed in v1.7

- Three screen controls sit in the map's top-right corner: **Full map**, **Full screen** and **Hide bars**.
- **Full map** hides the KPI strip, the map's header row, the news drawer and its tab, the heading panels below the map, the layers panel and the footer note, so the map fills the window below the title. Press **Show panels** to bring them back.
- **Full screen** hides the browser's tabs and address bar. A web page cannot start full screen by itself: the button or the F key needs a click or key press first. Whether the Windows taskbar hides was not tested on Windows; it can be set to auto-hide in Windows settings.
- **Hide bars** (3, 4 or 5 seconds, or never; default 4 seconds) fades the header controls, the KPI strip, the map's header row, the news tab, the map tools, the zoom control and the footer note after no mouse, touch, wheel or key use. The title stays. Moving the mouse brings everything back. The bars do not hide while a dialog is open or while you type in a field.
- Keys: **M** for Full map, **F** for Full screen.
- The Full map state and the hide delay are kept in this browser only. They hold no personal data and no keys.
- Tests: a browser suite for the controls (`tests/dom_layout_test.js`) and a Python test that the shipped page is exactly what `build_frontend.py` builds (`tests/test_layout_controls.py`).

## Upgrading from an earlier version

- Your API keys are kept in the folder `~/..china_dashboard` in your user profile, so they carry over with no step.
- Plotted custom markers are saved in `data/custom_markers.json` inside the dashboard folder. Copy that file from the old folder into the new one to keep them.
- `data/cache.json` is rebuilt by the first poll after start, so nothing needs copying.

## What changed in v6.3

- The map fills the screen. Layers opens as a panel over the map; the LATEST NEWS drawer sits on the right edge, with Pause and Resume on the running news.
- India's survey outline is drawn in orange on every map that shows India. Pakistan-administered Kashmir, Gilgit-Baltistan and Aksai Chin lie inside it, shown as part of India.
- Military sites inside India's outline (naval bases, army cantonments, air force bases and similar) are not plotted here. Civil points (pipelines, ports, airports, power plants and other non-military data) are plotted.
- News, notes and inputs about India are shown in the news boxes without restriction.
- Layers and the legend show only the categories that have data in this dashboard.

## Permanent data updates
- Update data (top bar) fetches the latest public data for this dashboard's layers now. The status line shows when data was last updated and when the next automatic update is due.
- Automatic: every 7 days while the dashboard is running (the first run starts about 2 minutes after launch). Change update_every_days in data/dashboard.json; 0 switches automatic updates off.
- Command line (for Windows Task Scheduler): python run.py --update-now runs one update and exits.
- Sources, fixed in app/updates.py (no other address is ever fetched): OurAirports airports (public domain); WRI Global Power Plant Database, nuclear plants (CC BY 4.0); UCDP georeferenced conflict events from the last 30 days (CC BY 4.0); OpenStreetMap military sites, ports and pipelines as points (ODbL, © OpenStreetMap contributors).
- Only layers this dashboard already shows are updated. Curated points are never overwritten; a new point within 2 km of a point in the same layer is skipped. Each point shows its source, licence, accuracy rating and fetch date.
- OpenStreetMap points are crowd-sourced (accuracy Medium): check them before relying on them. Pipelines and cables are shown as points here; their route lines are not updated automatically.
- If a source cannot be reached, its last good data stays and the error is shown in data/updates/status.json.
- Military sites inside India's outline are never added to a dashboard that is not in focus mode.
- Start (start.bat) creates a shortcut named "China Digital Dashboard" on the Desktop and in the Start menu each time it runs, then opens http://127.0.0.1:8787/ in the browser. To pin it to the taskbar, right-click the Desktop shortcut and choose Pin to taskbar (Windows does not let a script pin apps).

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
(38 tests). Browser-side tests run with `npm install` then `npm test`. They load
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
