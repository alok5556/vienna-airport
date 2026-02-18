'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'

type CartItem = {
  productId: string
  quantity: number
  price: number
  title: string
}

type CartContextType = {
  items: CartItem[]
  addItem: (item: CartItem) => void
  removeItem: (productId: string) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | null>(null)
const STORAGE_KEY = 'vienna-airport-cart-v1'

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([])

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return
    const parsed = JSON.parse(raw) as { items: CartItem[]; savedAt: number }
    const thirtyDays = 30 * 24 * 60 * 60 * 1000
    if (Date.now() - parsed.savedAt < thirtyDays) setItems(parsed.items)
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ items, savedAt: Date.now() }))
  }, [items])

  const value = useMemo<CartContextType>(
    () => ({
      items,
      addItem: (item) => {
        setItems((existing) => {
          const current = existing.find((entry) => entry.productId === item.productId)
          if (!current) return [...existing, item]

          return existing.map((entry) =>
            entry.productId === item.productId ? { ...entry, quantity: entry.quantity + item.quantity } : entry,
          )
        })
      },
      removeItem: (productId) => setItems((existing) => existing.filter((entry) => entry.productId !== productId)),
      clearCart: () => setItems([]),
    }),
    [items],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used inside CartProvider')

  return context
}
