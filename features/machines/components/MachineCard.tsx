import { Card, CardHeader, CardContent, CardTitle, CardParagraphy } from "@/components/ui/card";
import Image  from "next/image";
import { Eye, Heart} from "lucide-react";
import type { Machine } from "../types/machine";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";


type MachineProps = {
    machine: Machine
};

export function MachineCard ({machine}: MachineProps) {
    return (
        <Card className="group overflow-hidden rounded-2xl border p-0 border-border
            bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
            <CardHeader className="relative h-56 overflow-hidden">
                <Image
                  src={machine.image}
                  alt={machine.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                {machine.badge && (
                    <Badge
                        className="absolute left-4 top-4 bg-yelloAccent border-yelloAccent px-3 py-1
                        text-xs uppercase text-onBackground"
                    >
                        {machine.badge}
                    </Badge>
                )}
                <button className="absolute right-4 top-2 flex h-10 w-10 md:h-8 md:w-8 items-center
                    justify-center rounded-full bg-white shadow"
                >
                  <Heart size={18} />
                </button>
            </CardHeader>

            <CardContent className="space-y-4 p-5">
                <div>
                    <span className="text-xs uppercase tracking-wider text-muted-foreground">
                        {machine.category}
                    </span>
                    <CardTitle className="mt-1 text-2xl font-semibold text-onBackground">
                        {machine.title}
                    </CardTitle>
                    <CardParagraphy className="text-xs uppercase tracking-wider text-muted-foreground">
                        {machine.engine}
                    </CardParagraphy>
                </div>
                <div className="flex items-center justify-between">
                    <span className="font-semibold text-primary">
                        {machine.price}
                    </span>

                    <Link
                        href={`/machines/${machine.slug}`}
                        className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100
                        text-primary transition hover:bg-primary hover:text-white"
                    >
                        <Eye size={18} />
                    </Link>
                </div>
            </CardContent>
        </Card>
    )
}