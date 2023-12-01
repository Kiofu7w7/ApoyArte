const url = 'http://localhost:3000/usuarios'

/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////// CANBIAR LA URL AL MOMENTO DE QUE EL JSON ESTE EN WEB ////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////


//--------------------Obtener usuarios-------------------//
export const obtenerUsuarios = async () => {
    try {
        const response = await axios.get(url)
        return response
    } catch (error) {
        console.log(error)
    }
}

//--------------------Buscar Usuario-------------------//
export const buscarUsuario = async (idB) => {
    try {
        const response = await axios.get(url + "/" + idB)
        return response
    } catch (error) {
        console.log(error)
    }
}


//--------------------Crear usuario-------------------//
export const crearUsuario = async (usuarioU, emailU, contraseñaU, nombre1U, apelli1, contactoU, direccionU, tipoCuentaU) => {
    try {
        await axios.post(url, {
            id: crypto.randomUUID(),
            nombreUsuario: usuarioU,
            email: emailU,
            contraseña: contraseñaU,
            primerNombre: nombre1U,
            primerApellido : apelli1,
            numeroContacto: contactoU,
            direccion: direccionU,
            tipoCuenta: tipoCuentaU,
            carroActual: false,
            idCarrito: ""
        })
    } catch (error) {
        console.log(error)
    }
}

//--------------------Borrar producto-------------------//

export const borrarUsuario = async (idU) => {
    try {
        await axios.delete(url+"/"+idU)
    } catch (error) {
        console.log(error)
    }
}

//--------------------Editar producto-------------------//

export const editarUsuario = async (idU, usuarioU, emailU, contraseñaU, nombre1U, apelli1, contactoU, direccionU, fechaNacimientoU, tipoCuentaU, carroActualU, idCarritoU) => {
    try {
        await axios.put(url+"/"+idU,{
            id: idU,
            nombreUsuario: usuarioU,
            email: emailU,
            contraseña: contraseñaU,
            primerNombre: nombre1U,
            primerApellido : apelli1,
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

