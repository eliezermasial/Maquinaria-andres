import { findAllServices, findServiceBySlug } from "../repositories/service.repository";

export async function getServices() {
    const services = findAllServices()

    return services;
}

export async function getServiceBySlug (slug: string) {
    const service = findServiceBySlug(slug);

    return service;
}