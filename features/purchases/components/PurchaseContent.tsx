import { StepPay } from "./Steps/StepPay";
import { PaymentMethod, PaymentMethodProps, Step } from "..";
import { StepCommand } from "./Steps/StepCommand";
import { StepSuccess } from "./Steps/StepSuccess";
import { Machine } from "@/features/machines/types/machine";
import type { ComponentType, Dispatch, SetStateAction } from "react";


type PurchaseContentprops = {
    step: number;
    machine: Machine,
    unitPrice: number,
    subtotal: number,
    tax: number,
    total: number,
    quantity: number,
    paymentMethod: string,
    isProcessing: boolean,

    setQuantity:  Dispatch<SetStateAction<number>>,
    setPaymentMethod:  Dispatch<SetStateAction<PaymentMethod>>,
    setStep: Dispatch<SetStateAction<Step>>,
    PaymentMethod: ComponentType<PaymentMethodProps>,
    handlePayment: (
        event: React.FormEvent<HTMLFormElement>
    ) => Promise<void>,
    handleClose: () => void,
};

export function PurchaseContent({
    step,
    machine,
    unitPrice,
    subtotal,
    tax,
    total,
    quantity,
    paymentMethod,
    setQuantity,
    setPaymentMethod,
    setStep,
    PaymentMethod,
    handlePayment,
    isProcessing,
    handleClose,
}:PurchaseContentprops)
{
    return (
        <div className="min-h-0 flex-1 overflow-y-auto">

            {step === 1 && (
                <StepCommand
                    tax={tax}
                    total={total}
                    machine={machine}
                    unitPrice={unitPrice}
                    subtotal={subtotal}
                    quantity={quantity}
                    setQuantity={setQuantity}
                />
            )}

            {step === 2 && (
                <StepPay
                    PaymentMethod={PaymentMethod}
                    handlePayment={handlePayment}
                    isProcessing={isProcessing}
                    setPaymentMethod={setPaymentMethod}
                    setStep={setStep}
                    paymentMethod={paymentMethod}
                    total={total}
                    machine={machine}
                    subtotal={subtotal}
                    tax={tax}
                    quantity={quantity}
                />
            )}

            {step === 3 && (
                <StepSuccess
                    machine={machine}
                    total={total}
                    quantity={quantity}
                    handleClose={handleClose}
                />
            )}
        </div>
    )
}