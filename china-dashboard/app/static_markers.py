"""
Fixed geographic reference points for China/Taiwan/Tibet/SCS. Real,
sourced, city/facility-level locations - not precision targeting data.
Every entry has a `source` field; hover it on the map to see it.

Honest gap, stated directly rather than papered over: some categories you
asked for (ammunition dumps, precise "cyber hub" facility locations) don't
have credible open-source location-level data at the specificity this
project holds itself to - so they're not here as map pins. Cyber activity
(Volt Typhoon, Salt Typhoon, etc.) is still covered, just as reference
content/news items rather than invented coordinates - see reference_content.py.
"""

MARKERS = [
    {"id": "beijing", "name": "Beijing", "lat": 39.9042, "lon": 116.4074, "cat": "capital",
     "aliases": ["beijing"], "note": "Capital; Politburo/State Council.", "source": "-"},
    {"id": "taipei", "name": "Taipei", "lat": 25.0330, "lon": 121.5654, "cat": "capital",
     "aliases": ["taipei"], "note": "Capital of Taiwan.", "source": "-"},
    {"id": "lhasa", "name": "Lhasa", "lat": 29.6500, "lon": 91.1000, "cat": "capital",
     "aliases": ["lhasa"], "note": "Capital of the Tibet Autonomous Region.", "source": "-"},
    {"id": "shanghai", "name": "Shanghai", "lat": 31.2304, "lon": 121.4737, "cat": "capital",
     "aliases": ["shanghai"], "note": "Financial hub.", "source": "-"},

    # --- Flashpoints / chokepoints ---
    {"id": "taiwan_strait", "name": "Taiwan Strait", "lat": 24.6, "lon": 119.9, "cat": "chokepoint",
     "aliases": ["taiwan strait", "median line"], "note": "Recurring PLA air/sea activity; major shipping chokepoint.", "source": "Taiwan MND"},
    {"id": "senkaku", "name": "Senkaku / Diaoyu Islands", "lat": 25.74, "lon": 123.48, "cat": "flashpoint",
     "aliases": ["senkaku", "diaoyu"], "note": "Disputed islands; frequent China Coast Guard patrols.", "source": "Reuters"},
    {"id": "scarborough", "name": "Scarborough Shoal", "lat": 15.13, "lon": 117.75, "cat": "flashpoint",
     "aliases": ["scarborough"], "note": "Contested shoal, repeated China-Philippines incidents.", "source": "CFR"},
    {"id": "spratly", "name": "Spratly Islands", "lat": 10.0, "lon": 114.0, "cat": "flashpoint",
     "aliases": ["spratly"], "note": "Disputed island chain with militarized outposts.", "source": "AMTI/CSIS"},
    {"id": "paracel", "name": "Paracel Islands", "lat": 16.5, "lon": 112.0, "cat": "flashpoint",
     "aliases": ["paracel"], "note": "Disputed islands, PLA-controlled.", "source": "AMTI/CSIS"},
    {"id": "malacca", "name": "Strait of Malacca", "lat": 2.5, "lon": 101.5, "cat": "chokepoint",
     "aliases": ["malacca"], "note": "Critical shipping/energy chokepoint for China-bound trade.", "source": "EIA"},
    {"id": "bashi", "name": "Bashi Channel", "lat": 21.5, "lon": 121.0, "cat": "chokepoint",
     "aliases": ["bashi channel"], "note": "Strait between Taiwan and the Philippines; PLAN transit route to the Pacific.", "source": "background"},

    # --- Naval bases / submarine berths / carrier home ports ---
    {"id": "yulin", "name": "Yulin Naval Base, Hainan", "lat": 18.23, "lon": 109.5, "cat": "submarine_base",
     "aliases": ["yulin", "hainan naval"], "note": "Reported submarine base (incl. SSBN pens); Fujian carrier commissioning site.", "source": "FAS / USNI News"},
    {"id": "qingdao", "name": "Qingdao Naval Base", "lat": 36.05, "lon": 120.33, "cat": "navy_base",
     "aliases": ["qingdao"], "note": "North Sea Fleet HQ; reported home port of carrier Liaoning.", "source": "Wikipedia/ONI"},
    {"id": "ningbo", "name": "Ningbo/Zhoushan Naval Base", "lat": 29.95, "lon": 121.85, "cat": "navy_base",
     "aliases": ["ningbo", "zhoushan"], "note": "East Sea Fleet HQ area.", "source": "background"},
    {"id": "zhanjiang", "name": "Zhanjiang Naval Base", "lat": 21.2, "lon": 110.4, "cat": "navy_base",
     "aliases": ["zhanjiang"], "note": "South Sea Fleet HQ.", "source": "background"},
    {"id": "jiangnan", "name": "Jiangnan Shipyard, Shanghai", "lat": 31.36, "lon": 121.77, "cat": "carrier_port",
     "aliases": ["jiangnan shipyard"], "note": "Built the carrier Fujian.", "source": "Xinhua/USNI News"},
    {"id": "huludao", "name": "Huludao Shipyard", "lat": 40.73, "lon": 120.98, "cat": "submarine_base",
     "aliases": ["huludao"], "note": "Widely reported nuclear-submarine construction site.", "source": "sinodefence/FAS"},
    {"id": "dalian", "name": "Dalian Shipyard", "lat": 38.93, "lon": 121.65, "cat": "navy_base",
     "aliases": ["dalian"], "note": "Major surface-ship and submarine construction/refit yard.", "source": "background"},

    # --- Nuclear-related (reported, open-source imagery analysis) ---
    {"id": "silo_yumen", "name": "Reported ICBM silo field (Yumen)", "lat": 40.3, "lon": 97.2, "cat": "nuclear_site",
     "aliases": ["yumen"], "note": "New missile silo field identified via open-source satellite imagery analysis.", "source": "FAS Nuclear Notebook / Pentagon"},
    {"id": "silo_hami", "name": "Reported ICBM silo field (Hami)", "lat": 42.3, "lon": 93.8, "cat": "nuclear_site",
     "aliases": ["hami"], "note": "Second reported new missile silo field.", "source": "FAS Nuclear Notebook"},
    {"id": "silo_ordos", "name": "Reported ICBM silo field (Ordos)", "lat": 39.6, "lon": 108.9, "cat": "nuclear_site",
     "aliases": ["ordos"], "note": "Third reported new missile silo field.", "source": "FAS Nuclear Notebook"},
    {"id": "lop_nur", "name": "Lop Nur", "lat": 40.87, "lon": 88.7, "cat": "nuclear_site",
     "aliases": ["lop nur", "lop nor"], "note": "Former nuclear weapons test site (tests 1964-1996); China observes a self-declared moratorium since 1996.", "source": "Arms Control Association"},

    # --- Space launch sites (public, well-documented) ---
    {"id": "jiuquan", "name": "Jiuquan Satellite Launch Center", "lat": 40.96, "lon": 100.29, "cat": "space_site",
     "aliases": ["jiuquan"], "note": "China's oldest space launch site; crewed Shenzhou missions launch here.", "source": "CNSA/Xinhua"},
    {"id": "xichang", "name": "Xichang Satellite Launch Center", "lat": 28.25, "lon": 102.02, "cat": "space_site",
     "aliases": ["xichang"], "note": "Launches Beidou navigation and lunar (Chang'e) missions.", "source": "CNSA/Xinhua"},
    {"id": "taiyuan", "name": "Taiyuan Satellite Launch Center", "lat": 38.85, "lon": 111.61, "cat": "space_site",
     "aliases": ["taiyuan"], "note": "Polar-orbit and meteorological satellite launches.", "source": "CNSA/Xinhua"},
    {"id": "wenchang", "name": "Wenchang Space Launch Site", "lat": 19.61, "lon": 110.95, "cat": "space_site",
     "aliases": ["wenchang"], "note": "Coastal launch site for heavy-lift (Long March 5) and space station missions.", "source": "CNSA/Xinhua"},
    {"id": "xian_satellite_control", "name": "Xi'an Satellite Control Center", "lat": 34.26, "lon": 108.94, "cat": "satellite_station",
     "aliases": ["xi'an satellite control", "xian satellite control"], "note": "Reported primary satellite tracking, telemetry and command center.", "source": "background/open reporting"},

    # --- Pipelines / cantonments ---
    {"id": "pipeline_ca", "name": "Central Asia-China Gas Pipeline (terminus)", "lat": 43.8, "lon": 87.6, "cat": "pipeline",
     "aliases": ["central asia-china pipeline"], "note": "Major gas import pipeline from Turkmenistan via Kazakhstan/Uzbekistan, terminating near Urumqi.", "source": "background"},
    {"id": "pipeline_myanmar", "name": "China-Myanmar Oil & Gas Pipeline", "lat": 24.9, "lon": 98.6, "cat": "pipeline",
     "aliases": ["china-myanmar pipeline"], "note": "Pipeline route from Kyaukpyu (Myanmar) into Yunnan, China.", "source": "background"},
    {"id": "wtc_chengdu", "name": "Western Theater Command, Chengdu", "lat": 30.6, "lon": 104.1, "cat": "cantonment",
     "aliases": ["western theater command", "chengdu"], "note": "PLA command overseeing the Tibet and India-border sectors.", "source": "background"},
    {"id": "etc_nanjing", "name": "Eastern Theater Command, Nanjing", "lat": 32.06, "lon": 118.79, "cat": "cantonment",
     "aliases": ["eastern theater command", "nanjing"], "note": "PLA command overseeing the Taiwan Strait/East China Sea sector.", "source": "background"},
    {"id": "stc_guangzhou", "name": "Southern Theater Command, Guangzhou", "lat": 23.13, "lon": 113.26, "cat": "cantonment",
     "aliases": ["southern theater command", "guangzhou"], "note": "PLA command overseeing the South China Sea sector.", "source": "background"},
    {"id": "ntc_shenyang", "name": "Northern Theater Command, Shenyang", "lat": 41.8, "lon": 123.43, "cat": "cantonment",
     "aliases": ["northern theater command", "shenyang"], "note": "PLA command overseeing the Korea/Russia border sector.", "source": "background"},
    {"id": "ctc_beijing", "name": "Central Theater Command, Beijing", "lat": 39.9042, "lon": 116.4074, "cat": "cantonment",
     "aliases": ["central theater command"], "note": "PLA strategic reserve/capital-defense command.", "source": "background"},

    # --- Defense industry HQs (public info; some stock-listed) ---
    {"id": "avic", "name": "AVIC HQ, Beijing", "lat": 39.91, "lon": 116.41, "cat": "defense_industry",
     "aliases": ["avic"], "note": "Aviation Industry Corporation of China - fighter jet development.", "source": "SIPRI arms-industry rankings"},
    {"id": "norinco", "name": "NORINCO HQ, Beijing", "lat": 39.9, "lon": 116.45, "cat": "defense_industry",
     "aliases": ["norinco"], "note": "China North Industries - armored vehicles, munitions.", "source": "SIPRI arms-industry rankings"},
    {"id": "casc", "name": "CASC HQ, Beijing", "lat": 39.92, "lon": 116.3, "cat": "defense_industry",
     "aliases": ["casc"], "note": "China Aerospace Science & Technology Corp - space and ballistic missiles.", "source": "SIPRI arms-industry rankings"},
    {"id": "cssc", "name": "CSSC HQ, Shanghai", "lat": 31.23, "lon": 121.47, "cat": "defense_industry",
     "aliases": ["cssc"], "note": "China State Shipbuilding Corp.", "source": "SIPRI arms-industry rankings"},
]
