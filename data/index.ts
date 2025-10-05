import currenciesData from "@/data/currencies.json";

export type Currency = {
  code: string;
  label: string;
  country: string;
  symbol: string;
  flagEmoji?: string;
  flagUrl?: string;
  active?: boolean;
};

export const currencies: Currency[] =
  (currenciesData as unknown as { currencies?: Currency[] }).currencies || [];

export const uiConfig =
  (currenciesData as unknown as { ui?: Record<string, unknown> }).ui || {};
