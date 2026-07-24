import { services } from "../data.services";
import type { Service } from "../types/service";



export async function findAllServices (): Promise<Service[]>
{
    return services
}

export async function findServiceBySlug (slug: string): Promise<Service|null>
{
    const service = services.find(service => service.slug === slug) ?? null

    return service;
}