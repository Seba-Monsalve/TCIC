import { useState } from "react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { createNewPostThunks } from "@/posts/thunks";
import { useDispatch } from "react-redux";

export const CreateComponent = () => {

    const dispatch = useDispatch();

    const initialFormValues = { description: '', name: '' }
    const [formValues, setformValues] = useState(initialFormValues);


    const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setformValues({
            ...formValues,
            [name]: value.trim()
        });
    }
    const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (formValues.description == '' || formValues.name === '') {
            return;
        }
        dispatch(createNewPostThunks(formValues));
        setformValues({ description: '', name: '' });
    }

    return (
        <form onSubmit={onHandleSubmit} className=" flex gap-2 items-center justify-around py-5 ">
            <Input onChange={(e) => onHandleChange(e)} name='name' placeholder='Nombre' className="flex-1" />
            <Input onChange={(e) => onHandleChange(e)} name='description' placeholder='Descripcion' className="flex-3" />
            <Button variant={'default'}>Crear</Button>
        </form>
    )
}
