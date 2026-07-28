import { Metadata } from "next";
import { notFound } from "next/navigation";
import { VentePage } from "@/features/services/pages/vente";
import { LocationPage } from "@/features/services/pages/location";
import { SemencePage } from "@/features/services/pages/Semences-fertilisants";
import { getServiceBySlug } from "@/features/services/services/service.service";
import { PrestationsAgricolesPage } from "@/features/services/pages/PrestationsAgricoles";
import { outilsAgricolesPage } from "@/features/services/pages/outils-agricoles";


export const servicePage = {
    vente: VentePage,
    location: LocationPage,
    semences: SemencePage,
    "outils-agricoles": outilsAgricolesPage,
    "preparation-sols": PrestationsAgricolesPage,
};

type ServicePageProps = {
    params: Promise<{slug: string}>;
}

export async function generateMetadata({params}: ServicePageProps): Promise<Metadata>
{
    const {slug}= await params;

    return {
        title: slug
    }
}


export default async function ServicePage ({params}: ServicePageProps)
{
    const {slug} = await params;
    const service = await getServiceBySlug(slug);

    if(!service) {
        notFound();
    }

    const PageComponent = servicePage[
        service?.slug as keyof typeof servicePage
    ];

    if(!PageComponent) {
        notFound();
    } 
    
    return <PageComponent service={service} />
}