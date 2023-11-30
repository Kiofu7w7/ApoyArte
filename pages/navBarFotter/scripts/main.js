import { buscarCarrito } from "../../../../scripts/axiosFunc/axiosCarritos.js"

const idUsuario = "1" ///ESTO SE CAMBIA CUANDO SE TENGA EL LOCAL STORAGE
const carrito = await buscarCarrito(idUsuario)
const obtenePrecios = Object.keys(carrito.productos)
const numero = obtenePrecios.length
const numeroCarrito = document.getElementById("numeroCarrito")

if(numero!=0){
    numeroCarrito.style.display = ""
    numeroCarrito.innerText = numero
}else{
    numeroCarrito.style.display = "none"
}
