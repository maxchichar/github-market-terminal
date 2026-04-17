# 📊 GitHub Market Terminal (GSX Frontend)

A real-time TradingView-style financial terminal that visualizes developer activity as candlestick market data.

This is the **visual interface layer** of the GitHub Stock Exchange (GSX) system.

It connects directly to the GitHub Market Engine API.

---

## What This Is

This is not a dashboard.

It is a **developer financial terminal**.

Each GitHub user is represented as a tradable asset:
- Activity becomes price movement
- Contribution patterns become volatility
- Developer consistency becomes market stability

---

## Core Idea

Traditional trading charts show:

> Stocks, crypto, commodities

This system shows:

> Developers as financial instruments

Each user has:
- Market price (activity score)
- Candlestick history
- Volatility profile
- Relative ranking vs other developers

---

## Features

### 📊 Candlestick Chart Engine
- TradingView-style visualization
- Real OHLC rendering
- Dark mode neon theme
- Purple (bull) / Black (bear) candles

---

### 🔄 Live API Integration
Fetches data from:

```

GET /candles/:username

````

Provided by:
👉 `github-market-engine` 
https://github.com/maxchichar/github-market-engine

---

### Multi-User Market View (Planned)
- Switch between developers
- Compare performance charts
- Rank volatility indexes

---

### Trading Terminal UI
- Dark trading interface
- Grid-based market layout
- Minimal latency rendering
- High-contrast financial visuals

---

## Tech Stack

- Vanilla JavaScript (fast rendering layer)
- Lightweight Charts (TradingView engine)
- HTML5 + CSS3
- REST API integration

---

## System Architecture

``` id="arch2"
GitHub Market Engine (Backend API)
          ↓
OHLC Candle Data
          ↓
GitHub Market Terminal (Frontend UI)
          ↓
TradingView-style Visualization
````

---

## How It Works

### Step 1 — Fetch Market Data

```js id="fe1"
fetch("http://localhost:3000/candles/maxchichar")
```

---

### Step 2 — Transform Into Chart

```js id="fe2"
series.setData(candles);
```

---

### Step 3 — Render Trading View Interface

Candles are displayed with:

* Up candles → purple (#8A2BE2)
* Down candles → black (#000000)
* Wicks → neutral gray

---

## Running the Project

### 1. Start backend first

```bash id="run1"
cd ../github-market-engine
node server.js
```

---

### 2. Open frontend

Simply open:

```id="run2"
index.html
```

OR use Live Server (recommended)

---

## Market Visualization Model

Each candle represents:

| Component | Meaning                   |
| --------- | ------------------------- |
| Open      | previous activity state   |
| High      | peak engagement spike     |
| Low       | inactivity or drop        |
| Close     | final computed reputation |

---

## Behavioral Finance Logic

* Commit bursts → bullish candles
* Inactivity → bearish pressure
* PR activity → volatility spikes
* Consistency → stable upward trend

---

## Design Philosophy

This terminal is inspired by:

* TradingView UI patterns
* Bloomberg terminals
* Crypto exchange dashboards

But reimagined for:

> Developer reputation markets

---

## UI Theme

* Background: #0b0b0f (deep dark)
* Bull color: #8A2BE2 (purple)
* Bear color: #000000 (black)
* Grid: subtle gray lines
* Minimal distraction layout

---

## 📡 API Dependency

This frontend requires:

```
github-market-engine
```

Without it, the terminal runs in mock mode.

---

## ⚠️ Disclaimer

This is not a financial trading system.

It is a simulation of:

* behavioral data visualization
* developer reputation modeling
* experimental market theory

No real money is involved.

---

## Future Upgrades

Planned expansions:

* Live WebSocket price updates
* Multi-user leaderboard trading view
* Developer ETF index charts
* Indicator overlays (RSI, MACD-style signals)
* Timeframe switching (1D, 1W, 1M)
* Alert system (push-based)

---

## 👑 Author

MAXCHICHAR — Architect of GitHub Stock Exchange system.

---

## Related Project

Backend Engine:

```
github-market-engine ==> https://github.com/maxchichar/github-market-engine
```

---

## ⚡ Status

Frontend MVP → Active Development
