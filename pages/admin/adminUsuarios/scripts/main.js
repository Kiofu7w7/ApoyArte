import { obtenerUsuarios, buscarUsuario, crearUsuario, borrarUsuario, editarUsuario  } from "../../../../scripts/axiosFunc/axiosUsuario.js"
import { viewUsuarios } from "../../../../scripts/modules/mostrarUsuarios.js"

//--------------------Documento, divs-------------------//
const contenedor = document.getElementById("divListado")
const botonCrear = document.getElementById("btnCrear")
const botonEditar = document.getElementById("btnConfirmEdit")
const botonConfirmarCrear = document.getElementById("btnConfirmarCrear")

//--------------------Datos-------------------//

const primerNombre = document.getElementById('primerNombreHtml');
const segundoNombre = document.getElementById('segundoNombreHtml');
const primerApellido = document.getElementById('primerApellidoHtml');
const segundoApellido = document.getElementById('segundoApellidoHtml');
const tipoCuenta = document.getElementById('tipoCuentaHtml');
const nombreUsuario = document.getElementById('nombreUsuarioHtml');
const email = document.getElementById('emailHtml');
const numeroContacto = document.getElementById('numeroContactoHtml');
const direccion = document.getElementById('direccionHtml');
const contraseña = document.getElementById('contraseñaHtml');
const fechaNacimiento = document.getElementById('fechaNacimientoHtml');
const idHTML = document.getElementById('idHtml');
const carroActual = document.getElementById('carroActualHtml');
const idCarrito = document.getElementById('idCarritoHtml');

//--------------------Obtener todos los productos-------------------//
//Sin parametros

document.addEventListener("DOMContentLoaded", async function () {
    const datos = await obtenerUsuarios();
    viewUsuarios(datos.data, contenedor)
    //viewProductos(datos.data, contenedor)
})


//--------------------Crear productos-------------------//

botonCrear.addEventListener('click', function(){
    botonCrear.innerText
})


//--------------------Crear productos-------------------//

//Parametros son nombre, precio, url imagen, descripcion, categoria (la id es automatica)

botonConfirmarCrear.addEventListener('click', async () => {
    await crearUsuario(nombreUsuario.value, email.value, contraseña.value, primerNombre.value, segundoNombre.value, primerApellido.value, segundoApellido.value, numeroContacto.value, direccion.value, fechaNacimiento.value, tipoCuenta.value)
})

//--------------------Editar y eliminar productos-------------------//

document.addEventListener("click", async ({ target }) => {
    if (target.classList.contains("editar")) {
        try {
            const user = await buscarUsuario(target.id);
            console.log(user)
            const { carroActual: carroActualE, contraseña:contraseñaE, direccion:direccionE, email:emailE, fechaNacimiento:fechaNacimientoE, id:idE, idCarrito:idCarritoE, nombreUsuario:nombreUsuarioE, numeroContacto: numeroContactoE, primerApellido:primerApellidoE, primerNombre:primerNombreE, segundoApellido:segundoApellidoE, segundoNombre:segundoNombreE, tipoCuenta:tipoCuentaE} = user.data;
            nombreUsuario.value = nombreUsuarioE;
            segundoNombre.value = segundoNombreE;
            primerApellido.value = primerApellidoE;
            segundoApellido.value = segundoApellidoE;
            tipoCuenta.value = tipoCuentaE;
            primerNombre.value = primerNombreE;
            primerApellido.value = primerApellidoE;
            numeroContacto.value = numeroContactoE;
            email.value = emailE;
            carroActual.value = carroActualE;
            contraseña.value = contraseñaE;
            direccion.value = direccionE;
            fechaNacimiento.value = fechaNacimientoE;
            idHTML.value = idE;
            idCarrito.value = idCarritoE;
            idHTML.disabled = false;
            carroActual.disabled = false;
            idCarrito.disabled = false;
            botonEditar.style.display = 'block'
            botonConfirmarCrear.style.display = 'none'
        } catch (err) {
            console.log(err);
        }
    }
    if (target.classList.contains("eliminar")) {
        try {
            await borrarUsuario(target.id)
        } catch (err) {
            console.log(err);
        }
    }
});

botonEditar.addEventListener('click', async () => {
    await editarUsuario(idHTML.value ,nombreUsuario.value, email.value, contraseña.value, primerNombre.value, segundoNombre.value, primerApellido.value, segundoApellido.value, numeroContacto.value, direccion.value, fechaNacimiento.value, tipoCuenta.value, carroActual.value, idCarrito.value)
})
