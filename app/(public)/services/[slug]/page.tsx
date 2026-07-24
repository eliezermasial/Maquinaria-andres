import { Metadata } from "next";
import { notFound } from "next/navigation";
import { VentPage } from "@/features/services/pages/vent";
import { LocationPage } from "@/features/services/pages/location";
import { SemencePage } from "@/features/services/pages/Semences-fertilisants";
import { getServiceBySlug } from "@/features/services/services/service.service";
import { PrestationsAgricolesPage } from "@/features/services/pages/PrestationsAgricoles";


export const servicePage = {
    vente: VentPage,
    location: LocationPage,
    semences: SemencePage,
    "preparation-sols": PrestationsAgricolesPage,
};

type PageProps = {
    params: Promise<{slug: string}>;
}

export async function generateMetadata({params}: PageProps): Promise<Metadata>
{
    const {slug}= await params;

    return {
        title: slug
    }
}


export default async function ServicePage ({params}: PageProps)
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