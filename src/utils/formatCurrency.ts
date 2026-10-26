import { CurrencyCode } from '../types';
import { CURRENCIES } from '../data/mockData';

export function formatPrice(amountUSD: number, currencyCode: CurrencyCode = 'USD'): string {
  const currency = CURRENCIES[currencyCode] || CURRENCIES.USD;
  const converted = Math.round(amountUSD * currency.rateFromUSD);

  if (currencyCode === 'INR') {
    return `${currency.symbol}${converted.toLocaleString('en-IN')}`;
  }
  return `${currency.symbol}${converted.toLocaleString('en-US')}`;
}
