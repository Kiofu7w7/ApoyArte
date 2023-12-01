const url = 'http://localhost:3000/'

/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////// CANBIAR LA URL AL MOMENTO DE QUE EL JSON ESTE EN WEB ////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////


//--------------------Obtener carrito-------------------//
export const buscarCarrito = async (idUsu) => {
    try {
        const responseUsuario = await axios.get(url + "usuarios/" + idUsu);
        if (responseUsuario.data.carroActual == true) {
            const responseCarrito = await axios.get(url + "carritos/" + (responseUsuario.data.idCarrito))
            return responseCarrito.data
        } else {
            return "false"
        }
    } catch (error) {
        console.log(error)
    }
}

//--------------------Editar carrito-------------------//

export const editarCantidadProducto = async (idUsu, datos) => {
    try {
        const responseUsuario = await axios.get(url + "usuarios/" + idUsu)
        const idCarroActual = responseUsuario.data.idCarrito
        await axios.put(url + "carritos/" + idCarroActual, datos)
    } catch (error) {
        console.log(error);
    }
};

//--------------------Crear carrito-------------------//

export const crearProducto = async (idCarrito, prodctID, nombreProducto) => {
    try {
        await axios.post(url + "carritos", {
            id: idCarrito,
            activo: true,
            productos: {
                [prodctID]: {
                    "cantidad": 1,
                    "nombre": nombreProducto
                }
            }
        });
    } catch (error) {
        console.log(error);
    }
};

//--------------------Agregar al carrito carrito-------------------//

export const agregarProductoAlCarrito = async (idCarrito, nuevoProducto) => {
    try {
        const responseCarrito = await axios.get(url + "carritos/" + idCarrito);
        const productosEnCarrito = responseCarrito.data.productos;

        // Verificar si el producto ya está en el carrito
        if (productosEnCarrito[nuevoProducto.id]) {
            // Sumar 1 a la cantidad si el producto ya existe
            productosEnCarrito[nuevoProducto.id].cantidad += 1;
        } else {
            // Agregar el nuevo producto al carrito con cantidad 1
            productosEnCarrito[nuevoProducto.id] = {
                cantidad: 1,
                nombre: nuevoProducto.nombre,
            };
        }

        // Actualizar el carrito con los nuevos datos
        await axios.put(url + "carritos/" + idCarrito, {
            productos: productosEnCarrito,
        });

        console.log('Producto agregado al carrito exitosamente.');
    } catch (error) {
        console.error(error);
    }
};