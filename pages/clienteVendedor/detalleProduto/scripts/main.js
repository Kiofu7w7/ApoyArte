import{buscarProducto} from '../../../../scripts/axiosFunc/axiosProducto.js';

let fotoID = localStorage.getItem('idFoto');
let datos = await buscarProducto(fotoID);
let cuadro = datos.data

let image = document.getElementById('imagen');
let detail = document.getElementById('detalle');
let name = document.querySelector('#nombre');
let price = document.querySelector('#precio');

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