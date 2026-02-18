import type { CartState } from '@va/types';
import { env } from './env';

const request = async <T>(query: string, variables?: Record<string, unknown>): Promise<T> => {
  const res = await fetch(env.VENDURE_SHOP_API_URL, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ query, variables }),
    cache: 'no-store'
  });
  const json = (await res.json()) as { data: T };
  return json.data;
};

export const getActiveOrder = async (): Promise<CartState | null> => {
  const data = await request<{ activeOrder: CartState | null }>(`query ActiveOrder { activeOrder { id currencyCode totalWithTax lines { productVariantId quantity unitPriceWithTax linePriceWithTax name } } }`);
  return data.activeOrder;
};
