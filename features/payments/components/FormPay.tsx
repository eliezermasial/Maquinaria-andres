import {
  ArrowRight,
  CircleAlert,
  CreditCard,
  LockKeyhole,
} from "lucide-react";


type FormProps = {
    isProcessing: boolean,
    handlePayment: (
        event:React.FormEvent<HTMLFormElement>
    )=> Promise<void>
}

export function FormPay({handlePayment, isProcessing}:FormProps) {
    return (
        <form
            id="payment-form"
            onSubmit={handlePayment}
            className="rounded-xl bg-emerald-950 p-5 shadow-lg sm:p-7"
        >
            <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <LockKeyhole
                        size={17}
                        className="text-yellow-400"
                    />
                    <span className="text-xs font-medium text-white/80">
                        Paiement sécurisé
                    </span>
                </div>
                <div className="flex h-8 w-8 items-center justify-center
                    rounded-full border border-yellow-400/60 text-yellow-400"
                >
                    <LockKeyhole size={14} />
                </div>
            </div>
            <div className="space-y-4">
                <div>
                    <label
                        htmlFor="card-holder"
                        className="mb-2 block text-[10px] font-medium uppercase tracking-wider text-white/70"
                    >
                        Titulaire de la carte
                    </label>
                    <input
                        id="card-holder"
                        required
                        placeholder="JEAN DUPONT"
                        className="h-11 w-full rounded-md border border-transparent bg-emerald-900/80 px-4
                        text-sm text-white
                        outline-none placeholder:text-white/20 focus:border-yellow-400"
                    />
                </div>
                <div>
                    <label
                        htmlFor="card-number"
                        className="mb-2 block text-[10px] font-medium uppercase tracking-wider text-white/70"
                    >
                        Numéro de carte
                    </label>

                    <div className="relative">
                        <input
                            id="card-number"
                            required
                            inputMode="numeric"
                            placeholder="0000 0000 0000 0000"
                            className="h-11 w-full rounded-md border border-transparent bg-emerald-900/80 px-4 pr-10
                            text-sm tracking-wider text-white outline-none placeholder:text-white/20 
                            focus:border-yellow-400"
                        />
                        <CreditCard
                            size={16}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <div>
                        <label
                            htmlFor="expiration"
                            className="mb-2 block text-[10px] font-medium uppercase tracking-wider text-white/70"
                        >
                            Expiration
                        </label>
                        <input
                            id="expiration"
                            required
                            placeholder="MM/AA"
                            className="h-11 w-full rounded-md bg-emerald-900/80 px-4 text-sm text-white outline-none
                            placeholder:text-white/20 focus:border-yellow-400"
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="cvv"
                            className="mb-2 block text-[10px] font-medium uppercase tracking-wider text-white/70"
                        >
                            CVV
                        </label>
                        <div className="relative">
                            <input
                                id="cvv"
                                required
                                type="password"
                                inputMode="numeric"
                                placeholder="•••"
                                className="h-11 w-full rounded-md bg-emerald-900/80 px-4 pr-10 text-sm text-white
                                outline-none placeholder:text-white/20 focus:border-yellow-400"
                            />
                            <CircleAlert
                                size={15}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <button
                type="submit"
                disabled={isProcessing}
                className="mt-6 flex h-12 w-full items-center justify-center gap-3 rounded-md bg-yellow-400 px-5
                text-sm font-semibold text-emerald-950 transition hover:bg-yellow-300 disabled:cursor-not-allowed
                disabled:opacity-60"
            >
                {isProcessing
                    ? "Traitement du paiement..."
                    : "Confirmer le paiement"}

                {!isProcessing && (
                    <ArrowRight size={17} />
                )}
            </button>
            <p className="mt-5 flex items-center justify-center gap-2 text-center text-[10px] text-white/50">
                <LockKeyhole size={12} />
                Transactions cryptées en SSL 256-bit
            </p>
        </form>
    )
}