"use client";

import { useEffect, useState } from "react";
import { getServices } from "../services/service.service";
import { ServiceCard } from "./serviceCard";
import { Service } from "../types/service";


export function ServicesGrid() {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    async function loadingServices () {
      const data = await getServices();
      setServices(data);
    }

    loadingServices();

  }, [])

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {services.map((service) => {
        return (
          <ServiceCard
            key={service.title}
            service={service}
          />
        );
      })}
    </div>
  )
}