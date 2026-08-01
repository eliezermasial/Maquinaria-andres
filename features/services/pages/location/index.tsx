import { Hero } from "../components/Hero";
import { Service } from "../../types/service";
import { LocationGrid } from "./components/LocationGrid";
import { getMachines } from "@/features/machines/services/machine.service";


type locationPageProps= {
    service: Service;
};

export async function LocationPage({service}: locationPageProps) {
    const machines = await getMachines();

    return (
        <div>
            <Hero service={service} />
            <LocationGrid machines={machines}/>
        </div>
    )
}