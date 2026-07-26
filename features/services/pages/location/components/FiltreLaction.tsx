import { Calendrier } from "./Calendrier";

const Disponibilite = [
    {name: "toutes"},
    {name: "Disponible ce mois"},
    {name: "Disponible immédiatement"},
    {name: "Disponible cette semaine"},
];

const Typecarburant = [
    {name: "tous"},
    {name: "diesel"},
    {name: "hybride"},
    {name: "essence"},
    {name: "electrique"},
];

const Marques = [
    {name: "toyota"},
    {name: "mercedes"},
    {name: "New Holland"},
    {name: "Massey Ferguson"},
    {name: "Toutes les marques"},
];

const categories = [
    {name: "Tracteur"},
    {name: "Moissonneuse"},
    {name: "Chargeuse"},
    {name: "Pulvérisateur"},
    {name: "Remorque"}
];

export function FiltreLocation () {
    return (
        <aside className="space-y-6 rounded-2xl border border-border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold">
                Filtres de location
            </h2>

            <Calendrier />

            <div className="space-y-2">
                <label className="text-sm font-semibold">
                    Catégorie
                </label>
                <select className="w-full rounded-xl border border-border px-4 py-3 cursor-pointer outline-none">
                    {categories.map((item) => (
                        <option key={item.name} value={item.name}>{item.name}</option>
                    ))}
                </select>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-semibold">
                    Marque
                </label>
                <select className="w-full rounded-xl border border-border px-4 py-3 cursor-pointer outline-none">
                    {Marques.map((item) => (
                        <option key={item.name} value={item.name}>
                            {item.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-semibold"> Budget maximum / jour </label>
                <input
                    type="range" min="100" max="1500" step="50"
                    className="w-full accent-primary"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                    <span>100 €</span>
                    <span>1500 €</span>
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-semibold">
                Type de carburant
                </label>
                <select className="w-full rounded-xl border border-border cursor-pointer px-4 py-3 outline-none">
                    {Typecarburant.map((item) => (
                        <option key={item.name} value={item.name}>
                            {item.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="space-y-2">
                <label className="text-sm font-semibold">
                    Disponibilité
                </label>
                <select className="w-full rounded-xl border border-border cursor-pointer px-4 py-3 outline-none">
                    {Disponibilite.map((item) => (
                        <option key={item.name} value={item.name}>
                            {item.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="rounded-xl bg-muted p-4">
                <div className="flex justify-between text-sm">
                    <span>Durée estimée</span>
                    <strong>5 jours</strong>
                </div>
                <div className="mt-2 flex justify-between text-sm">
                    <span>Réduction</span>
                    <span className="font-semibold text-green-600">-10 % </span>
                </div>
            </div>
        </aside>
    )
}