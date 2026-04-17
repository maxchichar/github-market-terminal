const API_BASE = "http://localhost:3000";

export async function getCandles(user) {
  const res = await fetch(`${API_BASE}/candles/${user}`);
  if (!res.ok) throw new Error("Failed to fetch market data");
  return await res.json();
}