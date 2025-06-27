import { Button } from "./ui/button"
import { Input } from "./ui/input"

export const CreateComponent = () => {
    return (
        <div className=" flex gap-2 items-center justify-around py-5 ">
            <Input placeholder='Nombre' className="flex-1" />
            <Input placeholder='Descripcion' className="flex-3" />
            <Button variant={'default'}>Crear</Button>
        </div>
    )
}
