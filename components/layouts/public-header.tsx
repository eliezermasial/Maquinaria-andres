import Link from "next/link";
import { PublicNavigation } from "../navigation/public-navigation";
import { APP_NAME } from "../../lib/constants/app";

export function PublicHeader() {
  return (
    <header className="border-b bg-background/95">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <Link className="text-base font-semibold" href="/">
          {APP_NAME}
        </Link>
        <PublicNavigation />
      </div>
    </header>
  );
}
