import Link from "next/link";
import { cn } from "@/lib/utils/cn";
import { typography } from "@/lib/theme/typography";
import { APP_NAME } from "@/lib/constants/app";


export function SectionHero () {
    return (
        <section className="relative h-[90vh] overflow-hidden bg-[url('/imageHero.png')] bg-cover bg-center bg-no-repeat font-sans">
            <div 
                className="absolute inset-0 bg-gradient-to-r from-[#01261f]/90 
                via-[#01261f]/50 via-45% to-transparent"
            />
            <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-6" >
                <div className="max-w-xl">
                    <span className="inline-flex rounded-full bg-yelloAccent px-4 py-1 text-xs font-semibold uppercase tracking-wider text-onBackground">
                        Expertise de confiance
                    </span>
                    <h1 className={cn(typography.h1, "mt-6 leading-tight text-onPrimary")}>
                        {APP_NAME}
                    </h1>
                    <p className={cn(typography.body, "mt-6 text-surface")}>
                        Leader dans la distribution et lentretien de machines de haute
                        performance. Nous équipons les agriculteurs pour les défis de demain.
                    </p>
                    <div className="mt-10 flex flex-wrap gap-4">
                        <Link href="/" 
                            className="rounded-lg bg-yelloAccent px-6 py-3 font-semibold text-onBackground transition hover:bg-secondary hover:opacity-90"
                        >
                            Devis gratuit
                        </Link>
                        <Link href="/machines/catalogue"
                            className="rounded-lg bg-onPrimary px-6 py-3 font-semibold text-onBackground ransition hover:bg-border hover:border"
                        >
                            Voir les machines
                        </Link>
                        <Link href="/" 
                            className="rounded-lg border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-onBackground"
                        >
                            Louer
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}