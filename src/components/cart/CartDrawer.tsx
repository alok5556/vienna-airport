'use client'

import { useCart } from '../../context/CartContext'

export const CartDrawer = () => {
  const { items, removeItem, clearCart } = useCart()

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <aside>
      <h2>Cart</h2>
      <ul>
        {items.map((item) => (
          <li key={item.productId}>
            {item.title} x {item.quantity}
            <button type="button" onClick={() => removeItem(item.productId)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <p>Total: {total}</p>
      <button type="button" onClick={clearCart}>
        Clear cart
      </button>
    </aside>
  )
}
