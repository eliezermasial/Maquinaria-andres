import Link from "next/link";
import { CustomerNavigation } from "../navigation/customer-navigation";
import { APP_NAME } from "../../lib/constants/app";

export function CustomerShell({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
          <Link className="font-semibold" href="/">
            {APP_NAME}
          </Link>
          <CustomerNavigation />
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
