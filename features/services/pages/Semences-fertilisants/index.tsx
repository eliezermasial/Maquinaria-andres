import { Hero } from "../components/Hero";
import { Service } from "../../types/service";
import { SemencesGrid } from "./components/SemencesGrid";

type VentePageProps = {
    service: Service
}
export function SemencePage ({service}: VentePageProps) {
    return (
        <>
            <Hero service={service} />
            <SemencesGrid />
        </>
    )
}