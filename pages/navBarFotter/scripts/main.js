import { buscarCarrito } from "../../../../scripts/axiosFunc/axiosCarritos.js"
import { buscarUsuario } from "../../../scripts/axiosFunc/axiosUsuario.js"

let auth = localStorage.getItem('auth');
let datosUser = localStorage.getItem('userData');

const idUsuario = datosUser
const carrito = await buscarCarrito(idUsuario)
let obtenePrecios;
if (carrito && carrito.productos) {
    obtenePrecios = Object.keys(carrito.productos);
} else {
    obtenePrecios = []; // o cualquier valor por defecto que quieras asignar
}
const numero = obtenePrecios.length
const numeroCarrito = document.getElementById("numeroCarrito")

if(numero!=0){
    numeroCarrito.style.display = ""
    numeroCarrito.innerText = numero
}else{
    numeroCarrito.style.display = "none"
}


const datosUserData = await buscarUsuario(datosUser)
const prueba = datosUserData.data

if (prueba.tipoCuenta == "cliente") {
    console.log("cliente")
}else if (prueba.tipoCuenta == "administrador"){
    console.log("admin")
}else if(prueba.tipoCuenta == "vendedor"){
    console.log("venderdor")
}