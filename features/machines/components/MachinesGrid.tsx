import { machines } from "../machines";
import { MachineCard } from "./MachineCard";

export function MachinesGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {machines.map((machine) => (
        <MachineCard 
          key={machine.id}
          machine={machine}
        />
      ))}
    </div>
  );
}