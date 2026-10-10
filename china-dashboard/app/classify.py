"""Routes every headline into one of the 15 dashboard headings.

Plain ordered keyword rules - readable and editable, not a black box. Order
matters: the most specific headings are tested first (dark web before cyber,
South China Sea before generic naval, and so on). A headline that matches no
rule goes to "geo" (Geopolitical & Diplomatic), the broadest heading.
"""

HEADINGS = ["geo", "milops", "arms", "naval", "scs", "air", "space", "tech", "cyber",
            "darkweb", "econ", "mss", "social", "wellbeing", "hazard"]

RULES = [
    ("darkweb", ["dark web", "darknet", "onion", "ransomware", "leak site", "infostealer", "stealer",
                 "data breach", "data leak", "breached", "threat intel", "threat intelligence", "initial access broker"]),
    ("cyber", ["cyber", "hacker", "hacked", "hacking", "malware", "vulnerabilit", "intrusion", "zero-day",
               "volt typhoon", "salt typhoon", "apt ", "apt-", "backdoor", "phishing", "ddos", "cyberattack",
               "spear-phish", "espionage campaign"]),
    ("mss", ["ministry of state security", "mss ", "counterintelligence", "counter-intelligence", "spy ", "spying",
             "espionage case", "dissident", "crackdown", "public security", "detained", "arrested", "sentenced",
             "internal security", "surveillance"]),
    ("scs", ["south china sea", "scarborough", "spratly", "paracel", "second thomas", "nine-dash", "reef",
             "shoal", "vietnam", "philippine coast guard", "philippine navy", "sabina"]),
    ("naval", ["navy", "naval", "warship", "destroyer", "frigate", "submarine", "aircraft carrier", "carrier ",
               "fleet", "coast guard", "maritime", "shipyard", "port call", "cruiser", "amphibious", "marine corps",
               "sub ", "subs "]),
    ("air", ["air force", "fighter", "j-20", "j-35", "j-10", "j-16", "bomber", "airspace", "notam", "air base",
             "airbase", "aviation", "drone", "uav", "sortie", "adiz", "airliner", "caac", "pla air", "h-6",
             "aircraft"]),
    ("space", ["space", "satellite", "rocket", "launch", "orbit", "lunar", "moon", "tiangong", "chang'e", "chang e",
               "beidou", "long march", "spacecraft", "taikonaut", "shenzhou", "guowang", "yaogan"]),
    ("arms", ["nuclear", "warhead", "icbm", "missile", "hypersonic", "silo", "arms control", "enrichment",
              "ballistic", "nonproliferation", "test site", "rocket force", "plutonium", "uranium"]),
    ("tech", ["artificial intelligence", " ai ", "ai governance", "ai chip", "chips", "semiconductor", "export control",
              "huawei", "quantum", "5g", "6g", "deepseek", "nvidia", "open-source model", "algorithm", "tech "]),
    ("milops", ["military", "troops", "army", "pla ", "exercise", "drill", "war games", "deploy", "garrison",
                "theatre", "theater", "border clash", "soldier", "defence", "defense", "live-fire", "force posture"]),
    ("econ", ["trade", "tariff", "export", "import", "yuan", "renminbi", "economy", "economic", "gdp", "sanction",
              "stock", "market", "property", "investment", "inflation", "bank", "cpec", "belt and road", "deal"]),
    ("hazard", ["typhoon", "earthquake", "flood", "landslide", "drought", "heatwave", "tsunami", "pollution",
                "smog", "wildfire", "climate", "storm", "monsoon", "tremor"]),
    ("social", ["weibo", "douyin", "public sentiment", "netizen", "viral", "social media", "protest", "youth",
                "trending", "wechat", "xiaohongshu", "workers", "online debate"]),
    ("wellbeing", ["happiness", "wellbeing", "well-being", "life expectancy", "quality of life"]),
]


def classify(text: str) -> str:
    t = " " + (text or "").lower() + " "
    for heading, words in RULES:
        if any(w in t for w in words):
            return heading
    return "geo"
