import Image from "next/image";
import image from "@/public/ImageHero.png";
import { CartItem } from "../type/CartItem";


type CartItemCardProps = {
    machine: CartItem
}

export function CartItemCard({machine}: CartItemCardProps) {
    
    return(
        <div className="rounded-2xl border bg-white p-5">
            <div className="flex flex-col lg:flex-row gap-5">
                <Image
                    src={image}
                    alt=""
                    className="h-36 w-36 rounded-xl object-cover"
                />
                <div className="flex-1">
                    <div className="flex justify-between items-start gap-4">
                        <div>
                            <h3 className="font-medium text-lg">{machine.title}</h3>
                            <p className="text-sm text-gray-500">Modèle haute performance - 410 ch</p>
                            <p className="mt-3 text-xs uppercase text-gray-400">Prix unitaire</p>
                            <p className="font-bold text-xl">245.000 €</p>
                        </div>
                        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                            EN STOCK
                        </span>
                    </div>
                    <div className="mt-6 flex flex-wrap justify-between gap-5">
                        <div className="flex items-center rounded-full border overflow-hidden">
                            <button className="px-4 py-2 hover:bg-gray-100">
                                −
                            </button>
                            <span className="px-5">1</span>
                            <button className="px-4 py-2 hover:bg-gray-100">
                                +
                            </button>
                        </div>
                        <div className="flex items-center gap-6">
                            <button>🗑️</button>
                            <button>🤍</button>
                            <div className="text-right">
                                <p className="text-xs uppercase text-gray-400">Sous-total</p>
                                <p className="font-semibold">245.000 €</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}