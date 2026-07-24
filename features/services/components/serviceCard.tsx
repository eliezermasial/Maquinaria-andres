import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import type { Service } from "../types/service";
import { ArrowRight } from "lucide-react";
import Link from "next/link";


type ServiceProps = {
    service: Service
}

export function ServiceCard({service}: ServiceProps) {
    const Icon = service.icon
    return (
        <Card 
            className="group rounded-2xl border border-border bg-white p-6 transition-all duration-300
            hover:-translate-y-1 hover:shadow-xl"
        >
            <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100">
                  <Icon
                    size={22}
                    className="text-primary"
                  />
                </div>
            </CardHeader>
            <CardContent className="p-2 pt-0">
                <CardTitle className="mt-8 text-2xl text-onBackground">
                    {service.title}
                </CardTitle>

                <p className="mt-4 leading-7 text-muted-foreground">
                    {service.description}
                </p>

                <Link 
                    className="mt-8 inline-flex items-center gap-2 font-semibold text-primary transition group-hover:gap-3"
                    href={`/services/${service.slug}`}
                >
                    {service.action}

                    <ArrowRight
                        size={18}
                        className="transition-transform group-hover:translate-x-1"
                    />
                </Link>
            </CardContent>
        </Card>
    )
}