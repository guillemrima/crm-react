
export async function obtenerClientes() {
    const response = await fetch(import.meta.env.VITE_API_URL)
    const result = await response.json()

    return result
}