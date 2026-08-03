import { getMachineByslug } from "@/features/machines/services/machine.service";
import { PurchaseModal } from "@/features/purchases";
import { notFound } from "next/navigation";


type PurchasePageProps = {
    params: Promise<{slug: string}>
};

export default async function Purchase({params}: PurchasePageProps) {
    const {slug} = await params;
    const machine = await getMachineByslug(slug)

    if(!machine) {
        notFound()
    }

    return (
        <div>
            <PurchaseModal machine={machine} />
        </div>
    )
}