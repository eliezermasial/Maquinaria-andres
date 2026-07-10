import { CreateMachineForm, MachineCatalog } from "../../../features/machines";

export const metadata = {
  title: "Administration",
};

export default function AdminDashboardPage() {
  return (
    <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 py-10 lg:grid-cols-[1fr_360px]">
      <MachineCatalog />
      <CreateMachineForm />
    </div>
  );
}
