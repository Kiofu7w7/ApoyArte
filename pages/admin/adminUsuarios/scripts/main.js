import { obtenerUsuarios, buscarUsuario, crearUsuario, borrarUsuario, editarUsuario  } from "../../../../scripts/axiosFunc/axiosUsuario.js"
import { viewUsuarios } from "../../../../scripts/modules/mostrarUsuarios.js"

//--------------------Documento, divs-------------------//
const contenedor = document.getElementById("divListado")
const botonCrear = document.getElementById("btnCrear")
const botonEditar = document.getElementById("btnConfirmEdit")
const botonConfirmarCrear = document.getElementById("btnConfirmarCrear")

//--------------------Datos-------------------//

const primerNombre = document.getElementById('primerNombreHtml');
const primerApellido = document.getElementById('primerApellidoHtml');
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
    nombreUsuario.value = "";
    primerApellido.value = "";
    tipoCuenta.value = "cliente";
    primerNombre.value = "";
    primerApellido.value = "";
    numeroContacto.value = "";
    email.value = "";
    carroActual.value = "";
    contraseña.value = "";
    direccion.value = "";
    fechaNacimiento.value = "";
    idHTML.value = "";
    idCarrito.value = "";
    carroActual.disabled = true;
    idCarrito.disabled = true;
    botonEditar.style.display = 'none'
    botonConfirmarCrear.style.display = 'block'
})


//--------------------Crear productos-------------------//

//Parametros son nombre, precio, url imagen, descripcion, categoria (la id es automatica)

botonConfirmarCrear.addEventListener('click', async () => {
    await crearUsuario(nombreUsuario.value, email.value, contraseña.value, primerNombre.value, primerApellido.value, numeroContacto.value, direccion.value, fechaNacimiento.value, tipoCuenta.value)
})

//--------------------Editar y eliminar productos-------------------//

document.addEventListener("click", async ({ target }) => {
    if (target.classList.contains("editar")) {
        try {
            const user = await buscarUsuario(target.id);
            const { carroActual: carroActualE, contraseña:contraseñaE, direccion:direccionE, email:emailE, fechaNacimiento:fechaNacimientoE, id:idE, idCarrito:idCarritoE, nombreUsuario:nombreUsuarioE, numeroContacto: numeroContactoE, primerApellido:primerApellidoE, primerNombre:primerNombreE,tipoCuenta:tipoCuentaE} = user.data;
            nombreUsuario.value = nombreUsuarioE;
            primerApellido.value = primerApellidoE;
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
    await editarUsuario(idHTML.value ,nombreUsuario.value, email.value, contraseña.value, primerNombre.value, primerApellido.value, numeroContacto.value, direccion.value, fechaNacimiento.value, tipoCuenta.value, carroActual.value, idCarrito.value)
})
