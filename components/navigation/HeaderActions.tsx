import Link from "next/link";
import {Heart, ShoppingCart, User} from "lucide-react";
import { useCart } from "@/features/Carts/hooks/useCart";
import { useFavorites } from "@/features/wishlists/hooks/useFavorites";


const links = [
  { href: "/wishlist", label: "wishlist", icon: Heart },
  { href: "/cart", label: "cart", icon: ShoppingCart },
  { href: "/login", label: "connexion", icon: User },
];

export function HeaderActions() {

  const {cartItems} = useCart();
  const {wishlists} = useFavorites();

  const totalCarts = cartItems.length;
  const totalFavorites = wishlists.length;

  return (
    <nav
      aria-label="Actions utilisateur"
      className="flex items-center gap-3 sm:gap-5"
    >
      {links.map((link) => {
        const Icon = link.icon;
        const isCart = link.href === "/cart";
        const isFav = link.href === "/wishlist";

        return (
          <Link
            key={link.href}
            href={link.href}
            aria-label={link.label}
            className="relative flex items-center justify-center transition text-onBackground hover:text-foreground"
          >
            <Icon className="size-5 sm:size-6" />
            {isCart && totalCarts > 0 && (
              <span className=" absolute -top-2 -right-2 flex h-5 min-w-5 items-center justify-center 
                  rounded-full bg-primary px-1 text-[10px] font-bold leading-none text-yelloAccent
                "
              >
                {totalCarts}
              </span>
            )}

            {isFav && totalFavorites > 0 && (
              <span className=" absolute -top-2 -right-2 flex h-5 min-w-5 items-center justify-center 
                rounded-full bg-primary px-1 text-[10px] font-bold leading-none text-yelloAccent"
              >
                {totalFavorites}
              </span>
            )}
          </Link>
        );
      })}
    </nav>
  );
}

