import { listaProductos, crearProductos, borrarProducto, editarProductos, buscarProductos } from "./modules/infoProducto.js";
import { viewProductos } from "./modules/mostrarProductos.js";

//--------------------Documento, divs-------------------//
const contenedor = document.getElementById("divListado")

//--------------------Datos crear-------------------//

const botonCrear = document.getElementById("crearID");
const nombreCrear = document.getElementById("inputNombre")
const precioCrear = document.getElementById("inputPrecio")
const imagenCrear = document.getElementById("inputImagen")
const descripcionCrear = document.getElementById("inputDescripcion")
const categoriaCrear = document.getElementById("inputCategoria")

//--------------------Datos editar-------------------//

const botonEditar = document.getElementById("editarID")
const idEditar = document.getElementById("inputIDE")
const nombreEditar = document.getElementById("inputNombreE")
const precioEditar = document.getElementById("inputPrecioE")
const imagenEditar = document.getElementById("inputImagenE")
const descripcionEditar = document.getElementById("inputDescripcionE")
const categoriaEditar = document.getElementById("inputCategoriaE")


//--------------------Overlays popus-------------------//
var overlay1 = document.getElementById('popup1');
var overlay2 = document.getElementById('popup2');


//--------------------Popups-------------------//

document.getElementById('openPopup').addEventListener('click', function () {
    overlay1.style.visibility = 'visible';
    overlay1.style.opacity = '1';
});

overlay1.addEventListener('click', function (e) {
    if (e.target == overlay1) {
        overlay1.style.visibility = 'hidden';
        overlay1.style.opacity = '0';
    }
});

overlay2.addEventListener('click', function (e) {
    if (e.target == overlay2) {
        overlay2.style.visibility = 'hidden';
        overlay2.style.opacity = '0';
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

botonCrear.addEventListener('click', async () => {
    await crearProductos(nombreCrear.value, parseInt(precioCrear.value), imagenCrear.value, descripcionCrear.value, categoriaCrear.value)
})

//--------------------Editar y eliminar productos-------------------//

document.addEventListener("click", async ({ target }) => {
    if (target.classList.contains("editar")) {
        try {
            const user = await buscarProductos(target.id);
            const { categorias: cat, descripcion: desc, id: idp, imagen: url, nombreProducto: nombre, precio: prec} = user;
            idEditar.value = idp;
            nombreEditar.value = nombre;
            precioEditar.value = prec;
            imagenEditar.value = url;
            descripcionEditar.value = desc;
            categoriaEditar.value = cat;
            overlay2.style.visibility = 'visible';
            overlay2.style.opacity = '1';
        } catch (err) {
            console.log(err);
        }
    }
    if (target.classList.contains("eliminar")) {
        try {
            await borrarProducto(target.id)
        } catch (err) {
            console.log(err);
        }
    }
});

botonEditar.addEventListener('click', async () => {
    await editarProductos(parseInt(idEditar.value), nombreEditar.value, parseInt(precioEditar.value), imagenEditar.value, descripcionEditar.value, categoriaEditar.value)
})
