import { Service } from "@/features/services/types/service";
import { PrestationCard } from "./PrestationCard";

type ServiceProps = {
    service: Service
};

export function PrestaionGrid({service}: ServiceProps) {

    const prestation = service.prestations ?? [];

    return(
        <div className="grid gap-6 lg:grid-cols-3">
          <PrestationCard prestation={prestation[0]} className="lg:col-span-1 h-110 lg:row-span-2" heigth="h-[600px]" />

          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <PrestationCard prestation={prestation[1]} heigth="h-50" className="h-50" />
              <PrestationCard prestation={prestation[2]} heigth="h-50" className="h-50" />
            </div>
            
            <PrestationCard prestation={prestation[3]} heigth="h-50" className="h-54" />
          </div>
        </div>
    )
}