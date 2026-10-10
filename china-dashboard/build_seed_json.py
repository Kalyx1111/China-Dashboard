"""Generates data/seed.json (offline fallback) - reuses real prior research
plus the newly expanded markers."""
import json
import sys
sys.path.insert(0, ".")
from app.static_markers import MARKERS as REF_MARKERS
from app.reference_content import CYBER_ITEMS, SPACE_ITEMS

old = json.load(open("data/seed_old.json"))
items_by_category = old["items_by_category"]
items_by_category["cyber"] = CYBER_ITEMS
items_by_category["space"] = SPACE_ITEMS

markers = [{"id": m["id"], "name": m["name"], "lat": m["lat"], "lon": m["lon"], "cat": m["cat"],
            "note": m["note"], "source": m["source"], "date": "", "linked_items": []}
           for m in REF_MARKERS]

seed = {
    "updated_at": "2026-09-27T00:00:00Z",
    "items_by_category": items_by_category,
    "markers": markers,
    "connector_status": [{"name": "offline_seed", "configured": True, "ok": True,
                            "message": "Offline research snapshot - backend not connected",
                            "item_count": sum(len(v) for v in items_by_category.values())}],
    "total_items": sum(len(v) for v in items_by_category.values()),
}
json.dump(seed, open("data/seed.json", "w"), ensure_ascii=False)
print(f"wrote seed.json: {seed['total_items']} items, {len(markers)} markers")
