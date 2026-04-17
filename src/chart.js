export function createChart(containerId) {
  const chart = LightweightCharts.createChart(document.getElementById(containerId), {
    layout: {
      background: { color: "#0b0b0f" },
      textColor: "#8A2BE2"
    },
    grid: {
      vertLines: { color: "#1a1a1a" },
      horzLines: { color: "#1a1a1a" }
    }
  });

  // THIS WILL NOW EXIST (because we pinned version)
  const series = chart.addCandlestickSeries({
    upColor: "#8A2BE2",
    downColor: "#000000",
    borderVisible: false,
    wickUpColor: "#8A2BE2",
    wickDownColor: "#000000"
  });

  return { chart, series };
}