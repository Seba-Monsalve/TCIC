

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useDispatch, } from "react-redux"

import { Button } from "./ui/button"
import type { Post } from "@/interfaces/post.interface"
import { deletePostThunk } from "@/posts/thunks";


interface TableComponentProps {
    posts: Post[];
}



export const TableComponent = ({ posts }: TableComponentProps) => {
    const dispatch = useDispatch();


    const handleOnDlete = (id: string) => {
        dispatch(deletePostThunk({ id }));
    }
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="font-bold">Nombre</TableHead>
                    <TableHead className="font-bold">Descripcion</TableHead>
                    <TableHead className="font-bold">Acciones</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {posts.length !== 0 ?
                    posts.map((post) => (
                        <TableRow key={post.id}>
                            <TableCell className="font-medium w-30"> {post.name}</TableCell>
                            <TableCell className="w-60">{post.description}</TableCell>
                            <TableCell><Button variant={'destructive'}
                                onClick={() => handleOnDlete(post.id)}
                            >Eliminar</Button></TableCell>
                        </TableRow>
                    ))
                    :
                    (<TableRow key={'no-results'}>
                        <TableCell></TableCell>
                        <TableCell key={'no-results'} className=" w-full p-2  flex justify-center ">
                            No hay resultados para la busqueda
                        </TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                    )
                }
            </TableBody>

        </Table>
    )
}