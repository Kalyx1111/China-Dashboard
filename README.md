# China Dashboard

**China Dashboard** is a locally hosted **OSINT and intelligence-monitoring platform** for tracking China's strategic, military, geopolitical, cyber, space, technology and regional developments.

***

#### **Key Features**

- **15 Intelligence Categories** for automated news classification.
- **72-Hour News Feed** for recent, unlocated news.
- **GDELT & RSS/Atom** for news monitoring.
- **Telegram Integration** with channel-wise status reporting.
- **Instagram Integration** through Meta's official Business Discovery API.
- **Dark Web RSS** through verified onion feeds and a local Tor connection.
- **Ransomware Intelligence** with connector diagnostics.
- **Non-Blocking Startup** and responsive manual refresh.
- **AES-256-GCM Encryption**, CSP and content validation.

***

#### **15 Intelligence Categories**

Geopolitical & Diplomatic; Military Operations & Force Posture; Strategic Arms & Nuclear Program; Naval & Maritime Security; Air Force & Aviation; Space Tech & Aerospace; Critical Tech & AI Governance; Cyber Espionage & APTs; Darkweb & Threat Intel; Economic & Trade; Internal Security & Intelligence Operations; Social Pulse & Public Sentiment; Happiness & Wellbeing Indices; Natural Hazards & Environmental Risks; Regional Strategic Developments.

***

#### **Data Sources**

- GDELT
- RSS/Atom news feeds
- Public Telegram channels
- Meta Business Discovery API
- Verified Tor onion RSS feeds
- Ransomware.live

***

#### **Configuration**

- Telegram sources: `data/telegram_channels.json`
- Onion RSS sources: `data/onion_sources.json`
- Instagram: Requires eligible Business/Creator accounts and authorised Meta API access.
- Dark Web RSS: Requires a running Tor connection, commonly on port `9050` or `9150`.

***

#### **Testing**

- 35 Python tests passed.
- 3 browser tests passed.
- Dashboard startup, page loading, category alignment and connector error handling verified.

**Note:** Live retrieval of all external sources was not verified during the build. Feed availability depends on network connectivity, source status and API configuration.

***

#### **Running the Dashboard**

Run the supplied Windows startup script:

`start.bat`

***

#### **Disclaimer**

China Dashboard is an OSINT support tool for lawful research and analysis. Keyword-based classifications may produce false positives or false negatives. Independently verify important information using reliable sources.

***
