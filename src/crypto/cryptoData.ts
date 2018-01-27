export interface CryptoData {
  id: number;
  name: string;
  symbol: string;
  rank: string;
  price_usd: number;
  '24h_volume_usd': number;
  market_cap_usd: number;
  available_supply: number;
  total_supply: number;
  max_supply: number;
  percent_change_1h: number;
  percent_change_24h: number;
  percent_change_7d: number;
  last_updated: string;
}
