
(function(){
  "use strict";

  const PROJ = {"scale": 713.2645520531165, "translate": [-794.6767465932937, 805.835758183104], "width": 1000, "height": 760};
  const HEADING_KEYS = ["geo", "milops", "arms", "naval", "scs", "air", "space", "tech", "cyber", "econ", "mss", "social", "wellbeing", "hazard"];
  const SEED_DATA = {"updated_at": "2026-09-27T00:00:00Z", "items_by_category": {"military": [{"category": "military", "label": "Taiwan Strait", "text": "14 PLA aircraft, 6 PLAN vessels and 8 official ships detected around Taiwan in a single 24h window; several sorties crossed the median line.", "source": "Taiwan MND", "date": "Aug 9, 2026", "url": null, "connector": "seed"}, {"category": "military", "label": "ADIZ trend", "text": "PLA incursions into Taiwan's ADIZ hit a record 3,615 sorties in 2024 — more than double 2023's 1,669 — with the pace continuing into 2025–26.", "source": "Janes / Taiwan MND", "date": "2024–25", "url": null, "connector": "seed"}, {"category": "military", "label": "Fujian carrier", "text": "China's 3rd carrier — first with EMALS catapults — was commissioned Nov 5, 2025 at Sanya; J-35 stealth fighters and KJ-600 AEW aircraft have since completed catapult launch trials aboard.", "source": "Xinhua / USNI News", "date": "Nov 2025–Jul 2026", "url": null, "connector": "seed"}, {"category": "military", "label": "Defense budget", "text": "2026 official defense budget set at RMB 1.94 trillion (~US$281B), +7% YoY — the 11th straight year of single-digit growth. Pentagon assesses real spending as 32–63% higher than declared.", "source": "NPC / Defense News", "date": "Mar 2026", "url": null, "connector": "seed"}, {"category": "military", "label": "South China Sea", "text": "China and the Philippines clashed three times in a single week at Scarborough and Second Thomas Shoals, prompting joint US–Philippines–Japan maritime drills.", "source": "CFR Global Conflict Tracker", "date": "Jul 2026", "url": null, "connector": "seed"}, {"category": "military", "label": "East China Sea", "text": "China Coast Guard patrolled the Senkaku/Diaoyu contiguous zone a record 357 of 365 days in 2025 (1,380 vessel-days) amid a wider China–Japan rift over Taiwan remarks.", "source": "Reuters / ORF", "date": "2025–26", "url": null, "connector": "seed"}, {"category": "military", "label": "Live-fire drills", "text": "PLA conducted two days of live-fire exercises near Taiwan just after FM Wang Yi met US Secretary of State Rubio in the Philippines.", "source": "ASPI 'State of the Strait'", "date": "Jul 23–24, 2026", "url": null, "connector": "seed"}], "economic": [{"category": "economic", "label": "GDP growth", "text": "Q2 2026 GDP +4.3% YoY — weakest since Q4 2022 — as H1 came in at +4.7%, still inside the official 4.5–5% full-year target.", "source": "NBS / CNN", "date": "Jul 2026", "url": null, "connector": "seed"}, {"category": "economic", "label": "Trade", "text": "Exports rose 17.6% in H1 2026 (June +27% YoY) on AI-chip and EV demand, even as import growth and a weak property sector kept net trade volatile.", "source": "NBS / IndexBox", "date": "Jul 2026", "url": null, "connector": "seed"}, {"category": "economic", "label": "US tariff status", "text": "No comprehensive new deal has replaced Phase One; both sides maintain a 'tactical truce' — a ~30% baseline tariff regime extended through Nov 10, 2026.", "source": "White House / China Briefing", "date": "2025–26", "url": null, "connector": "seed"}, {"category": "economic", "label": "Retaliatory measures", "text": "Beijing sanctioned 6 US entities and tightened drone-export controls, retaliating for new US forced-labor tariffs and an FCC drone import ban — weeks ahead of Xi's planned Washington visit.", "source": "CNN / SCMP", "date": "Aug 5, 2026", "url": null, "connector": "seed"}, {"category": "economic", "label": "Section 301", "text": "USTR added a further 12.5% Section 301 tariff on Chinese goods over forced-labor enforcement, lifting the cumulative rate again.", "source": "China Briefing", "date": "Jul 23–24, 2026", "url": null, "connector": "seed"}, {"category": "economic", "label": "Politburo signal", "text": "The Politburo pledged faster fiscal spending and 'practical, timely incremental measures,' naming domestic demand and capital-market resilience as H2 priorities.", "source": "SCMP / Xinhua", "date": "Jul 30, 2026", "url": null, "connector": "seed"}, {"category": "economic", "label": "Markets", "text": "Shanghai Composite closed near 3,940 (+2.8% on the week); consumer prices logged a third straight month of decline even as the PBOC signalled a more dovish stance.", "source": "Trading Economics", "date": "Aug 7, 2026", "url": null, "connector": "seed"}], "political": [{"category": "political", "label": "US summit diplomacy", "text": "Trump's May 14–15 Beijing state visit — his first China trip since 2017 — produced a 'framework for deeper cooperation'; Xi's return visit to the White House is set for Sept 24, 2026.", "source": "CSIS / Forbes", "date": "May–Sep 2026", "url": null, "connector": "seed"}, {"category": "political", "label": "India border", "text": "The 36th WMCC round in New Delhi saw both sides 'engage in frank discussions' on the LAC and agree to keep using existing military-to-military channels.", "source": "India MEA", "date": "Aug 6–7, 2026", "url": null, "connector": "seed"}, {"category": "political", "label": "Russia ties", "text": "Putin described China–Russia relations as at an 'unprecedented level' during his most recent visit to China.", "source": "Reuters", "date": "2026", "url": null, "connector": "seed"}, {"category": "political", "label": "Japan rift", "text": "Tensions trace to PM Takaichi's Nov 2025 remark that a Chinese attack on Taiwan could be 'survival-threatening' for Japan — triggering a Chinese travel warning and a formal Japanese protest.", "source": "Al Jazeera", "date": "Nov 2025–2026", "url": null, "connector": "seed"}, {"category": "political", "label": "Domestic policy", "text": "New nationwide rental-market regulations were enacted to legalize and stabilize the sector — part of a wider domestic-demand push flagged by the Politburo.", "source": "State media", "date": "2025–26", "url": null, "connector": "seed"}], "hazard": [{"category": "hazard", "label": "Typhoon Dolphin", "text": "The most powerful typhoon to hit China in 2026 made landfall near Yuhuan, Zhejiang; over 1 million evacuated, ~1,500 Shanghai flights cancelled, and 98,900 evacuated in Fujian alone.", "source": "Reuters / CNBC", "date": "Aug 9, 2026", "url": null, "connector": "seed"}, {"category": "hazard", "label": "Typhoon Noul", "text": "The 12th typhoon of the year and 3rd that month battered southeastern China with flooding and high winds.", "source": "Al Jazeera", "date": "Jul 26, 2026", "url": null, "connector": "seed"}], "aviation": [{"category": "aviation", "label": "Unexplained 40-day NOTAM", "text": "China reserved coastal airspace larger than Taiwan (Yellow Sea to East China Sea) for 40 days with no announced exercise — an unprecedented duration flagged by independent OSINT trackers.", "source": "WSJ / PAX Tracker / SeaLight (Stanford)", "date": "Mar 27–May 6, 2026", "url": null, "connector": "seed"}, {"category": "aviation", "label": "Drill-linked disruption", "text": "A CAAC NOTAM for the 'Justice Mission 2025' PLA drills disrupted 857 international and 84 domestic flights, affecting 100,000+ travelers.", "source": "Focus Taiwan / USNI News", "date": "Dec 29, 2025", "url": null, "connector": "seed"}], "strategic": [{"category": "strategic", "label": "Warhead estimate", "text": "China's operational nuclear stockpile is independently estimated at ~620 warheads as of mid-2026 (up from ~500 in 2023); the Pentagon projects it could exceed 1,000 by 2030.", "source": "Bulletin of the Atomic Scientists / Arms Control Association", "date": "Jul 2026", "url": null, "connector": "seed"}, {"category": "strategic", "label": "Delivery systems", "text": "~775 land-based missile launchers are assessed, with roughly 475 ICBM-capable; three new ICBM silo fields in western China have been identified via commercial satellite imagery.", "source": "FAS Nuclear Notebook", "date": "2026", "url": null, "connector": "seed"}, {"category": "strategic", "label": "Test posture", "text": "China has observed a self-declared nuclear-testing moratorium since 1996 and is a CTBT signatory (not yet ratified); no detonation-test activity is indicated in current open-source monitoring.", "source": "Arms Control Association", "date": "2026", "url": null, "connector": "seed"}, {"category": "strategic", "label": "CBRN readiness drill", "text": "The PLA Eastern Theater Command (East China Sea / Taiwan Strait area) ran a decontamination exercise simulating response to a nuclear-contamination scenario — a defensive readiness drill, not a weapons test.", "source": "CCTV state media", "date": "2026", "url": null, "connector": "seed"}], "social_china": [{"category": "social_china", "label": "Cybersecurity push", "text": "Xi Jinping elevated cybersecurity to a 'core national-security pillar' in a stated drive for 'cyber superpower' status — a top trending policy topic on Weibo.", "source": "Weibo / state media", "date": "research snapshot", "url": null, "connector": "seed"}, {"category": "social_china", "label": "Alipay privacy debate", "text": "A nationwide debate broke out after users rushed to revoke hidden data-sharing authorizations on Alipay.", "source": "Weibo", "date": "research snapshot", "url": null, "connector": "seed"}, {"category": "social_china", "label": "Consumer transparency", "text": "A pre-made-dish labeling controversy involving a well-known restaurant chain became a multi-week trending topic, prompting calls for stricter food-labeling rules.", "source": "Weibo", "date": "research snapshot", "url": null, "connector": "seed"}, {"category": "social_china", "label": "Rental-market reform", "text": "The new nationwide rental regulations were widely discussed as a rare 'comprehensive' step toward tenant protections.", "source": "Weibo / state media", "date": "research snapshot", "url": null, "connector": "seed"}], "social_global": [{"category": "social_global", "label": "Typhoon Dolphin", "text": "China's strongest 2026 typhoon and its mass evacuations dominated international wire coverage.", "source": "Reuters / CNBC", "date": "research snapshot", "url": null, "connector": "seed"}, {"category": "social_global", "label": "Drone-export curbs", "text": "China's Aug 5 sanctions and drone-export tightening — timed just ahead of Xi's Washington trip — drew wide Western financial-press coverage.", "source": "CNN / SCMP / Fortune", "date": "research snapshot", "url": null, "connector": "seed"}, {"category": "social_global", "label": "South China Sea", "text": "Water-cannon and baton-strike incidents near Scarborough and Second Thomas Shoals kept the dispute in international headlines, drawing US State Department statements.", "source": "AP / Al Jazeera", "date": "research snapshot", "url": null, "connector": "seed"}, {"category": "social_global", "label": "Fujian carrier", "text": "Coverage of the Fujian's approach to full operational capability featured heavily in Western defense-trade press.", "source": "USNI News / TWZ", "date": "research snapshot", "url": null, "connector": "seed"}], "cyber": [{"category": "cyber", "label": "Volt Typhoon", "text": "US and allied agencies have repeatedly warned about Volt Typhoon, a state-linked actor assessed to be pre-positioning access inside US critical infrastructure networks.", "source": "CISA/FBI/NSA joint advisories", "date": "ongoing", "url": null, "connector": "reference"}, {"category": "cyber", "label": "Salt Typhoon", "text": "A separate state-linked intrusion set, Salt Typhoon, has been reported compromising major telecommunications providers, drawing sustained US government attention.", "source": "US government advisories / press reporting", "date": "ongoing", "url": null, "connector": "reference"}, {"category": "cyber", "label": "MSS attribution pattern", "text": "US indictments and advisories have repeatedly attributed a range of cyber-espionage campaigns to China's Ministry of State Security (MSS) and affiliated contractors.", "source": "DOJ indictments / advisories", "date": "background", "url": null, "connector": "reference"}], "space": [{"category": "space", "label": "Tiangong space station", "text": "China operates the Tiangong space station with rotating three-person crews, launched via Shenzhou missions from Jiuquan.", "source": "CNSA/Xinhua", "date": "ongoing", "url": null, "connector": "reference"}, {"category": "space", "label": "Lunar program", "text": "China's Chang'e lunar program has conducted sample-return and far-side missions, with crewed lunar landing plans stated for by 2030.", "source": "CNSA", "date": "background", "url": null, "connector": "reference"}, {"category": "space", "label": "Beidou navigation system", "text": "China's Beidou satellite navigation system reached full global coverage, positioned as an alternative to GPS.", "source": "CNSA/Xinhua", "date": "background", "url": null, "connector": "reference"}]}, "markers": [{"id": "beijing", "name": "Beijing", "lat": 39.9042, "lon": 116.4074, "cat": "capital", "note": "Capital; Politburo/State Council.", "source": "-", "date": "", "linked_items": []}, {"id": "taipei", "name": "Taipei", "lat": 25.033, "lon": 121.5654, "cat": "capital", "note": "Capital of Taiwan.", "source": "-", "date": "", "linked_items": []}, {"id": "lhasa", "name": "Lhasa", "lat": 29.65, "lon": 91.1, "cat": "capital", "note": "Capital of the Tibet Autonomous Region.", "source": "-", "date": "", "linked_items": []}, {"id": "shanghai", "name": "Shanghai", "lat": 31.2304, "lon": 121.4737, "cat": "capital", "note": "Financial hub.", "source": "-", "date": "", "linked_items": []}, {"id": "taiwan_strait", "name": "Taiwan Strait", "lat": 24.6, "lon": 119.9, "cat": "chokepoint", "note": "Recurring PLA air/sea activity; major shipping chokepoint.", "source": "Taiwan MND", "date": "", "linked_items": []}, {"id": "senkaku", "name": "Senkaku / Diaoyu Islands", "lat": 25.74, "lon": 123.48, "cat": "flashpoint", "note": "Disputed islands; frequent China Coast Guard patrols.", "source": "Reuters", "date": "", "linked_items": []}, {"id": "scarborough", "name": "Scarborough Shoal", "lat": 15.13, "lon": 117.75, "cat": "flashpoint", "note": "Contested shoal, repeated China-Philippines incidents.", "source": "CFR", "date": "", "linked_items": []}, {"id": "spratly", "name": "Spratly Islands", "lat": 10.0, "lon": 114.0, "cat": "flashpoint", "note": "Disputed island chain with militarized outposts.", "source": "AMTI/CSIS", "date": "", "linked_items": []}, {"id": "paracel", "name": "Paracel Islands", "lat": 16.5, "lon": 112.0, "cat": "flashpoint", "note": "Disputed islands, PLA-controlled.", "source": "AMTI/CSIS", "date": "", "linked_items": []}, {"id": "malacca", "name": "Strait of Malacca", "lat": 2.5, "lon": 101.5, "cat": "chokepoint", "note": "Critical shipping/energy chokepoint for China-bound trade.", "source": "EIA", "date": "", "linked_items": []}, {"id": "bashi", "name": "Bashi Channel", "lat": 21.5, "lon": 121.0, "cat": "chokepoint", "note": "Strait between Taiwan and the Philippines; PLAN transit route to the Pacific.", "source": "background", "date": "", "linked_items": []}, {"id": "yulin", "name": "Yulin Naval Base, Hainan", "lat": 18.23, "lon": 109.5, "cat": "submarine_base", "note": "Reported submarine base (incl. SSBN pens); Fujian carrier commissioning site.", "source": "FAS / USNI News", "date": "", "linked_items": []}, {"id": "qingdao", "name": "Qingdao Naval Base", "lat": 36.05, "lon": 120.33, "cat": "navy_base", "note": "North Sea Fleet HQ; reported home port of carrier Liaoning.", "source": "Wikipedia/ONI", "date": "", "linked_items": []}, {"id": "ningbo", "name": "Ningbo/Zhoushan Naval Base", "lat": 29.95, "lon": 121.85, "cat": "navy_base", "note": "East Sea Fleet HQ area.", "source": "background", "date": "", "linked_items": []}, {"id": "zhanjiang", "name": "Zhanjiang Naval Base", "lat": 21.2, "lon": 110.4, "cat": "navy_base", "note": "South Sea Fleet HQ.", "source": "background", "date": "", "linked_items": []}, {"id": "jiangnan", "name": "Jiangnan Shipyard, Shanghai", "lat": 31.36, "lon": 121.77, "cat": "carrier_port", "note": "Built the carrier Fujian.", "source": "Xinhua/USNI News", "date": "", "linked_items": []}, {"id": "huludao", "name": "Huludao Shipyard", "lat": 40.73, "lon": 120.98, "cat": "submarine_base", "note": "Widely reported nuclear-submarine construction site.", "source": "sinodefence/FAS", "date": "", "linked_items": []}, {"id": "dalian", "name": "Dalian Shipyard", "lat": 38.93, "lon": 121.65, "cat": "navy_base", "note": "Major surface-ship and submarine construction/refit yard.", "source": "background", "date": "", "linked_items": []}, {"id": "silo_yumen", "name": "Reported ICBM silo field (Yumen)", "lat": 40.3, "lon": 97.2, "cat": "nuclear_site", "note": "New missile silo field identified via open-source satellite imagery analysis.", "source": "FAS Nuclear Notebook / Pentagon", "date": "", "linked_items": []}, {"id": "silo_hami", "name": "Reported ICBM silo field (Hami)", "lat": 42.3, "lon": 93.8, "cat": "nuclear_site", "note": "Second reported new missile silo field.", "source": "FAS Nuclear Notebook", "date": "", "linked_items": []}, {"id": "silo_ordos", "name": "Reported ICBM silo field (Ordos)", "lat": 39.6, "lon": 108.9, "cat": "nuclear_site", "note": "Third reported new missile silo field.", "source": "FAS Nuclear Notebook", "date": "", "linked_items": []}, {"id": "lop_nur", "name": "Lop Nur", "lat": 40.87, "lon": 88.7, "cat": "nuclear_site", "note": "Former nuclear weapons test site (tests 1964-1996); China observes a self-declared moratorium since 1996.", "source": "Arms Control Association", "date": "", "linked_items": []}, {"id": "jiuquan", "name": "Jiuquan Satellite Launch Center", "lat": 40.96, "lon": 100.29, "cat": "space_site", "note": "China's oldest space launch site; crewed Shenzhou missions launch here.", "source": "CNSA/Xinhua", "date": "", "linked_items": []}, {"id": "xichang", "name": "Xichang Satellite Launch Center", "lat": 28.25, "lon": 102.02, "cat": "space_site", "note": "Launches Beidou navigation and lunar (Chang'e) missions.", "source": "CNSA/Xinhua", "date": "", "linked_items": []}, {"id": "taiyuan", "name": "Taiyuan Satellite Launch Center", "lat": 38.85, "lon": 111.61, "cat": "space_site", "note": "Polar-orbit and meteorological satellite launches.", "source": "CNSA/Xinhua", "date": "", "linked_items": []}, {"id": "wenchang", "name": "Wenchang Space Launch Site", "lat": 19.61, "lon": 110.95, "cat": "space_site", "note": "Coastal launch site for heavy-lift (Long March 5) and space station missions.", "source": "CNSA/Xinhua", "date": "", "linked_items": []}, {"id": "xian_satellite_control", "name": "Xi'an Satellite Control Center", "lat": 34.26, "lon": 108.94, "cat": "satellite_station", "note": "Reported primary satellite tracking, telemetry and command center.", "source": "background/open reporting", "date": "", "linked_items": []}, {"id": "pipeline_ca", "name": "Central Asia-China Gas Pipeline (terminus)", "lat": 43.8, "lon": 87.6, "cat": "pipeline", "note": "Major gas import pipeline from Turkmenistan via Kazakhstan/Uzbekistan, terminating near Urumqi.", "source": "background", "date": "", "linked_items": []}, {"id": "pipeline_myanmar", "name": "China-Myanmar Oil & Gas Pipeline", "lat": 24.9, "lon": 98.6, "cat": "pipeline", "note": "Pipeline route from Kyaukpyu (Myanmar) into Yunnan, China.", "source": "background", "date": "", "linked_items": []}, {"id": "wtc_chengdu", "name": "Western Theater Command, Chengdu", "lat": 30.6, "lon": 104.1, "cat": "cantonment", "note": "PLA command overseeing the Tibet and India-border sectors.", "source": "background", "date": "", "linked_items": []}, {"id": "etc_nanjing", "name": "Eastern Theater Command, Nanjing", "lat": 32.06, "lon": 118.79, "cat": "cantonment", "note": "PLA command overseeing the Taiwan Strait/East China Sea sector.", "source": "background", "date": "", "linked_items": []}, {"id": "stc_guangzhou", "name": "Southern Theater Command, Guangzhou", "lat": 23.13, "lon": 113.26, "cat": "cantonment", "note": "PLA command overseeing the South China Sea sector.", "source": "background", "date": "", "linked_items": []}, {"id": "ntc_shenyang", "name": "Northern Theater Command, Shenyang", "lat": 41.8, "lon": 123.43, "cat": "cantonment", "note": "PLA command overseeing the Korea/Russia border sector.", "source": "background", "date": "", "linked_items": []}, {"id": "ctc_beijing", "name": "Central Theater Command, Beijing", "lat": 39.9042, "lon": 116.4074, "cat": "cantonment", "note": "PLA strategic reserve/capital-defense command.", "source": "background", "date": "", "linked_items": []}, {"id": "avic", "name": "AVIC HQ, Beijing", "lat": 39.91, "lon": 116.41, "cat": "defense_industry", "note": "Aviation Industry Corporation of China - fighter jet development.", "source": "SIPRI arms-industry rankings", "date": "", "linked_items": []}, {"id": "norinco", "name": "NORINCO HQ, Beijing", "lat": 39.9, "lon": 116.45, "cat": "defense_industry", "note": "China North Industries - armored vehicles, munitions.", "source": "SIPRI arms-industry rankings", "date": "", "linked_items": []}, {"id": "casc", "name": "CASC HQ, Beijing", "lat": 39.92, "lon": 116.3, "cat": "defense_industry", "note": "China Aerospace Science & Technology Corp - space and ballistic missiles.", "source": "SIPRI arms-industry rankings", "date": "", "linked_items": []}, {"id": "cssc", "name": "CSSC HQ, Shanghai", "lat": 31.23, "lon": 121.47, "cat": "defense_industry", "note": "China State Shipbuilding Corp.", "source": "SIPRI arms-industry rankings", "date": "", "linked_items": []}], "connector_status": [{"name": "offline_seed", "configured": true, "ok": true, "message": "Offline research snapshot - backend not connected", "item_count": 41}], "total_items": 41};
  const CAT_META = {"military": {"label": "Military & Strategic", "color": "var(--amber)"}, "economic": {"label": "Economic & Trade", "color": "var(--cyan-h)"}, "political": {"label": "Political & Diplomatic", "color": "var(--green)"}, "hazard": {"label": "Natural Hazards", "color": "var(--violet)"}, "aviation": {"label": "Aviation & Maritime Notices", "color": "var(--violet)"}, "strategic": {"label": "Strategic & Arms Monitoring", "color": "var(--magenta)"}, "cyber": {"label": "Cyber & MSS", "color": "var(--red)"}, "space": {"label": "Space Program", "color": "var(--cyan-h)"}, "social_china": {"label": "Inside China", "color": "var(--gold)"}, "social_global": {"label": "About China - Global", "color": "var(--gold)"}};

  function escapeHtml(s){
    if(s === null || s === undefined) return "";
    return String(s).replace(/[&<>"']/g, function(c){
      return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];
    });
  }

  function project(lon, lat){
    const lambda = lon * Math.PI/180, phi = lat * Math.PI/180;
    const x = lambda, y = Math.log(Math.tan(Math.PI/4 + phi/2));
    return [PROJ.translate[0] + x*PROJ.scale, PROJ.translate[1] - y*PROJ.scale];
  }

  const MARKER_COLOR = {"capital": "#c9a35c", "flashpoint": "#ef5354", "chokepoint": "#f59e0b", "hazard": "#58c4ff", "submarine_base": "#fb923c", "navy_base": "#f97316", "carrier_port": "#fdba74", "cantonment": "#c084fc", "nuclear_site": "#facc15", "space_site": "#06b6d4", "satellite_station": "#60a5fa", "defense_industry": "#84cc16", "pipeline": "#4ade80", "nuclear_plant": "#eab308", "air_base": "#a78bfa", "airport": "#38bdf8", "seaport": "#22c55e", "custom": "#ffffff"};

  // ---------------- 72h / All-time window ----------------
  let timeWindow = "72h";   // default per request; stays until the user picks otherwise
  const WINDOW_MS = 72 * 3600 * 1000;

  // Robust across the formats the connectors actually emit: ISO, RFC-822 (RSS
  // "published"), GDELT "YYYYMMDDTHHMMSSZ", and USGS epoch-ms as a string.
  function parseItemDate(s){
    if(!s) return null;
    if(/^\d{13}$/.test(String(s))) return new Date(parseInt(s, 10));
    const g = /^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})Z$/.exec(String(s));
    if(g) return new Date(Date.UTC(+g[1], +g[2]-1, +g[3], +g[4], +g[5], +g[6]));
    const d = new Date(s);
    return isNaN(d.getTime()) ? null : d;
  }
  function inWindow(it){
    if(timeWindow === "all") return true;
    const d = parseItemDate(it.date);
    // Strict by design: an item with no verifiable timestamp (background
    // reference entries dated "ongoing"/"background", or a date string that
    // can't be parsed) is NOT shown in the 72h view - claiming it's "last
    // 72 hours" news when nothing proves that would break the one rule this
    // toggle exists to enforce. Switch to All Time to see them.
    if(!d) return false;
    return (Date.now() - d.getTime()) <= WINDOW_MS;
  }
  function windowedCats(cats){
    const out = {};
    Object.keys(cats).forEach(function(k){ out[k] = (cats[k]||[]).filter(inWindow); });
    return out;
  }

  let currentData = null, isLive = false;
  // start activeLayers from whatever the checkboxes actually show as checked
  // in the HTML (event layers on, infrastructure layers off by default),
  // rather than hardcoding it separately and risking the two going out of sync
  let activeLayers = new Set(
    Array.from(document.querySelectorAll(".layer-cb")).filter(cb => cb.checked).map(cb => cb.dataset.layer)
  );
  let refreshTimer = null;
  let customMarkers = [];

  // ---------------- data loading ----------------
  async function loadData(manual){
    const btn = document.getElementById("refreshBtn");
    if(manual && btn){ btn.classList.add("spinning"); btn.disabled = true; }
    try {
      const url = manual ? "/api/refresh" : "/api/snapshot";
      const opts = manual ? {method:"POST"} : {cache:"no-store"};
      const res = await fetch(url, opts);
      if(!res.ok){
        if(res.status === 429){ const j = await res.json().catch(()=>({})); throw new Error(j.error || "rate limited"); }
        // try to surface the server's own error detail (e.g. a specific
        // connector/rendering failure), not just the bare status code
        const body = await res.json().catch(()=>null);
        throw new Error(body && body.error ? ("HTTP " + res.status + ": " + body.error) : ("HTTP " + res.status));
      }
      const data = await res.json();
      currentData = data; isLive = true;
      render(data, true, null);
    } catch(e) {
      currentData = SEED_DATA; isLive = false;
      render(SEED_DATA, false, e.message);
    } finally {
      if(btn){ btn.classList.remove("spinning"); btn.disabled = false; }
    }
  }

  // ---------------- render orchestration ----------------
  function render(data, live, errMsg){
    // apply the 72h / All-time window ONCE, then everything below (panels,
    // KPIs, map dots) reads from the same filtered view - they can't disagree
    const view = Object.assign({}, data, {items_by_category: windowedCats(data.items_by_category || {})});
    view.markers = (data.markers || []).map(function(m){
      return Object.assign({}, m, {linked_items: (m.linked_items || []).filter(inWindow)});
    });
    renderStatusBar(live, view, errMsg);
    renderKPIs(view);
    renderMarkers(view.markers, view.items_by_category);
    renderPanels(view.items_by_category);
    renderTicker(view);
    renderDarkWeb(view);
    renderConnectorStrip(view.connector_status || [], live);
    applyFilter(); // keep an active search query applied across re-renders
  }

  function renderStatusBar(live, data, errMsg){
    const pill = document.getElementById("statusPill");
    const txt = document.getElementById("statusPillText");
    const banner = document.getElementById("offlineBanner");
    const footerNote = document.getElementById("footerNote");
    const snapDate = document.getElementById("snapDate");
    if(live){
      pill.className = "status-pill live"; txt.textContent = "Live backend";
      banner.classList.remove("show");
      const when = data.updated_at ? new Date(data.updated_at*1000).toLocaleTimeString() : "just now";
      snapDate.textContent = "Backend last polled " + when;
      footerNote.innerHTML = "Live backend connected &middot; " + (data.total_items||0) + " items in feed &middot; not investment/operational advice, verify time-critical items against primary sources";
    } else {
      pill.className = "status-pill offline"; txt.textContent = "Offline snapshot";
      banner.classList.add("show");
      banner.innerHTML = "<b>Backend not reachable" + (errMsg ? " (" + escapeHtml(errMsg) + ")" : "") +
        "</b> &mdash; showing the embedded Aug 10, 2026 research snapshot instead of live data. " +
        "Run <code>python run.py</code> and reload this page to connect the real backend.";
      snapDate.textContent = "Offline snapshot - Aug 10, 2026";
      footerNote.textContent = "Offline snapshot mode - start the Python backend for live data.";
    }
  }

  function countItems(cats, dataObj){
    let n = 0;
    cats.forEach(c => n += (dataObj[c]||[]).length);
    return n;
  }

  function renderKPIs(data){
    const cats = data.items_by_category || {};
    document.getElementById("kpi-markers").textContent = (data.markers||[]).length;
    document.getElementById("kpi-military").textContent = (cats.milops||[]).length;
    document.getElementById("kpi-economic").textContent = (cats.econ||[]).length;
    document.getElementById("kpi-political").textContent = (cats.geo||[]).length;
    document.getElementById("kpi-hazard").textContent = (cats.hazard||[]).length;
    document.getElementById("count-markers").textContent = (data.markers||[]).length + " sites";
    const infraNote = document.getElementById("infraNote");
    if(infraNote){
      const info = data.infrastructure || {};
      if(isLive){
        infraNote.textContent = (info.airport_count||0) + " airports live from OurAirports (CC0 dataset) + " +
          "verified seaports/naval bases/defense HQs. Real-time ship/submarine positions aren't shown - " +
          "no open source publishes that for any navy (see README).";
      } else {
        infraNote.textContent = "Offline snapshot: infrastructure markers frozen from build time, not live.";
      }
    }
  }

  // ---------------- map markers ----------------
  function addMarkerEl(layer, m, color, extra){
    const [x,y] = project(m.lon, m.lat);
    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute("class", "marker");
    g.setAttribute("transform", "translate(" + x.toFixed(1) + "," + y.toFixed(1) + ")");
    g.dataset.name = m.name; g.dataset.note = m.note || "";
    g.dataset.source = m.source || ""; g.dataset.date = m.date || "";
    g.dataset.color = color;
    g.dataset.linked = JSON.stringify(m.linked_items || []);
    const pulse = (m.linked_items && m.linked_items.length) || (extra && extra.pulse);
    g.innerHTML = (pulse ? '<circle class="pulse" r="5" fill="none" stroke="'+color+'" stroke-width="1.6"/>' : '') +
                  '<circle class="core" r="3.4" fill="'+color+'"/>';
    layer.appendChild(g);
  }

  function renderMarkers(markers, cats){
    const layer = document.getElementById("markerLayer");
    if(!layer) return;
    layer.innerHTML = "";
    // 1. named strategic sites (pulse when a windowed headline mentions them)
    (markers || []).forEach(function(m){
      if(!activeLayers.has(m.cat)) return;
      addMarkerEl(layer, m, MARKER_COLOR[m.cat] || "#c9a35c");
    });
    // 2. any windowed item that carries its OWN coordinates (USGS quakes) -
    // a real lat/lon from the source, not a guess
    if(activeLayers.has("hazard")){
      Object.keys(cats || {}).forEach(function(k){
        (cats[k] || []).forEach(function(it){
          if(typeof it.lat === "number" && typeof it.lon === "number"){
            addMarkerEl(layer, {name: it.label, note: it.text, source: it.source, date: it.date,
              lat: it.lat, lon: it.lon, linked_items: []}, MARKER_COLOR.hazard, {pulse: true});
          }
        });
      });
    }
    // 3. the user's own plotted markers
    if(activeLayers.has("custom")){
      customMarkers.forEach(function(cm){
        addMarkerEl(layer, {name: cm.label, note: cm.remark || "(no remark)", source: "You",
          date: cm.added, lat: cm.lat, lon: cm.lon, linked_items: []}, MARKER_COLOR.custom, {pulse: true});
      });
    }
    wireMarkerEvents();
  }

  function wireMarkerEvents(){
    const wrap = document.getElementById("mapWrap");
    const tip = document.getElementById("mapTip");
    if(!wrap || !tip) return;
    function hideTip(){ tip.classList.remove("show"); }
    function positionTip(evt){
      const rect = wrap.getBoundingClientRect();
      let cx, cy;
      if(evt.touches && evt.touches[0]){ cx = evt.touches[0].clientX; cy = evt.touches[0].clientY; }
      else { cx = evt.clientX; cy = evt.clientY; }
      let x = cx - rect.left, y = cy - rect.top;
      const tw = 260, th = 130;
      if(x + tw + 24 > rect.width) x = x - tw - 18; else x = x + 16;
      if(y + th + 20 > rect.height) y = Math.max(4, y - th - 10); else y = y + 14;
      tip.style.left = x+"px"; tip.style.top = y+"px";
    }
    function showTip(m, evt){
      const name = m.dataset.name, note = m.dataset.note, source = m.dataset.source,
            date = m.dataset.date, color = m.dataset.color;
      let linked = [];
      try { linked = JSON.parse(m.dataset.linked || "[]"); } catch(e){ linked = []; }
      let html = '<div class="t-name" style="color:'+color+'">'+escapeHtml(name)+'</div>' +
                 '<div>'+escapeHtml(note)+'</div>' +
                 '<div class="t-meta">'+escapeHtml(source)+(date?(" &middot; "+escapeHtml(date)):"")+'</div>';
      if(linked.length){
        html += '<div class="t-meta" style="margin-top:6px;color:var(--text-dim);">Recent related items:</div>';
        linked.slice(0,3).forEach(function(li){
          html += '<div class="marker-tt-link">&bull; ' + escapeHtml((li.label||"").slice(0,60)) + '</div>';
        });
      }
      tip.innerHTML = html;
      positionTip(evt);
      tip.classList.add("show");
    }
    wrap.querySelectorAll(".marker").forEach(function(m){
      m.addEventListener("mouseenter", function(evt){ showTip(m, evt); });
      m.addEventListener("mousemove", positionTip);
      m.addEventListener("mouseleave", hideTip);
      m.addEventListener("click", function(evt){
        if(tip.classList.contains("show")){ hideTip(); } else { showTip(m, evt); }
      });
    });
    wrap.removeEventListener("mouseleave", hideTip);
    wrap.addEventListener("mouseleave", hideTip);
  }

  // layer toggle checkboxes
  document.querySelectorAll(".layer-cb").forEach(function(cb){
    cb.addEventListener("change", function(){
      const cat = cb.dataset.layer;
      if(cb.checked) activeLayers.add(cat); else activeLayers.delete(cat);
      if(currentData) renderMarkers(currentData.markers || []);
    });
  });

  // ---------------- panels ----------------
  // Only http(s) URLs ever become links. A feed-supplied "javascript:" / "data:" URL
  // would otherwise be a click-to-run XSS even though every text field is escaped.
  function safeUrl(u){
    if(!u) return null;
    try { const x = new URL(String(u)); return (x.protocol === "http:" || x.protocol === "https:") ? x.href : null; }
    catch(e){ return null; }
  }
  function fmtDate(s){
    const d = parseItemDate(s);
    return d ? d.toLocaleString([], {dateStyle:"medium", timeStyle:"short"}) : (s || "");
  }
  function itemHtml(it){
    const href = safeUrl(it.url);
    return '<div class="item" data-search="'+escapeHtml(((it.label||"")+" "+(it.text||"")).toLowerCase())+'">' +
      '<div class="lbl">'+escapeHtml(it.label)+'</div>' +
      (it.text && it.text !== it.label ? '<div class="txt">'+escapeHtml(it.text)+'</div>' : '') +
      '<div class="meta">'+escapeHtml(it.source)+(it.date?(" &middot; "+escapeHtml(fmtDate(it.date))):"")+
      (href ? ' &middot; <a href="'+escapeHtml(href)+'" target="_blank" rel="noopener noreferrer">source &#8599;</a>' : '')+
      '</div></div>';
  }

  function renderPanels(cats){
    const ids = HEADING_KEYS;
    ids.forEach(function(cat){
      const container = document.getElementById("items-"+cat);
      const countEl = document.getElementById("count-"+cat);
      if(!container) return;
      const list = (cats[cat] || []).slice(0, 25);
      if(countEl) countEl.textContent = list.length;
      container.innerHTML = list.length
        ? list.map(itemHtml).join("")
        : '<div class="empty-note">' + (timeWindow === "72h"
            ? (isLive
                ? 'Nothing in the last 72 hours for this heading. Switch to <b>All Time</b> (top right) to see older items.'
                : 'Backend offline - the embedded research snapshot is older than 72 hours, so it is hidden in this view. Switch to <b>All Time</b> to read it, or start the backend for live news.')
            : 'No items for this heading yet.') + '</div>';
    });
  }

  // ---------------- connector status strip ----------------
  function renderConnectorStrip(statuses, live){
    const el = document.getElementById("connectorStrip");
    const note = document.getElementById("methodNote");
    if(!live){
      el.innerHTML = '<span class="conn-badge off">offline snapshot - connectors not queried</span>';
      note.textContent = "Backend not connected. Start it with: python run.py  (see README.md)";
      return;
    }
    el.innerHTML = statuses.map(function(s){
      const cls = !s.configured ? "off" : (s.ok ? "ok" : "err");
      const label = s.name + (s.configured ? (s.ok ? " \u2713 " + s.item_count : " \u2717") : " (not set)");
      return '<span class="conn-badge '+cls+'" title="'+escapeHtml(s.message||"")+'">'+escapeHtml(label)+'</span>';
    }).join("");
    const okCount = statuses.filter(s=>s.ok).length;
    note.textContent = okCount + " of " + statuses.length + " connectors returned data this poll. " +
      "Hover a badge for its exact status message. Add API keys in .env or via secure_setup.py to enable more.";
  }

  // ---------------- search filter ----------------
  let lastQuery = "";
  function applyFilter(){
    const q = lastQuery;
    document.querySelectorAll(".item[data-search]").forEach(function(it){
      if(!q){ it.classList.remove("dim"); return; }
      const hay = it.getAttribute("data-search") || "";
      if(hay.indexOf(q) === -1) it.classList.add("dim"); else it.classList.remove("dim");
    });
  }
  const filterInput = document.getElementById("filterInput");
  if(filterInput){
    filterInput.addEventListener("input", function(){
      lastQuery = filterInput.value.trim().toLowerCase();
      applyFilter();
    });
  }

  // ---------------- refresh button ----------------
  const refreshBtn = document.getElementById("refreshBtn");
  if(refreshBtn) refreshBtn.addEventListener("click", function(){ loadData(true); });

  // ---------------- settings modal (API keys) ----------------
  const settingsBackdrop = document.getElementById("settingsBackdrop");
  const settingsBtn = document.getElementById("settingsBtn");
  const closeSettingsBtn = document.getElementById("closeSettingsBtn");
  const saveKeysBtn = document.getElementById("saveKeysBtn");
  const keyFieldsEl = document.getElementById("keyFields");
  const settingsMsg = document.getElementById("settingsMsg");

  async function openSettings(){
    settingsBackdrop.classList.add("show");
    settingsMsg.textContent = ""; settingsMsg.className = "modal-msg";
    keyFieldsEl.innerHTML = "Loading&hellip;";
    try {
      const res = await fetch("/api/keys");
      if(!res.ok) throw new Error("HTTP " + res.status);
      const fields = await res.json();
      keyFieldsEl.innerHTML = Object.keys(fields).map(function(name){
        const f = fields[name];
        return '<div class="key-field">' +
          '<label><span class="kf-status'+(f.configured?" on":"")+'"></span>' + escapeHtml(f.label) +
          (f.configured ? ' <span style="font-weight:400;color:var(--text-faint);">(set via '+escapeHtml(f.source)+')</span>' : '') +
          '</label>' +
          '<div class="kf-help">'+escapeHtml(f.help)+'</div>' +
          '<input type="password" data-key="'+name+'" placeholder="'+
            (f.configured ? "Already set - paste a new value to replace it" : "Paste key here, or leave blank to skip") +
          '" autocomplete="off"/></div>';
      }).join("");
    } catch(e) {
      keyFieldsEl.innerHTML = '<div class="modal-msg err">Could not load key status: ' + escapeHtml(e.message) +
        (isLive ? "" : " (backend not connected - start it with python run.py first)") + '</div>';
    }
  }
  function closeSettings(){ settingsBackdrop.classList.remove("show"); }

  if(settingsBtn) settingsBtn.addEventListener("click", openSettings);
  if(closeSettingsBtn) closeSettingsBtn.addEventListener("click", closeSettings);
  if(settingsBackdrop) settingsBackdrop.addEventListener("click", function(e){
    if(e.target === settingsBackdrop) closeSettings();
  });

  if(saveKeysBtn) saveKeysBtn.addEventListener("click", async function(){
    const inputs = keyFieldsEl.querySelectorAll("input[data-key]");
    const body = {};
    inputs.forEach(function(inp){ if(inp.value.trim()) body[inp.dataset.key] = inp.value.trim(); });
    if(!Object.keys(body).length){
      settingsMsg.textContent = "Nothing to save - all fields blank."; settingsMsg.className = "modal-msg";
      return;
    }
    saveKeysBtn.disabled = true; saveKeysBtn.textContent = "Saving\u2026";
    try {
      const res = await fetch("/api/keys", {method:"POST", headers:{"Content-Type":"application/json"},
        body: JSON.stringify(body)});
      const j = await res.json();
      if(!res.ok) throw new Error(j.error || ("HTTP " + res.status));
      settingsMsg.textContent = "Saved " + j.saved.length + " key(s), encrypted. Reconnecting\u2026";
      settingsMsg.className = "modal-msg ok";
      await loadData(true);
      setTimeout(function(){ openSettings(); }, 400); // refresh the configured/not-configured status shown
    } catch(e) {
      settingsMsg.textContent = "Save failed: " + e.message;
      settingsMsg.className = "modal-msg err";
    } finally {
      saveKeysBtn.disabled = false; saveKeysBtn.textContent = "Save & reconnect";
    }
  });

  // ---------------- live clock ----------------
  function pad(n){ return n<10 ? "0"+n : n; }
  function tickClock(){
    const d = new Date();
    const el = document.getElementById("snapClock");
    if(el) el.textContent = pad(d.getHours())+":"+pad(d.getMinutes())+":"+pad(d.getSeconds())+" local";
  }
  tickClock(); setInterval(tickClock, 1000);

  // ---------------- running news ticker (unlocated news, newest first, bottom->top) ----------------
  function ts(it){ const d = parseItemDate(it.date); return d ? d.getTime() : 0; }
  function wireTickerPause(){
    const viewport = document.getElementById("tickerViewport");
    const track = document.getElementById("tickerTrack");
    if(!viewport || !track) return;
    viewport.onpointerenter = function(){ track.classList.add("paused"); };
    viewport.onpointerleave = function(){ track.classList.remove("paused"); };
    viewport.ontouchstart = function(){ track.classList.add("paused"); };
    viewport.ontouchend = function(){ track.classList.remove("paused"); };
  }
  function in72h(it){
    const d = parseItemDate(it.date);
    if(!d) return false;                       // undated background items never qualify as "latest news"
    return (Date.now() - d.getTime()) <= 72 * 3600 * 1000;
  }
  function renderTicker(view){
    // The running feed is ALWAYS the last 72 hours - it ignores the All-Time toggle.
    const track = document.getElementById("tickerTrack");
    const cnt = document.getElementById("count-ticker");
    if(!track) return;
    const src = (currentData && currentData.items_by_category) || {};
    const all = [];
    Object.keys(src).forEach(function(k){
      (src[k] || []).forEach(function(it){
        if(!(typeof it.lat === "number" && typeof it.lon === "number") && in72h(it)) all.push(it);
      });
    });
    all.sort(function(a, b){ return ts(b) - ts(a); });
    const list = all.slice(0, 80);
    if(cnt) cnt.textContent = list.length + " in 72h";
    if(!list.length){
      track.innerHTML = '<div class="empty-note" style="padding:14px;">No unlocated news in the last 72 hours yet.</div>';
      return;
    }
    const TAG = {geo:["GEO","var(--green)"], milops:["MIL","var(--amber)"], arms:["ARMS","var(--magenta)"],
      naval:["NAVAL","var(--cyan-h)"], scs:["SCS","var(--cyan-h)"], air:["AIR","var(--violet)"], space:["SPACE","var(--cyan-h)"],
      tech:["TECH","var(--gold)"], cyber:["CYBER","var(--red)"], darkweb:["DARK","var(--red)"], econ:["ECON","var(--cyan-h)"],
      mss:["MSS","var(--amber)"], social:["SOC","var(--gold)"], wellbeing:["WELL","var(--magenta)"], hazard:["HAZ","var(--violet)"]};
    const one = list.map(function(it){
      const t = TAG[it.category] || ["NEWS","var(--cyan-h)"];
      return '<div class="tick-item"><span class="tag" style="background:'+t[1]+'">'+t[0]+'</span>' +
        '<span class="txt">'+escapeHtml(it.label)+'</span>' +
        '<div class="meta">'+escapeHtml(it.source)+(it.date ? ' &middot; '+escapeHtml(fmtDate(it.date)) : '')+'</div></div>';
    }).join("");
    track.innerHTML = one + one;
    wireTickerPause();
  }

  function renderDarkWeb(view){
    const el = document.getElementById("items-darkweb");
    if(!el) return;
    const want = document.getElementById("darkwebFilter").value;
    const all = [];
    Object.keys(view.items_by_category || {}).forEach(function(k){
      (view.items_by_category[k] || []).forEach(function(it){
        if(it.category === "darkweb") all.push(it);
      });
    });
    all.sort(function(a, b){ return ts(b) - ts(a); });
    const shown = all.filter(function(it){ return want === "all" || it.asia_pacific; }).slice(0, 80);
    document.getElementById("count-darkweb").textContent = shown.length + " of " + all.length;
    const LABEL = {ransomware_live:"Ransomware.live: ", telegram_public:"Telegram: ", darkweb_tor:"Dark web via Tor: "};
    const st = (view.connector_status || []).filter(function(s){ return LABEL[s.name]; })
      .map(function(s){ return LABEL[s.name] + s.message; });
    document.getElementById("darkwebStatus").textContent = st.join("   |   ");
    el.innerHTML = shown.length ? shown.map(function(it){
      const href = safeUrl(it.url);
      return '<div class="item"><div class="lbl">'+escapeHtml(it.label)+'</div><div class="meta">' +
        escapeHtml(it.source) + (it.country ? ' &middot; '+escapeHtml(it.country) : '') +
        (it.date ? ' &middot; '+escapeHtml(fmtDate(it.date)) : '') +
        (href ? ' &middot; <a href="'+escapeHtml(href)+'" target="_blank" rel="noopener noreferrer">source &#8599;</a>' : '') +
        '</div></div>';
    }).join("") : '<div class="empty-note">No dark-web or threat-intel claims in the current window. ' +
        (timeWindow === "72h" ? 'Switch to All Time (top right) to see older claims.' : '') + '</div>';
  }

  // ---------------- radar sweep: 2D scanner rotating over the map (off for reduced-motion) ----------------
  // Cosmetic only, so it is isolated: a missing animation API or any error here
  // must never stop the data panels from rendering. Falls back to a timer when
  // requestAnimationFrame is unavailable (older or embedded browsers).
  try {
    (function radar(){
      const g = document.getElementById("radarSweep");
      if(!g || (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches)) return;
      const cx = g.getAttribute("data-cx"), cy = g.getAttribute("data-cy");
      const raf = (typeof window.requestAnimationFrame === "function")
        ? function(f){ window.requestAnimationFrame(f); }
        : function(f){ setTimeout(f, 33); };
      let a = 0;
      (function step(){
        a = (a + 0.5) % 360;
        g.setAttribute("transform", "rotate(" + a + " " + cx + " " + cy + ")");
        raf(step);
      })();
    })();
  } catch(e) { /* sweep is decoration; the dashboard works without it */ }

  const dwFilter = document.getElementById("darkwebFilter");
  if(dwFilter) dwFilter.addEventListener("change", function(){ if(currentData) render(currentData, isLive, null); });

  // ---------------- 72h / All-time toggle ----------------
  document.querySelectorAll(".wt-btn").forEach(function(btn){
    btn.addEventListener("click", function(){
      timeWindow = btn.dataset.window;
      document.querySelectorAll(".wt-btn").forEach(b => b.classList.toggle("active", b === btn));
      // re-render from what we already have - no new network call needed
      if(currentData) render(currentData, isLive, null);
    });
  });

  // ---------------- Plot a location (lat/long + remark) ----------------
  const plotBackdrop = document.getElementById("plotBackdrop");
  const plotMsg = document.getElementById("plotMsg");

  async function loadCustomMarkers(){
    try {
      const res = await fetch("/api/custom-markers", {cache:"no-store"});
      if(!res.ok) throw new Error("HTTP " + res.status);
      customMarkers = (await res.json()).markers || [];
    } catch(e) { customMarkers = []; }
  }

  function renderCustomList(){
    const el = document.getElementById("customMarkersList");
    if(!customMarkers.length){ el.innerHTML = ""; return; }
    el.innerHTML = '<div style="font-size:11px;color:var(--text-faint);margin-bottom:6px;">Your plotted markers:</div>' +
      customMarkers.map(function(m, i){
        return '<div class="custom-marker-row"><span><b>'+escapeHtml(m.label)+'</b> ('+m.lat+', '+m.lon+')' +
          (m.remark ? '<br/><span style="color:var(--text-faint);">'+escapeHtml(m.remark)+'</span>' : '') +
          '</span><button data-idx="'+i+'" title="Remove">&times;</button></div>';
      }).join("");
    el.querySelectorAll("button[data-idx]").forEach(function(btn){
      btn.addEventListener("click", async function(){
        try {
          const res = await fetch("/api/custom-markers/" + btn.dataset.idx, {method:"DELETE"});
          const j = await res.json();
          if(!res.ok) throw new Error(j.error || ("HTTP " + res.status));
          customMarkers = j.markers || [];
          renderCustomList();
          if(currentData) render(currentData, isLive, null);
        } catch(e) {
          plotMsg.textContent = "Remove failed: " + e.message; plotMsg.className = "modal-msg err";
        }
      });
    });
  }

  const plotBtn = document.getElementById("plotBtn");
  if(plotBtn) plotBtn.addEventListener("click", async function(){
    plotBackdrop.classList.add("show");
    plotMsg.textContent = ""; plotMsg.className = "modal-msg";
    await loadCustomMarkers();
    renderCustomList();
  });
  document.getElementById("plotCloseBtn").addEventListener("click", () => plotBackdrop.classList.remove("show"));
  plotBackdrop.addEventListener("click", function(e){ if(e.target === plotBackdrop) plotBackdrop.classList.remove("show"); });

  document.getElementById("plotAddBtn").addEventListener("click", async function(){
    const label = document.getElementById("plotLabel").value.trim();
    const remark = document.getElementById("plotRemark").value.trim();
    const lat = parseFloat(document.getElementById("plotLat").value);
    const lon = parseFloat(document.getElementById("plotLon").value);
    if(!label || isNaN(lat) || isNaN(lon) || lat < -90 || lat > 90 || lon < -180 || lon > 180){
      plotMsg.textContent = "Enter a label and valid lat (-90 to 90) / lon (-180 to 180)."; plotMsg.className = "modal-msg err";
      return;
    }
    try {
      const res = await fetch("/api/custom-markers", {method:"POST", headers:{"Content-Type":"application/json"},
        body: JSON.stringify({label: label, remark: remark, lat: lat, lon: lon})});
      const j = await res.json();
      if(!res.ok) throw new Error(j.error || ("HTTP " + res.status));
      customMarkers = j.markers || [];
      ["plotLabel","plotRemark","plotLat","plotLon"].forEach(id => document.getElementById(id).value = "");
      plotMsg.textContent = "Added."; plotMsg.className = "modal-msg ok";
      renderCustomList();
      if(currentData) render(currentData, isLive, null);
    } catch(e) {
      plotMsg.textContent = "Add failed: " + e.message; plotMsg.className = "modal-msg err";
    }
  });

  // ---------------- boot ----------------
  loadCustomMarkers().then(function(){ loadData(false); });
  // auto-update news & data every 3 minutes, per request
  refreshTimer = setInterval(function(){ loadData(false); }, 3*60*1000);

  // Test hooks (harmless in production) so the DOM regression test can drive
  // the real code paths instead of re-implementing them
  window.__TEST = {render: function(){ if(currentData) render(currentData, isLive, null); },
                   setData: function(d){ currentData = d; isLive = true; },
                   setWindow: function(w){ timeWindow = w; },
                   parseItemDate: parseItemDate, inWindow: inWindow};
})();
