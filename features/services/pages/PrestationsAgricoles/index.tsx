import { Hero } from "../components/Hero";
import { Service } from "../../types/service";
import { NosServices } from "./components/NosServices";
import { RequestEstimate } from "./components/RequestEstimate";

export type PrestationPageProps = {
    service: Service
}

export function PrestationsAgricolesPage({service}: PrestationPageProps) {
    return (
        <>
            <Hero service={service} />
            <NosServices service={service} />
            <RequestEstimate />
        </>
    )
}