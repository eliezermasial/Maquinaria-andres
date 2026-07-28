import {ArrowLeft, ArrowRight,} from "lucide-react";


type PurchaseFooterProps = {
    step: number,
    handleClose: () => void,
    handleBack: () => void,
    handleNext: () => void,
};

export function PurchaseFooter({step, handleClose, handleBack, handleNext}: PurchaseFooterProps) {

    return (
        <footer className="flex shrink-0 flex-col-reverse gap-3 border-t border-slate-200 bg-white
            px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6"
          >
            <button
              type="button"
              onClick={step === 1 ? handleClose : handleBack}
              className="flex h-11 items-center justify-center gap-2 rounded-lg border border-slate-200
              px-5 text-sm font-medium text-slate-600 transition hover:bg-slate-50"
            >
              <ArrowLeft size={16} />
              {step === 1 ? "Annuler" : "Retour"}
            </button>

            {step === 1 && (
              <button
                type="button"
                onClick={handleNext}
                className="flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm
                font-semibold text-white transition hover:opacity-90"
              >
                Suivant
                <ArrowRight size={16} />
              </button>
            )}
        </footer>
    )
}