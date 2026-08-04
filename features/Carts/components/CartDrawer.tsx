import { CartItem } from "../type/CartItem"
import { cn } from "@/lib/utils/cn";
import { typography } from "@/lib/theme/typography";


type CartDrawerProps = {
    cartItems: CartItem[],
}

export function CartDrawer ({cartItems}:  CartDrawerProps) {

    const prixHT = cartItems.reduce((acc, item) => {
        return acc + (item.price * item.quantity)
    }, 0)

    const TAUXTVA = 0.16;
    const TVA = Math.ceil(prixHT * TAUXTVA);

    const totalPrice= prixHT + TVA;

    return (
        <div className="rounded-2xl border bg-white p-6 h-fit xl:sticky xl:top-5">

            <h2 className="font-semibold text-lg mb-6">
                Résumé de la commande
            </h2>
            <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                    <span>Sous-total (3 articles)</span>
                    <span className="font-semibold">{prixHT} €</span>
                </div>
                <div className="flex justify-between">
                    <span>Frais de livraison</span>
                    <div>
                        <span className="line-through text-gray-400 mr-2">
                            2.500 €
                        </span>
                        <span className="text-emerald-600 font-semibold">
                            Gratuit
                        </span>
                    </div>
                </div>
                <div className="flex justify-between">
                    <span>TVA (20%)</span>
                    <span className="font-semibold">{TVA} €</span>
                </div>
            </div>
            <div className="my-6 border-t" />
            <div className="flex justify-between items-end">
                <span className="text-lg font-semibold">Total</span>
                <span className="text-4xl font-bold">{totalPrice} €</span>
            </div>
            <div className="mt-6">
                <label className="text-sm font-medium">Code Promo</label>
                <div className="mt-2 flex">
                    <input
                        placeholder="Entrez votre code"
                        className="flex-1 rounded-l-lg w-56 border px-4 py-3 outline-none"
                    />
                    <button className="rounded-r-lg bg-[#0E5A43] px-1 text-white">
                        Appliquer
                    </button>
                </div>
            </div>
            <button className="mt-6 w-full rounded-xl bg-[#FFC928] py-4 font-semibold hover:bg-yellow-400">
                Passer la commande →
            </button>
            <div className="mt-6 space-y-3 text-sm text-gray-600">
                <p className={cn(typography.body)}>✓ Paiement 100% sécurisé</p>
            </div>
        </div>
    )
}