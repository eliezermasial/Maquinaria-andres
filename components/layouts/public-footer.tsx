import { APP_NAME } from "../../lib/constants/app";

export function PublicFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center px-6 text-sm text-muted-foreground">
        © {new Date().getFullYear()} {APP_NAME}. Tous droits réservés.
      </div>
    </footer>
  );
}
