

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Button } from "./ui/button"

const invoices = [
    {
        invoice: "INV001",
        paymentStatus: "Paid",
        totalAmount: "$250.00",
        paymentMethod: "Credit Card",
    },
    {
        invoice: "INV002",
        paymentStatus: "Pending",
        totalAmount: "$150.00",
        paymentMethod: "PayPal",
    },

]
export const TableComponent = ({ posts }: { any }) => {
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
                {posts.map((post) => (
                    <TableRow key={post.id}>
                        <TableCell className="font-medium w-30">{post.name}</TableCell>
                        <TableCell className="w-60">{post.description}</TableCell>
                        <TableCell><Button variant={'destructive'}>Eliminar</Button></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}