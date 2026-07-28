import Image from "next/image";
import { CreditCard,ShieldCheck,} from "lucide-react";
import { Machine } from "@/features/machines/types/machine";
import { PaymentMethod, PaymentMethodProps, Step } from "../..";
import { ComponentType, Dispatch, SetStateAction } from "react";
import { FormPay } from "@/features/payments/components/FormPay";

type StepPayProps= {
    machine: Machine,
    subtotal: number,
    tax: number,
    total: number,
    quantity: number,
    paymentMethod: string,
    isProcessing: boolean,

    PaymentMethod: ComponentType<PaymentMethodProps>
    setPaymentMethod:  Dispatch<SetStateAction<PaymentMethod>>,
    setStep:Dispatch<SetStateAction<Step>>,
    handlePayment: (
        event: React.FormEvent<HTMLFormElement>
    ) => Promise<void>;
};

export function StepPay ({
    tax,
    total,
    machine,
    subtotal,
    quantity,
    isProcessing,
    handlePayment,
    PaymentMethod,
    paymentMethod,
    setPaymentMethod,
}: StepPayProps) {

    const formatPrice = (value: number) => {
        return `${value.toLocaleString("fr-FR", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        })} €`;
    };

    return (
        <div className="mx-auto w-full max-w-6xl p-4 sm:p-6 lg:p-8">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1.5fr)_minmax(340px,0.8fr)]">
                <section className="space-y-6">
                    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                        <h2 className="text-sm font-semibold text-slate-900">
                            Mode de paiement
                        </h2>
                        <p className="mt-1 text-xs text-slate-500">
                            Sélectionnez votre mode de paiement.
                        </p>
                        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                            <PaymentMethod
                                id="visa"
                                label="VISA"
                                icon={<CreditCard size={20} />}
                                selected={paymentMethod === "visa"}
                                onClick={() => setPaymentMethod("visa")}
                            />
                            <PaymentMethod
                                id="mastercard"
                                label="MASTERCARD"
                                icon={<CreditCard size={20} />}
                                selected={paymentMethod === "mastercard"}
                                onClick={() => setPaymentMethod("mastercard")}
                            />
                        </div>
                    </div>

                    {paymentMethod === "visa" ||
                     paymentMethod === "mastercard" ? (
                        <FormPay
                            handlePayment={handlePayment}
                            isProcessing={isProcessing}
                        />
                    ) : null}
                </section>

                <aside className="h-fit rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                    <div className="flex items-center gap-3">
                        <div className="relative h-14 w-14 overflow-hidden rounded-lg bg-slate-100">
                            <Image
                                src={machine.image}
                                alt={machine.title}
                                fill
                                sizes="56px"
                                className="object-cover"
                            />
                        </div>
                        <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-slate-900">{machine.title}</p>

                        <p className="mt-1 text-xs text-slate-500">Quantité : {quantity}</p>
                        </div>
                    </div>

                    <div className="mt-5 space-y-3 border-t border-slate-100 pt-5">
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-500">Sous-total</span>
                            <span>
                                {formatPrice(subtotal)}
                            </span>
                        </div>
                        <div className="flex justify-between text-sm">
                            <span className="text-slate-500">TVA</span>
                            <span>{formatPrice(tax)}</span>
                        </div>
                        <div className="flex justify-between border-t border-slate-100 pt-3 font-semibold">
                            <span>Total TTC</span>
                            <span className="text-primary">{formatPrice(total)}</span>
                        </div>
                    </div>

                    <div className="mt-5 flex gap-3 rounded-lg bg-slate-50 p-4">
                        <ShieldCheck
                            size={18}
                            className="shrink-0 text-primary"
                        />
                        <p className="text-xs leading-5 text-slate-500">
                            Vos informations de paiement sont
                            protégées par un système de paiement
                            sécurisé.
                        </p>
                    </div>
                </aside>
            </div>
        </div>
    )
}