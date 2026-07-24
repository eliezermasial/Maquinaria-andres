import { typography } from "@/lib/theme/typography";
import { cn } from "@/lib/utils/cn";
import { Service } from "../../types/service";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";

type HeroProps = {
    service: Service
}

export function Hero ({service}: HeroProps) {
    
    return (
        <Section className="pt-10 pb-10">
            <Container>
                <aside className="relative h-[60vh] rounded-2xl p-5 overflow-hidden bg-[url('/imageHero.png')] bg-cover bg-center bg-no-repeat font-sans">
                    <div 
                        className="absolute inset-0 bg-gradient-to-r from-[#01261f]/90             via-[#01261f]/50 via-45% to-transparent"
                    />
                    <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-6" >
                        <div className="max-w-xl">
                            <span className="inline-flex rounded-full bg-yelloAccent px-4 py-1 text-xs font-semibold uppercase tracking-wider text-onBackground">
                                Expertise de confiance
                            </span>
                            <h1 className={cn(typography.h1, "mt-6 leading-tight text-onPrimary")}>
                                {service?.title}
                            </h1>   
                            <p className={cn(typography.body, "mt-6 text-surface")}>
                                Leader dans la distribution et lentretien de machines de haute
                                performance. Nous équipons les agriculteurs pour les défis de demain.
                            </p>
                        </div>
                    </div>
                </aside>
            </Container>
        </Section>
    )
}