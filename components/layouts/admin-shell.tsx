import Link from "next/link";
import { AdminNavigation } from "../navigation/admin-navigation";
import { APP_NAME } from "../../lib/constants/app";

export function AdminShell({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-muted/30">
      <header className="border-b bg-background">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
          <Link className="font-semibold" href="/">
            {APP_NAME}
          </Link>
          <AdminNavigation />
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
