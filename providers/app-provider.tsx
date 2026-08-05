import { CartProvider } from "./CartProvider";
import { WishlistProvider } from "./WishlistProvider";

export function AppProviders({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <CartProvider>
      <WishlistProvider>
      {children}
      </WishlistProvider>
    </CartProvider>
  )
}
