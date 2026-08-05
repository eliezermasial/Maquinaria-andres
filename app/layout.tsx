import type { Metadata } from "next";
import {  GeistSans, GeistMono  } from "geist/font";
import { AppProviders } from "@/providers/app-provider";
import { APP_DESCRIPTION, APP_NAME } from "@/lib/constants/app";
import "./globals.css";



export const metadata: Metadata = {
  title: {
    default: APP_NAME,
    template: `%s | ${APP_NAME}`,
  },
  description: APP_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${GeistSans.variable} ${GeistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
