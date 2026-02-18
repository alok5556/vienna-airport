import { formatters } from '@va/config';
import type { CartState } from '@va/types';

export const Cart = ({ cart, locale }: { cart: CartState | null; locale: string }) => {
  if (!cart) return <p className="text-sm text-slate-500">No active cart.</p>;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <h3 className="mb-3 text-lg font-semibold">Cart ({cart.lines.length})</h3>
      <ul className="space-y-2">
        {cart.lines.map((line) => (
          <li key={line.productVariantId} className="flex items-center justify-between text-sm">
            <span>
              {line.name} × {line.quantity}
            </span>
            <span>{formatters.currency(locale, cart.currencyCode).format(line.linePriceWithTax / 100)}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 border-t border-slate-200 pt-3 text-right text-sm font-semibold">
        {formatters.currency(locale, cart.currencyCode).format(cart.totalWithTax / 100)}
      </div>
    </div>
  );
};
