# ┌────────────────────────────────────────────────────────────────────┐
# │ TruEdge™ ExecutionCore v1.0                                        │
# │ Purpose: Entry / Exit Logic + Cooldown Enforcement                 │
# │ Strategy Compatibility: MS-A, MS-B, MS-Series Modular Patterns     │
# │ Author: Cedrick / TruEdge Studio                                   │
# └────────────────────────────────────────────────────────────────────┘

# ───────────── CONFIG IMPORT ─────────────
input minSoulScore   = 80;       # Threshold for setup validity
input cooldownBars   = 10;       # Bars before re-entry allowed
input atrMultiplier  = 1.5;      # Sizing logic based on volatility

# ───────────── INDICATOR INPUTS ─────────────
def soulScore = close("SoulScore");     # External scoring system input
def atr       = ATR();                  # Volatility measure
def highBar   = high;
def lowBar    = low;
def closeBar  = close;

# ───────────── LOGIC BLOCK: Cooldown Check ─────────────
def passedCooldown = BarsSince(soulScore > minSoulScore) > cooldownBars;

# ───────────── LOGIC BLOCK: Entry Detection ─────────────
def insideBar  = highBar < highBar[1] and lowBar > lowBar[1];     # Compression pattern
def breakout   = closeBar > highBar[1];                           # Volatility release
def entrySignal = insideBar and breakout and passedCooldown;

# ───────────── LOGIC BLOCK: Exit Conditions ─────────────
def entryPrice    = if entrySignal then closeBar else entryPrice[1];   # Signal-captured price
def targetLevel   = entryPrice + (atr * atrMultiplier);
def trailStop     = Lowest(closeBar, 5);                                # Optional trailing logic
def exitSignal    = closeBar >= targetLevel or closeBar < trailStop;

# ───────────── PLOT SIGNALS ─────────────
plot Entry = if entrySignal then 1 else na;
Entry.SetPaintingStrategy(PaintingStrategy.BOOLEAN_ARROW_UP);
Entry.SetDefaultColor(Color.GREEN);

plot Exit = if exitSignal then 1 else na;
Exit.SetPaintingStrategy(PaintingStrategy.BOOLEAN_ARROW_DOWN);
Exit.SetDefaultColor(Color.RED);

# ───────────── REMIX NOTES ─────────────
# 🧠 Strategy Remix Ideas:
# - Add RSI divergence overlay toggle (see DivergenceOverlay.ts)
# - Adapt ATR multiplier dynamically by tier
# - Embed tier visual overlay via config
# - Use multi-timeframe validation for MS-A/MS-B
