import { findAllMachines, findMachineByslug } from "../repository/machine.repository";


export async function getMachines () {
    const machines = await findAllMachines();
    return machines
}

export async function getMachineByslug (slug: string) {
    const machine = await findMachineByslug(slug);
    return machine;
}