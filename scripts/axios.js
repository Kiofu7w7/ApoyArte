const url = 'http://localhost:3000/productos'

//--------------------Obtener productos-------------------//
const obtenerProductos = async () => {
    try {
        const response = await axios.get(url)
        return response
    } catch (error) {
        console.log(error)
    }
}

//--------------------Buscar producto-------------------//
const buscarProducto = async (idB) => {
    try {
        const response = await axios.get(url + "/" + idB)
        return response
    } catch (error) {
        console.log(error)
    }
}

//--------------------Crear productos-------------------//
const crearProducto = async (nombreB, precioB, imagenB, descB, catB) => {
    try {
        await axios.post(url, {
            id: crypto.randomUUID(),
            nombreProducto: nombreB,
            precio: precioB,
            imagen: imagenB,
            descripcion: descB,
            categoria: catB
        })
    } catch (error) {
        console.log(error)
    }
}

//--------------------Borrar producto-------------------//

const borrarProducto = async (id) => {
    try {
        await axios.delete(url+"/"+id)
    } catch (error) {
        console.log(error)
    }
}

//--------------------Editar producto-------------------//

const editarProducto = async (id,nombreB, precioB, imagenB, descB, catB) => {
    try {
        await axios.put(url+"/"+id,{
            id: id,
            nombreProducto: nombreB,
            precio: precioB,
            imagen: imagenB,
            descripcion: descB,
            categoria: catB
        })
    } catch (error) {
        console.log(error)
    }
}

obtenerProductos()