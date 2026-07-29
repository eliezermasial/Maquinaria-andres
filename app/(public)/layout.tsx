import { Footer } from "@/components/layouts/footer";
import { PublicHeader } from "@/components/layouts/PublicHeader";
import React from "react";

export default function PublicLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col">
      <PublicHeader />
      <main className="flex-1">
        {children}
        {modal}
        </main>
      <Footer />
    </div>
  );
}
