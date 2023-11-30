import { buscarCarrito, editarCantidadProducto } from "../../../../scripts/axiosFunc/axiosCarritos.js"
import { viewCarritoProductos } from "../../../../scripts/modules/mostrarCarrito.js"
import { buscarUsuario } from "../../../../scripts/axiosFunc/axiosUsuario.js"
import { buscarProducto } from "../../../../scripts/axiosFunc/axiosProducto.js"

const idUsuario = "1" ///ESTO SE CAMBIA CUANDO SE TENGA EL LOCAL STORAGE
const prueba = await buscarCarrito(idUsuario)
console.log(prueba)
const editarDatos = prueba
const obtenePrecios = Object.keys(prueba.productos) //SE OBTIENEN TODAS LAS IDS DEL CARRITO
const contenedor = document.getElementById("container")
const nombreHtml = document.getElementById("nombreHTML")
const contactoHtml = document.getElementById("contactoHTML")
const direccionHtml = document.getElementById("direccionHTML")
const totalHtml = document.getElementById("totalHTML")
const usuario = await buscarUsuario(idUsuario)
let total = 0
const botonPSE = document.getElementById("PSE")
const botonEFECTIVO = document.getElementById("EFECTIVO")
const botonEFECTY = document.getElementById("EFECTY")


async function totales() {
    total = 0; // Reiniciar el total antes de recalcularlo
    for (let i = 0; i < obtenePrecios.length; i++) {
        const productId = obtenePrecios[i];
        const productoPre = await buscarProducto(productId);
        
        // Verificar si el producto existe en el carrito
        if (editarDatos.productos[productId]) {
            const cantidad = editarDatos.productos[productId].cantidad;
            const precio = productoPre.data.precio;
            total += cantidad * parseInt(precio);
        }
    }
    
    totalHtml.innerText = "Total a pagar: " + total;
}

await totales()

nombreHtml.innerText += " " + usuario.data.primerNombre + " " + usuario.data.primerApellido
contactoHtml.innerText += " " + usuario.data.numeroContacto
direccionHtml.innerText += " " + usuario.data.direccion

if (prueba == "false") {
    console.log("No cuenta con carrito")
} else {
    viewCarritoProductos(prueba, contenedor)
}    


document.addEventListener("click", async ({ target }) => {
    if (target.classList.contains("sumarProducto")) {
        try {
            const productId = target.id;
            if (editarDatos.productos[productId]) {
                editarDatos.productos[productId].cantidad += 1;
                editarCantidadProducto(idUsuario, editarDatos)
                await totales()
            }
        } catch (err) {
            console.log(err);
        }
    }

    if (target.classList.contains("restarProducto")) {
        try {
            const productId = target.id;
            if (editarDatos.productos[productId]) {
                editarDatos.productos[productId].cantidad -= 1;
                editarCantidadProducto(idUsuario, editarDatos)
                await totales()
            }
        } catch (err) {
            console.log(err);
        }
    }

    if (target.classList.contains("borrarProducto")) {
        try {
            const productId = target.id;
            if (editarDatos.productos[productId]) {
                delete editarDatos.productos[productId]; // Eliminar el producto del carrito
                editarCantidadProducto(idUsuario, editarDatos);
                await totales();
            }
        } catch (err) {
            console.log(err);
        }
    }
});

function manejarClic(event) {
    // Obtener todos los elementos con la clase 'boton'
    const botones = document.querySelectorAll('.boton');

    // Recorrer todos los botones y quitar la clase 'seleccionado'
    botones.forEach(boton => {
        boton.classList.remove('seleccionado');
    });

    // Agregar la clase 'seleccionado' al botón clicado
    event.target.classList.add('seleccionado');
}

botonPSE.addEventListener('click', manejarClic);
botonEFECTIVO.addEventListener('click', manejarClic);
botonEFECTY.addEventListener('click', manejarClic);