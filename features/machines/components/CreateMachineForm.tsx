import { Button } from "../../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import { Select } from "../../../components/ui/select";

export function CreateMachineForm() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Nouvelle machine</CardTitle>
      </CardHeader>
      <CardContent>
        <form action="" className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="name">
              Nom
            </label>
            <Input id="name" name="name" placeholder="Excavatrice 320" required />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="category">
              Catégorie
            </label>
            <Input
              id="category"
              name="category"
              placeholder="Terrassement"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="dailyRate">
              Tarif journalier
            </label>
            <Input
              id="dailyRate"
              min="1"
              name="dailyRate"
              placeholder="450"
              required
              type="number"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium" htmlFor="status">
              Statut
            </label>
            <Select id="status" name="status" required>
              <option value="available">Disponible</option>
              <option value="rented">Louée</option>
              <option value="maintenance">Maintenance</option>
            </Select>
          </div>
          <Button className="w-full" type="submit">
            Créer la machine
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
