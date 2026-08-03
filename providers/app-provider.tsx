import { CartProvider } from "./CartProvider";

export function AppProviders({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <CartProvider>
      {children}
    </CartProvider>
  )
}
