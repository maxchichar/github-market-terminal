import { getCandles } from "./api.js";
import { createChart } from "./chart.js";

const { series } = createChart("chart");

async function load() {
  const data = await getCandles("maxchichar");

  series.setData(data.candles);
}

// initial load
load();

// 🔥 LIVE MODE
setInterval(() => {
  load();
}, 5000);