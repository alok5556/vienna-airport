'use client'

import { useCart } from '../../context/CartContext'

export const CartButton = ({
  productId,
  title,
  price,
}: {
  productId: string
  title: string
  price: number
}) => {
  const { addItem } = useCart()

  return (
    <button onClick={() => addItem({ productId, title, price, quantity: 1 })} type="button">
      Add to cart
    </button>
  )
}
