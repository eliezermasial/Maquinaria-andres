import Image from "next/image";
import type { Dispatch, SetStateAction } from "react";
import {ShieldCheck,ShoppingBasket,} from "lucide-react";
import { Machine } from "@/features/machines/types/machine";


type StepCommandProps = {
    unitPrice: number,
    subtotal: number,
    machine: Machine,
    tax: number,
    quantity: number,
    total: number,
    setQuantity:  Dispatch<SetStateAction<number>>,
};

export function StepCommand({machine,unitPrice, quantity,subtotal,tax,total,setQuantity}: StepCommandProps)
{
    const formatPrice = (value: number) => {
        return `${value.toLocaleString("fr-FR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        })} €`;
    };
    return (
        <div className="mx-auto w-full max-w-6xl p-4 sm:p-6 lg:p-8">
              <div className="grid gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(300px,0.7fr)]">
                {/* LEFT */}
                <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                  <div className="mb-6 flex items-center gap-3">
                    <ShoppingBasket
                      size={20}
                      className="text-primary"
                    />

                    <div>
                      <h2 className="text-sm font-semibold text-slate-900">
                        Récapitulatif de la commande
                      </h2>

                      <p className="mt-1 text-xs text-slate-500">
                        Vérifiez les informations avant de
                        continuer.
                      </p>
                    </div>
                  </div>

                  {/* MACHINE */}
                  <div className="flex flex-col gap-4 border-b border-slate-100 pb-6 sm:flex-row">
                    <div className="relative h-32 w-full shrink-0 overflow-hidden rounded-lg bg-slate-100 sm:h-24 sm:w-28">
                      <Image
                        src={machine.image}
                        alt={machine.title}
                        fill
                        sizes="112px"
                        className="object-cover"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
                        <div>
                          <p className="text-xs uppercase tracking-wide text-slate-400">
                            {machine.category}
                          </p>

                          <h3 className="mt-1 text-base font-semibold text-slate-900">
                            {machine.title}
                          </h3>
                        </div>
                        <p className="font-semibold text-primary">
                          {formatPrice(unitPrice)}
                        </p>
                      </div>

                      <div className="mt-5 flex items-center justify-between">
                        <span className="text-sm text-slate-500">
                          Quantité
                        </span>

                        <div className="flex items-center overflow-hidden rounded-lg border border-slate-200">
                          <button
                            type="button"
                            onClick={() =>
                              setQuantity((current) =>
                                Math.max(1, current - 1),
                              )
                            }
                            disabled={quantity <= 1}
                            className="flex h-9 w-9 items-center justify-center text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-30"
                          >
                            −
                          </button>

                          <span className="flex h-9 min-w-10 items-center justify-center border-x border-slate-200 px-3 text-sm font-semibold text-slate-900">
                            {quantity}
                          </span>

                          <button
                            type="button"
                            onClick={() =>
                              setQuantity((current) =>
                                current + 1,
                              )
                            }
                            className="flex h-9 w-9 items-center justify-center text-slate-600 transition
                            hover:bg-slate-50"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">
                        Prix unitaire
                      </span>

                      <span className="text-slate-700">
                        {formatPrice(unitPrice)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">
                        Quantité
                      </span>

                      <span className="text-slate-700">
                        × {quantity}
                      </span>
                    </div>

                    <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                      <span className="text-slate-500">
                        Sous-total HT
                      </span>

                      <span className="font-medium text-slate-700">
                        {formatPrice(subtotal)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-slate-500">
                        TVA (20%)
                      </span>

                      <span className="text-slate-700">
                        {formatPrice(tax)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-2 text-base font-semibold">
                      <span className="text-slate-900">
                        Total TTC
                      </span>

                      <span className="text-primary">
                        {formatPrice(total)}
                      </span>
                    </div>
                  </div>
                </section>

                {/* RIGHT — SUMMARY */}
                <aside className="h-fit rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                  <p className="text-xs uppercase tracking-wider text-slate-400">
                    Votre commande
                  </p>

                  <h2 className="mt-2 text-lg font-semibold text-slate-900">
                    {machine.title}
                  </h2>

                  <div className="mt-5 space-y-3 border-t border-slate-100 pt-5">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">
                        Quantité
                      </span>

                      <span className="font-medium text-slate-800">
                        {quantity}
                      </span>
                    </div>

                    <div className="flex justify-between text-sm">
                      <span className="text-slate-500">
                        Total
                      </span>

                      <span className="font-semibold text-primary">
                        {formatPrice(total)}
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 rounded-lg bg-slate-50 p-4">
                    <div className="flex gap-3">
                      <ShieldCheck
                        size={18}
                        className="mt-0.5 shrink-0 text-primary"
                      />
                      <p className="text-xs leading-5 text-slate-500">
                        Vous pourrez choisir votre mode de
                        paiement à létape suivante.
                      </p>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
    )
}