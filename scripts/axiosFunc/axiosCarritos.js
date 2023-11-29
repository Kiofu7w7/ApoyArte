const url = 'http://localhost:3000/'

//--------------------Obtener carrito-------------------//
export const buscarCarrito = async (idUsu) => {
    try {
        const responseUsuario = await axios.get(url + "usuarios/" + idUsu)
        if(responseUsuario.data.carroActual == "true"){
            const responseCarrito = await axios.get(url + "carritos/" + (responseUsuario.data.idCarrito))
            return responseCarrito.data
        }else{
            return "false"
        }
    } catch (error) {
        console.log(error)
    }
}

export const crearCarrito = async (idUsu) => {
    
}