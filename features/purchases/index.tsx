"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import type { Machine } from "../machines/types/machine";
import { Purchaseheader } from "./components/PurchaseHeader";
import { Stepper } from "./components/Stepper";
import { PurchaseContent } from "./components/PurchaseContent";
import { PurchaseFooter } from "./components/PurchaseFooter";



type PurchaseModalProps = {
  machine: Machine;
};
export type StepLineProps = {
  active: boolean
};
export type PaymentMethodProps = {
  id: PaymentMethod;
  label: string;
  icon: React.ReactNode;
  selected: boolean;
  onClick: () => void;
};
export type StepIndicatorProps = {
  number: number;
  label: string;
  active: boolean;
  current: boolean;
};

export type PaymentMethod = "visa" | "mastercard" | "paypal" | "bank";

export type Step = 1 | 2 | 3;


export function PurchaseModal({machine,}: PurchaseModalProps)
{
  const router = useRouter();

  const [step, setStep] = useState<Step>(1);
  const [quantity, setQuantity] = useState(1);
  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethod>("visa");

  const [isProcessing, setIsProcessing] = useState(false);

  /*
   * La propriété sera adapter selon le type Machine.
   * Exemple : machine.price peut être un number.
   */
  const unitPrice = Number(machine.price);

  const subtotal = useMemo(() => {
    return unitPrice * quantity;
  }, [unitPrice, quantity]);

  const tax = useMemo(() => {
    return subtotal * 0.2;
  }, [subtotal]);

  const total = useMemo(() => {
    return subtotal + tax;
  }, [subtotal, tax]);

  const handleClose = () => {
    router.back();
  };

  const handleNext = () => {
    if (step === 1) {
      setStep(2);
    }
  };

  const handleBack = () => {
    if (step === 2) {
      setStep(1);
    }
  };

  const handlePayment = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();

    setIsProcessing(true);

    /*
     * Plus tard :
     *
     * await createPurchase(...)
     *
     * Ici on simule simplement le paiement.
     */
    await new Promise((resolve) =>
      setTimeout(resolve, 1200),
    );

    setIsProcessing(false);
    setStep(3);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3 backdrop-blur-sm sm:p-5"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          handleClose();
        }
      }}
    >
      <div className="relative flex max-h-[95vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl
      bg-slate-50 shadow-2xl"
      >

        <Purchaseheader
          step={step}
          handleClose={handleClose}
        />
        <Stepper
          step={step}
          StepIndicator={StepIndicator}
          StepLine={StepLine} 
        />
        <PurchaseContent
          step={step}
          setStep={setStep}
          machine={machine}
          unitPrice={unitPrice}
          tax={tax}
          total={total}
          subtotal={subtotal}
          quantity={quantity}
          setQuantity={setQuantity}
          PaymentMethod={PaymentMethod}
          paymentMethod={paymentMethod}
          setPaymentMethod={setPaymentMethod}
          handlePayment={handlePayment}
          isProcessing={isProcessing}
          handleClose={handleClose}
        />

        <PurchaseFooter
          step={step}
          handleClose={handleClose}
          handleBack={handleBack}
          handleNext={handleNext}
        />
      </div>
    </div>
  );
}


function StepIndicator({number,label,active,current,}: StepIndicatorProps) {
  return (
    <div className="flex min-w-0 items-center gap-2">
      <div
        className={[
          "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-semibold transition",
          active
            ? "bg-primary text-white"
            : "bg-slate-100 text-slate-400",
          current ? "ring-4 ring-primary/10" : "",
        ].join(" ")}
      >
        {number}
      </div>

      <span
        className={[
          "hidden text-xs font-medium sm:block",
          active ? "text-slate-800" : "text-slate-400",
        ].join(" ")}
      >
        {label}
      </span>
    </div>
  );
}

function StepLine({active,}: StepLineProps) {
  return (
    <div
      className={[
        "mx-2 h-px w-8 transition sm:mx-4 sm:w-16",
        active ? "bg-primary" : "bg-slate-200",
      ].join(" ")}
    />
  );
}

function PaymentMethod({
  label,
  icon,
  selected,
  onClick,
}: PaymentMethodProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "flex min-h-20 flex-col items-center justify-center gap-2 rounded-lg border p-3 transition",
        selected
          ? "border-primary bg-primary/5 text-primary ring-1 ring-primary"
          : "border-slate-200 text-slate-600 hover:border-primary/40 hover:bg-slate-50",
      ].join(" ")}
    >
      {icon}

      <span className="text-[10px] font-semibold tracking-wide">
        {label}
      </span>
    </button>
  );
}