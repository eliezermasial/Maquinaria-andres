import Link from "next/link";
import { PublicNavigation } from "@/components/navigation/public-navigation";
import { APP_NAME } from "@/lib/constants/app";
import { HeaderActions } from "../navigation/HeaderActions";
import { Input } from "../ui/input";
import { Search } from "lucide-react";

export function PublicHeader() {

  return (
    <header className="border-b bg-onPrimary text-onBackground">
      <div className="mx-auto flex h-18 w-full max-w-6xl px-6 items-center justify-between">
        <Link className="text-base font-semibold" href="/">
          {APP_NAME}
        </Link>
        <PublicNavigation />
        <div className="flex justify-center gap-5">
          <Input icon={Search}
            className="w-50 rounded-xl bg-onMuted border-muted placeholder:text-background " placeholder="Recherche..."
          />
          <HeaderActions />
        </div>
      </div>
    </header>
  );
}
