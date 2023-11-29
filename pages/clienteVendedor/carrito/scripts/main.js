import { buscarCarrito } from "../../../../scripts/axiosFunc/axiosCarritos.js"
import { viewCarritoProductos } from "../../../../scripts/modules/mostrarCarrito.js"
import { buscarUsuario } from "../../../../scripts/axiosFunc/axiosUsuario.js"
import { buscarProducto } from "../../../../scripts/axiosFunc/axiosProducto.js"

const idUsuario = "1" ///ESTO SE CAMBIA CUANDO SE TENGA EL LOCAL STORAGE
const prueba = await buscarCarrito(idUsuario)
console.log()

    const obtenePrecios = Object.keys(prueba.productos) //SE OBTIENEN TODAS LAS IDS DEL CARRITO
    const contenedor = document.getElementById("container")
    const nombreHtml = document.getElementById("nombreHTML")
    const contactoHtml = document.getElementById("contactoHTML")
    const direccionHtml = document.getElementById("direccionHTML")
    const totalHtml = document.getElementById("totalHTML")
    const precios = []
    const usuario = await buscarUsuario(idUsuario)
    let total = 0

    for (let i = 0; i < obtenePrecios.length; i++) {
        const productoPre = await buscarProducto(obtenePrecios[i])
        precios.push(productoPre.data.precio)
    }

    precios.forEach(element => {
        total += parseInt(element)
    });

    nombreHtml.innerText += " " + usuario.data.primerNombre + " " + usuario.data.primerApellido
    contactoHtml.innerText += " " + usuario.data.numeroContacto
    direccionHtml.innerText += " " + usuario.data.direccion
    totalHtml.innerText += " " + total

    if (prueba == "false") {
        console.log("No cuenta con carrito")
    } else {
        viewCarritoProductos(prueba, contenedor)
    }    
