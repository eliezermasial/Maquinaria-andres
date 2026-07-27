import { machines } from "../machines";
import { Machine } from "../types/machine";

export async function findAllMachines (): Promise<Machine[]> {
    return machines
}
export async function findMachineByslug (slug: string): Promise<Machine|null> {

    const data = machines.find(machine => machine.slug === slug)
    const machine = data ?? null;

    return machine;
}