import { Check, } from "lucide-react";
import { Machine } from "@/features/machines/types/machine";


type StepSuccessProps = {
    machine: Machine,
    total: number,
    quantity: number,
    handleClose: () => void;
}

export function StepSuccess({machine,total,quantity,handleClose}: StepSuccessProps)
{
    const formatPrice = (value: number) => {
        return `${value.toLocaleString("fr-FR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        })} €`;
    };

    return (
        <div className="flex min-h-125 items-center justify-center p-6 sm:p-10">
            <div className="w-full max-w-lg rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-sm sm:p-10">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <Check size={32} />
                </div>
                <p className="mt-6 text-xs font-medium uppercase tracking-wider text-primary">
                  Paiement confirmé
                </p>

                <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                  Merci pour votre commande !
                </h2>

                <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500">
                  Votre commande a bien été enregistrée.
                  Vous recevrez prochainement les informations
                  relatives à son traitement.
                </p>

                <div className="mt-7 rounded-xl bg-slate-50 p-5 text-left">
                  <div className="flex justify-between gap-4 text-sm">
                    <span className="text-slate-500">
                      Machine
                    </span>

                    <span className="text-right font-medium text-slate-900">
                      {machine.title}
                    </span>
                  </div>

                  <div className="mt-3 flex justify-between gap-4 text-sm">
                    <span className="text-slate-500">
                      Quantité
                    </span>

                    <span className="font-medium text-slate-900">
                      {quantity}
                    </span>
                  </div>

                  <div className="mt-3 flex justify-between gap-4 border-t border-slate-200 pt-3 text-sm">
                    <span className="font-medium text-slate-700">
                      Total
                    </span>

                    <span className="font-semibold text-primary">
                      {formatPrice(total)}
                    </span>
                  </div>
                </div>

                <div className="mt-6 rounded-lg border border-emerald-100 bg-emerald-50 p-4">
                  <p className="text-xs leading-5 text-emerald-800">
                    Votre référence de commande :
                  </p>

                  <p className="mt-1 text-sm font-bold tracking-wider text-emerald-950">
                    CMD-2026-000125
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleClose}
                  className="mt-7 flex h-12 w-full items-center justify-center rounded-md
                  bg-primary px-5 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Fermer
                </button>
            </div>
        </div>
    )
}