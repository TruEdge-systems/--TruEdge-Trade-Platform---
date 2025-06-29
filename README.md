# --TruEdge-Trade-Platform---
TruEdge-Trade-Platform/ ├── strategy/ │   └── TruEdge_ExecutionCore.ts ├── scanner/ │   └── TruEdge_ScannerColumn.ts ├── journal/ │   └── TruEdge_TradeJournal.csv ├── config/ │   └── TruEdge_Config.json ├── README_TruEdge.md
## 🔧 Platform Configuration

All modules use the shared thresholds stored in [`TruEdge_Config.json`](./config/TruEdge_Config.json).  
Adjusting values here propagates across strategy, scanner, and journaling logic.

```json
{
  "minSoulScore": 80,
  "cooldownBars": 10,
  "atrMultiplier": 1.5
}
This becomes your blueprint for collaborators and future-you.

---

## 🧭 Step 4: Add It to Notion Dashboard

In Notion:

1. Create a new **page** called `🎛 TruEdge Config`  
2. Drag + drop your `TruEdge_Config.json` file  
3. Add a toggle or callout above it like:

> 📁 **Current Parameters:**  
> SoulScore ≥ 80, cooldown = 10 bars, ATR x 1.5

You can edit this page later as you remix logic. Want to get even snazzier? Use a synced Notion table instead of raw JSON for future modules.

---

🧠 Want to go one step further?

I can build you a Notion-style **parameter dashboard** template where:
- You adjust inputs in a table  
- The values sync with module specs  
- The config stays readable to devs *and* storytellers

Let me know if you want to sketch that next — I can blueprint it for live tracking and remixing like a control board. 🐅🔁 We're building this to last.
