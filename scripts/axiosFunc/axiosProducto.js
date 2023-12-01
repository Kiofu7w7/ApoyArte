const url = 'vercer-jsonapoyarte.vercel.app/productos'


/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////// CANBIAR LA URL AL MOMENTO DE QUE EL JSON ESTE EN WEB ////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////

//--------------------Obtener productos-------------------//
export const obtenerProductos = async () => {
    try {
        const response = await axios.get(url)
        return response
    } catch (error) {
        console.log(error)
    }
}

//--------------------Buscar producto-------------------//
export const buscarProducto = async (idB) => {
    try {
        const response = await axios.get(url + "/" + idB)
        return response
    } catch (error) {
        console.log(error)
    }
}

//--------------------Crear productos-------------------//
export const crearProducto = async (nombreB, precioB, imagenB, descB, catB) => {
    try {
        await axios.post(url, {
            id: crypto.randomUUID(),
            nombreProducto: nombreB,
            precio: precioB,
            imagen: imagenB,
            descripcion: descB,
            categorias: catB
        })
    } catch (error) {
        console.log(error)
    }
}

//--------------------Borrar producto-------------------//

export const borrarProducto = async (id) => {
    try {
        await axios.delete(url+"/"+id)
    } catch (error) {
        console.log(error)
    }
}

//--------------------Editar producto-------------------//

export const editarProducto = async (id,nombreB, precioB, imagenB, descB, catB) => {
    try {
        await axios.put(url+"/"+id,{
            nombreProducto: nombreB,
            precio: precioB,
            imagen: imagenB,
            descripcion: descB,
            categorias: catB
        })
    } catch (error) {
        console.log(error)
    }
}
