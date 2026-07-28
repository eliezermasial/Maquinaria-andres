import type { Service } from "../../types/service";


type OutilsAgricolesProps = {
    service: Service;
}

export function outilsAgricolesPage({service}: OutilsAgricolesProps) {
    return(
        <div>
            <h1>outils-agricoles: {service.title} </h1>
        </div>
    )
}