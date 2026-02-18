import type { ReactNode } from 'react'

import { LanguageSwitcher } from '../../../components/LanguageSwitcher'
import { CartProvider } from '../../../context/CartContext'
import { CartDrawer } from '../../../components/cart/CartDrawer'

export default function LocaleLayout({ children }: { children: ReactNode }) {
  return (
    <CartProvider>
      <header>
        <LanguageSwitcher />
      </header>
      {children}
      <CartDrawer />
    </CartProvider>
  )
}
