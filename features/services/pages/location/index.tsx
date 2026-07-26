import { Container } from "@/components/ui/container";
import { Hero } from "../components/Hero";
import { Service } from "../../types/service";
import { FiltreLocation } from "./components/FiltreLaction";
import { LocationGrid } from "./components/LocationGrid";



type locationPageProps = {
    service: Service;
};

export function LocationPage({service}: locationPageProps) {
    const products = service.products?? [];

    return (
        <div>
            <Hero service={service} />
            
            <section className="bg-surface py-16">
                <Container>
                    <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
                        <FiltreLocation/>
                        <LocationGrid products={products}/>
                    </div>
                </Container>
            </section>
        </div>
    )
}