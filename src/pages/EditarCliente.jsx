import { obtenerCliente } from "../data/clientes"

export async function loader ({params}) {
    const cliente = await obtenerCliente(params.id)
    if(Object.values(cliente).length == 0) {
        throw new Response('', {
            status: 404,
            statusText: 'No existe el cliente'
        })
    }

    return cliente
}

const EditarCliente = () => {
    return (
        <div>
    
        </div>
    )
}

export default EditarCliente
