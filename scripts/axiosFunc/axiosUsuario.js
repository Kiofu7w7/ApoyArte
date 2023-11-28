const url = 'http://localhost:3000/usuarios'

//--------------------Obtener usuarios-------------------//
const obtenerUsuarios = async () => {
    try {
        const response = await axios.get(url)
        return response
    } catch (error) {
        console.log(error)
    }
}

//--------------------Buscar Usuario-------------------//
const buscarProducto = async (idB) => {
    try {
        const response = await axios.get(url + "/" + idB)
        return response
    } catch (error) {
        console.log(error)
    }
}


//--------------------Crear usuario-------------------//
const crearProducto = async (usuarioU, emailU, contraseñaU, nombre1U, nombre2U, contactoU, direccionU, fechaNacimientoU, tipoCuentaU) => {
    try {
        await axios.post(url, {
            id: crypto.randomUUID(),
            nombreUsuario: usuarioU,
            email: emailU,
            contraseña: contraseñaU,
            primerNombre: nombre1U,
            segundoNombre: nombre2U,
            numeroContacto: contactoU,
            direccion: direccionU,
            fechaNacimiento: fechaNacimientoU,
            tipoCuenta: tipoCuentaU
        })
    } catch (error) {
        console.log(error)
    }
}

//--------------------Borrar producto-------------------//

const borrarProducto = async (idU) => {
    try {
        await axios.delete(url+"/"+idU)
    } catch (error) {
        console.log(error)
    }
}

//--------------------Editar producto-------------------//

const editarProducto = async (idU, usuarioU, emailU, contraseñaU, nombre1U, nombre2U, contactoU, direccionU, fechaNacimientoU, tipoCuentaU, carroActualU, idCarritoU) => {
    try {
        await axios.put(url+"/"+idU,{
            id: idU,
            nombreUsuario: usuarioU,
            email: emailU,
            contraseña: contraseñaU,
            primerNombre: nombre1U,
            segundoNombre: nombre2U,
            numeroContacto: contactoU,
            direccion: direccionU,
            fechaNacimiento: fechaNacimientoU,
            tipoCuenta: tipoCuentaU,
            carroActual: carroActualU,
            idCarrito: idCarritoU
        })
    } catch (error) {
        console.log(error)
    }
}

