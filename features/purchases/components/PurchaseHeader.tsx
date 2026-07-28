import { X } from "lucide-react";


type PurchaseHeadProps = {
    step: number,
    handleClose: () => void;
}

export function Purchaseheader({step, handleClose}: PurchaseHeadProps) {
    return (
        <header className="flex shrink-0 items-center justify-between border-b border-slate-200 bg-white px-4 py-4 sm:px-6">
          <div>
            <p className="text-xs font-medium text-primary">
              Maquinaria Andrés
            </p>

            <h1 className="mt-1 text-base font-semibold text-slate-900 sm:text-lg">
              {step === 1 && "Finaliser votre commande"}
              {step === 2 && "Paiement sécurisé"}
              {step === 3 && "Commande confirmée"}
            </h1>
          </div>

          <button
            type="button"
            onClick={handleClose}
            aria-label="Fermer"
            className="flex h-9 w-9 items-center justify-center rounded-full text-slate-500
            transition hover:bg-slate-100 hover:text-slate-900"
          >
            <X size={20} />
          </button>
        </header>
    )
}