"use client";

import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock3,
  CreditCard,
  Download,
  LockKeyhole,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  X,
} from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

type PaymentItem = {
  id: number;
  title: string;
  reference: string;
  quantity: number;
  price: number;
  image: string | StaticImageData;
};

type PaymentMethod = "visa" | "mastercard" | "paypal" | "bank";

type PaymentModalProps = {
  open: boolean;
  onClose: () => void;

  items: PaymentItem[];

  subtotal: number;
  tax?: number;

  currency?: string;
  onPaymentSuccess?: () => void;
};

export function PaymentModal({
  open,
  onClose,
  items,
  subtotal,
  tax = 0,
  currency = "€",
  onPaymentSuccess,
}: PaymentModalProps) {
  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethod>("visa");

  const [isLoading, setIsLoading] = useState(false);

  if (!open) return null;

  const total = subtotal + tax;

  const formatPrice = (price: number) => {
    return `${price.toLocaleString("fr-FR")} ${currency}`;
  };

  const handlePayment = async () => {
    setIsLoading(true);

    // Ici tu brancheras ton API de paiement
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setIsLoading(false);

    onPaymentSuccess?.();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center
        bg-black/60 p-3 backdrop-blur-sm sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      {/* Modal */}
      <div
        className="relative flex max-h-[95vh] w-full max-w-6xl
          flex-col overflow-hidden rounded-2xl bg-surface shadow-2xl"
      >
        {/* Header */}
        <header className="flex shrink-0 items-center justify-between
          border-b border-border bg-white px-4 py-4 sm:px-6"
        >
          <div className="flex items-center gap-2">
            <LockKeyhole className="size-4 text-primary" />

            <span className="text-sm font-medium text-onBackground">
              Paiement Sécurisé
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex size-9 items-center justify-center rounded-full
              transition hover:bg-muted"
            aria-label="Fermer"
          >
            <X className="size-5" />
          </button>
        </header>

        {/* Contenu */}
        <div className="overflow-y-auto">
          <div className="grid gap-6 p-4 sm:p-6 lg:grid-cols-[1.2fr_0.8fr]">
            {/* =========================
                RÉCAPITULATIF
            ========================== */}
            <section className="space-y-5">
              <div className="rounded-xl border border-border bg-white p-4 sm:p-6">
                <div className="mb-5 flex items-center gap-2">
                  <ShoppingCart className="size-4 text-primary" />

                  <h2 className="text-sm font-medium">
                    Récapitulatif de la commande
                  </h2>
                </div>

                <div className="divide-y divide-border">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="flex gap-3 py-4 first:pt-0 last:pb-0"
                    >
                      {/* Image */}
                      <div className="relative size-14 shrink-0 overflow-hidden rounded-lg bg-muted sm:size-16">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Informations */}
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <h3 className="text-sm font-semibold">
                              {item.title}
                            </h3>

                            <p className="text-xs text-muted-foreground">
                              Réf: {item.reference}
                            </p>

                            <p className="mt-1 text-xs">
                              {item.quantity} unité
                              {item.quantity > 1 ? "s" : ""}
                            </p>
                          </div>

                          <strong className="text-sm text-primary">
                            {formatPrice(item.price)}
                          </strong>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Totaux */}
                <div className="mt-6 border-t border-border pt-5">
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Sous-total HT
                      </span>

                      <span>{formatPrice(subtotal)}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        TVA (20%)
                      </span>

                      <span>{formatPrice(tax)}</span>
                    </div>

                    <div className="mt-4 flex justify-between border-t border-border pt-4 font-semibold">
                      <span>Total TTC</span>

                      <span className="text-primary">
                        {formatPrice(total)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* =========================
                  MOYENS DE PAIEMENT
              ========================== */}
              <div className="rounded-xl border border-border bg-white p-4 sm:p-6">
                <h2 className="mb-5 text-sm font-medium">
                  Mode de paiement
                </h2>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  <PaymentMethodButton
                    active={paymentMethod === "visa"}
                    onClick={() => setPaymentMethod("visa")}
                    icon={<CreditCard className="size-5" />}
                    label="VISA"
                  />

                  <PaymentMethodButton
                    active={paymentMethod === "mastercard"}
                    onClick={() => setPaymentMethod("mastercard")}
                    icon={<CreditCard className="size-5" />}
                    label="MASTERCARD"
                  />

                  <PaymentMethodButton
                    active={paymentMethod === "paypal"}
                    onClick={() => setPaymentMethod("paypal")}
                    icon={<Smartphone className="size-5" />}
                    label="PAYPAL"
                  />

                  <PaymentMethodButton
                    active={paymentMethod === "bank"}
                    onClick={() => setPaymentMethod("bank")}
                    icon={<Building2 className="size-5" />}
                    label="VIREMENT"
                  />
                </div>
              </div>
            </section>

            {/* =========================
                FORMULAIRE PAIEMENT
            ========================== */}
            <section>
              <div className="rounded-xl bg-primary p-4 text-white shadow-lg sm:p-6">
                {/* Titre */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <LockKeyhole className="size-4" />

                    <span className="text-sm">
                      Paiement Sécurisé
                    </span>
                  </div>

                  <ShieldCheck className="size-5 text-secondary" />
                </div>

                {paymentMethod === "visa" ||
                paymentMethod === "mastercard" ? (
                  <div className="space-y-5">
                    {/* Titulaire */}
                    <div>
                      <label className="mb-2 block text-[10px] uppercase tracking-wide text-white/70">
                        Titulaire de la carte
                      </label>

                      <input
                        type="text"
                        placeholder="JEAN DUPONT"
                        className="w-full rounded-lg border border-white/10
                          bg-white/10 px-4 py-3 text-sm outline-none
                          placeholder:text-white/40 focus:border-secondary"
                      />
                    </div>

                    {/* Numéro */}
                    <div>
                      <label className="mb-2 block text-[10px] uppercase tracking-wide text-white/70">
                        Numéro de carte
                      </label>

                      <div className="relative">
                        <CreditCard
                          className="absolute right-3 top-1/2 size-4
                            -translate-y-1/2 text-white/50"
                        />

                        <input
                          type="text"
                          placeholder="0000 0000 0000 0000"
                          className="w-full rounded-lg border border-white/10
                            bg-white/10 px-4 py-3 pr-10 text-sm outline-none
                            placeholder:text-white/40 focus:border-secondary"
                        />
                      </div>
                    </div>

                    {/* Expiration / CVV */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="mb-2 block text-[10px] uppercase tracking-wide text-white/70">
                          Expiration
                        </label>

                        <input
                          type="text"
                          placeholder="MM/AA"
                          className="w-full rounded-lg border border-white/10
                            bg-white/10 px-4 py-3 text-sm outline-none
                            placeholder:text-white/40 focus:border-secondary"
                        />
                      </div>

                      <div>
                        <label className="mb-2 block text-[10px] uppercase tracking-wide text-white/70">
                          CVV
                        </label>

                        <input
                          type="password"
                          placeholder="***"
                          maxLength={4}
                          className="w-full rounded-lg border border-white/10
                            bg-white/10 px-4 py-3 text-sm outline-none
                            placeholder:text-white/40 focus:border-secondary"
                        />
                      </div>
                    </div>
                  </div>
                ) : paymentMethod === "paypal" ? (
                  <div className="flex min-h-52 items-center justify-center text-center">
                    <div>
                      <Smartphone className="mx-auto mb-3 size-8" />

                      <p className="text-sm font-medium">
                        Paiement via PayPal
                      </p>

                      <p className="mt-1 text-xs text-white/60">
                        Vous serez redirigé vers PayPal pour finaliser votre paiement.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="flex min-h-52 items-center justify-center text-center">
                    <div>
                      <Building2 className="mx-auto mb-3 size-8" />

                      <p className="text-sm font-medium">
                        Paiement par virement
                      </p>

                      <p className="mt-1 text-xs text-white/60">
                        Les coordonnées bancaires vous seront communiquées
                        après confirmation.
                      </p>
                    </div>
                  </div>
                )}

                {/* Bouton */}
                <button
                  type="button"
                  disabled={isLoading}
                  onClick={handlePayment}
                  className="mt-7 flex w-full items-center justify-center
                    gap-2 rounded-lg bg-secondary px-4 py-4 text-sm
                    font-semibold text-onBackground transition
                    hover:brightness-95 disabled:cursor-not-allowed
                    disabled:opacity-60"
                >
                  {isLoading ? (
                    <>
                      <span className="size-4 animate-spin rounded-full border-2 border-onBackground/30 border-t-onBackground" />
                      Traitement...
                    </>
                  ) : (
                    <>
                      Confirmer le paiement
                      <ArrowRight className="size-4" />
                    </>
                  )}
                </button>

                {/* Sécurité */}
                <div className="mt-5 flex items-center justify-center gap-2 text-xs text-white/60">
                  <LockKeyhole className="size-3" />
                  Transactions cryptées en SSL 256-bit
                </div>
              </div>

              {/* Icônes de sécurité */}
              <div className="mt-5 flex justify-center gap-6 text-muted-foreground">
                <ShieldCheck className="size-7" />
                <LockKeyhole className="size-7" />
                <CheckCircle2 className="size-7" />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================
   BOUTON MODE DE PAIEMENT
========================================= */

type PaymentMethodButtonProps = {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
};

function PaymentMethodButton({
  active,
  onClick,
  icon,
  label,
}: PaymentMethodButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex min-h-16 flex-col items-center justify-center
        gap-1 rounded-lg border px-2 py-3 transition
        ${
          active
            ? "border-secondary bg-secondary/5 text-primary"
            : "border-border hover:border-primary"
        }`}
    >
      {icon}

      <span className="text-[9px] font-medium">
        {label}
      </span>
    </button>
  );
}