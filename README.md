# 🎛 TruEdge Pro™ Visual Suite — v1.0_LegacyDrop

This suite interprets tiered market behavior through rhythm-aware overlays.  
Built in ThinkScript. Designed to pulse. Tuned for remix.

---

## 🎯 Modules Included
## 🧩 Modules Overview

| Name                      | Purpose                                     | Link                                                |
|---------------------------|---------------------------------------------|-----------------------------------------------------|
| ExecutionCore             | Entry / Exit logic + cooldown management    | [`TruEdge_ExecutionCore.ts`](TruEdge_ExecutionCore.ts) |
| ScannerColumn             | SoulScore-based signal surfacing            | [`TruEdge_ScannerColumn.ts`](TruEdge_ScannerColumn.ts) |
| DivergenceOverlay         | RSI-based reversal signal (optional)        | [`TruEdge_DivergenceOverlay.ts`](TruEdge_DivergenceOverlay.ts) |
| Config File               | Shared parameters for all modules           | [`TruEdge_Config.json`](TruEdge_Config.json) |
| Trade Journal             | Setup outcome tracking                      | [`TradeJournal.csv`](TradeJournal.csv) |
| Strategy Docs             | Pattern breakdowns (MS-A, MS-B...)          | [`docs/strategy_MS_A.md`](docs/strategy_MS_A.md) |
| Setup Guide               | Platform onboarding steps                   | [`docs/setup_guide.md`](docs/setup_guide.md) |
| Version Log               | Changelog across module updates             | [`docs/version_log.md`](docs/version_log.md) |

- `TierPulse.ts` — Pulse-state logic (0–3)
- `VisualLayer.ts` — L3 Glow Zones, Fade overlays
- `OverlayToggle.ts` — Pro, Classic, and Silent display modes
- `ColorTheme.ts` — Branded tone engine
- `StageEngine.ts` — Session-aware tempo behavior
- `PulseConfig/sample_config.txt` — Sample configuration
- `TruEdgePro_Icons/README_Icons.txt` — Icon usage notes

---

## ♊ Philosophy

Modular. Expressive. Remixable.  
This suite is designed to be extended, recolored, and reimagined. Whether you're building your own overlay logic or remixing the pulse engine, the system is yours to shape.

---

## 📦 Getting Started

1. Download the latest `.zip` from [Releases](https://github.com/your-repo/releases)
2. Import `.ts` modules into ThinkOrSwim
3. Customize `ColorTheme.ts` and `PulseConfig/` to match your chart style
4. Toggle display modes via `OverlayToggle.ts`

---

## 🛠️ Remix Ideas

- Rewire `TierPulse.ts` to support 5+ pulse states
- Add new session logic to `StageEngine.ts`
- Fork and theme your own visual suite

---

## 📜 License

MIT — remix, reuse, and build your legacy.

---

Want me to drop this into a file and help you upload it to your repo? Or generate a matching `ABOUT_THIS_DROP.md` to go deeper into your vision? Let’s keep the suite singing. ♊🔥
