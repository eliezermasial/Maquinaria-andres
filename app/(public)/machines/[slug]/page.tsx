import { MachineDetail } from "@/features/machines/components/MachineDetail";
import { getMachineByslug } from "@/features/machines/services/machine.service";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type MachinePageProps = {
    params: Promise<{slug: string}>;
}

export async function generateMetadata({params}: MachinePageProps): Promise<Metadata>
{
    const {slug}= await params;

    return {
        title: slug
    }
}

export default async function MachinePage ({params}: MachinePageProps) {
    
    const {slug} = await params;
    const machine = await getMachineByslug(slug);

    if(!machine) {
        notFound()
    }

    return (
        <div>
            <MachineDetail machine={machine} />
        </div>
    )
}