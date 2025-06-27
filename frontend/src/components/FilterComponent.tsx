import { Button } from "./ui/button"
import { Input } from "./ui/input"

export const FilterComponent = () => {
    return (
        <div className="flex justify-around items-center gap-5 p-3">
            <Input placeholder="Filtrar por nombre" />
            <Button variant={"outline"}>Buscar</Button>
        </div>
    )
}
