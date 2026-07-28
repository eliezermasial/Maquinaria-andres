import { ComponentType } from "react";
import { StepIndicatorProps, StepLineProps } from "..";

type StepperProps = {
    step: number,
    StepLine: ComponentType<StepLineProps>;
    StepIndicator: ComponentType<StepIndicatorProps>,
};

export function Stepper ({step, StepLine, StepIndicator}: StepperProps) {
    return (
        <div className="border-b border-slate-200 bg-white px-4 py-4 sm:px-8">
          <div className="mx-auto flex max-w-2xl items-center justify-center">
            <StepIndicator
              number={1}
              label="Commande"
              active={step >= 1}
              current={step === 1}
            />

            <StepLine active={step >= 2} />

            <StepIndicator
              number={2}
              label="Paiement"
              active={step >= 2}
              current={step === 2}
            />

            <StepLine active={step >= 3} />

            <StepIndicator
              number={3}
              label="Confirmation"
              active={step >= 3}
              current={step === 3}
            />
          </div>
        </div>
    )
}