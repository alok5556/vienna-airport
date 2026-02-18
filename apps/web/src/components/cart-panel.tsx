'use client';

import { useMemo, useState } from 'react';
import { Button } from '@vienna/ui';

interface CartItem {
  id: string;
  name: string;
  quantity: number;
  unitPrice: number;
}

const initialItems: CartItem[] = [
  { id: 'parking-1', name: 'Parking P3', quantity: 1, unitPrice: 29.9 },
  { id: 'fasttrack-1', name: 'FastTrack', quantity: 2, unitPrice: 12 },
];

export function CartPanel({ locale }: { locale: string }) {
  const [items, setItems] = useState(initialItems);

  const formatter = useMemo(
    () => new Intl.NumberFormat(locale, { style: 'currency', currency: 'EUR' }),
    [locale],
  );

  const total = items.reduce((acc, item) => acc + item.quantity * item.unitPrice, 0);

  return (
    <aside className="rounded-xl border bg-white p-4 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold">Shopping Cart</h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.id} className="flex items-center justify-between gap-2">
            <div>
              <p className="font-medium">{item.name}</p>
              <p className="text-sm text-slate-500">{formatter.format(item.unitPrice)}</p>
            </div>
            <div className="flex items-center gap-2">
              <Button className="px-2 py-1" onClick={() => setItems((prev) => prev.map((entry) => entry.id === item.id ? { ...entry, quantity: Math.max(entry.quantity - 1, 0) } : entry).filter((entry) => entry.quantity > 0))}>-</Button>
              <span>{item.quantity}</span>
              <Button className="px-2 py-1" onClick={() => setItems((prev) => prev.map((entry) => entry.id === item.id ? { ...entry, quantity: entry.quantity + 1 } : entry))}>+</Button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4 border-t pt-4 font-semibold">Total: {formatter.format(total)}</div>
    </aside>
  );
}
