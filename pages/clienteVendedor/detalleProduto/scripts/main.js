import{buscarProducto} from '../../../../scripts/axiosFunc/axiosProducto.js';
import { buscarUsuario, editarUsuario } from '../../../../scripts/axiosFunc/axiosUsuario.js';
import { crearProducto , agregarProductoAlCarrito} from '../../../../scripts/axiosFunc/axiosCarritos.js'

let datosUser = JSON.parse(localStorage.getItem('userData'));
const idUsuario = datosUser.id


let fotoID = localStorage.getItem('idFoto');
let datos = await buscarProducto(fotoID);
let cuadro = datos.data

let image = document.getElementById('imagen');
let detail = document.getElementById('detalle');
let name = document.querySelector('#nombre');
let price = document.querySelector('#precio');
const botonAgregar = document.getElementById("add")

image.setAttribute('src', cuadro.imagen);
detail.innerText = cuadro.descripcion;
name.innerText = cuadro.nombreProducto;
price.innerText = '$' + cuadro.precio + ' cop';

document.querySelector("#back").addEventListener("click", function () {
    enviar();
});
function enviar() {
window.location.href = "../../../../pages/clienteVendedor/catalogo/index.html";
}

botonAgregar.addEventListener('click', async function() {
    try {
        const datosUsu = await buscarUsuario(idUsuario);

        let idCarritoNuevo = crypto.randomUUID()
        if (datosUsu.data.carroActual === false) {
            await editarUsuario(
                datosUsu.data.id,
                datosUsu.data.nombreUsuario,
                datosUsu.data.email,
                datosUsu.data.contraseña,
                datosUsu.data.primerNombre,
                datosUsu.data.primerApellido,
                datosUsu.data.numeroContacto,
                datosUsu.data.direccion,
                datosUsu.data.fechaNacimiento,
                datosUsu.data.tipoCuenta,
                true, 
                idCarritoNuevo
            );

            crearProducto(idCarritoNuevo, fotoID, cuadro.nombreProducto)
            console.log('El valor de carroActual ha sido cambiado a true');
        } else {
            console.log('El valor de carroActual ya es true');
            const nuevoProducto = {
                id: fotoID,
                nombre: cuadro.nombreProducto,
            };
            await agregarProductoAlCarrito(datosUsu.data.idCarrito, nuevoProducto);
        }
    } catch (error) {
        console.error(error);
    }
});