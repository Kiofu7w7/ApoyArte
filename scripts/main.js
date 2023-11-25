import { listaProductos, crearProductos, borrarProducto, editarProductos } from "./modules/infoProducto.js";
import { viewProductos } from "./modules/mostrarProductos.js";

const botonCrear = document.getElementById("crearID");
const botonBorrar = document.getElementById("borrarID");
const botonEditar = document.getElementById("editarID");
const idInput = document.getElementById("idInput");
const contenedor = document.getElementById("divListado")

var overlay = document.getElementById('popup1');

document.getElementById('openPopup').addEventListener('click', function () {
    overlay.style.visibility = 'visible';
    overlay.style.opacity = '1';
});

overlay.addEventListener('click', function (e) {
    if (e.target == overlay) {
        overlay.style.visibility = 'hidden';
        overlay.style.opacity = '0';
    }
});

//--------------------Obtener todos los productos-------------------//
//Sin parametros

document.addEventListener("DOMContentLoaded", async function () {
    const datos = await listaProductos();
    viewProductos(datos, contenedor)
})

//--------------------Crear productos-------------------//

//Parametros son nombre, precio, url imagen, descripcion, categoria (la id es automatica)

botonCrear.addEventListener("click", async () => {
    await crearProductos("prueba", 123456, "imagen.png", "descripcion prueba", "escultura");
});

//--------------------Borrar productos-------------------//

//Parametros son id

botonBorrar.addEventListener("click", async () => {
    await borrarProducto(idInput.value)
});

//--------------------Editar productos-------------------//

botonEditar.addEventListener("click", async () => {
    await editarProductos("1", "cuadro nuevo", 654321, "imagenNueva.png", "descripcion nueva", "servicio");
});

