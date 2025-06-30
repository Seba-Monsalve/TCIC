import { useDispatch, } from "react-redux"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { useState } from "react";
import { filterPostsThunks } from "@/posts/thunks";

export const FilterComponent = () => {

    const dispatch = useDispatch();
    const [filterValue, setfilterValue] = useState('')
    const onFilter = () => {
        dispatch(filterPostsThunks({ filterValue }));
        setfilterValue('');

    }
    return (
        <div className="flex justify-around items-center gap-5 p-3">
            <Input onKeyDown={onFilter} onChange={(e) => setfilterValue(e.target.value)} defaultValue={filterValue} placeholder="Filtrar por nombre" />
            <Button onClick={onFilter} variant={"outline"}>Buscar</Button>
        </div>
    )
}
