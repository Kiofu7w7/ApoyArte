import { buscarCarrito } from "../../../../scripts/axiosFunc/axiosCarritos.js";
import { buscarUsuario } from "../../../scripts/axiosFunc/axiosUsuario.js";

let auth = localStorage.getItem('auth');
let datosUser = JSON.parse(localStorage.getItem('userData'));
const divLogSign = document.getElementById("noLog")
const divUser = document.getElementById("divNom")
const nombreUser = document.getElementById("nonbreUsuario")

if (!auth || !datosUser) {
    divLogSign.style.display = ""
    divUser.style.display = "none"
    console.log("no iniciado secion")
} else {
    const idUsuario = datosUser.id;
    const carrito = await buscarCarrito(idUsuario);
    let obtenerPrecios;

    if (carrito && carrito.productos) {
        obtenerPrecios = Object.keys(carrito.productos);
    } else {
        obtenerPrecios = [];
    }

    const numero = obtenerPrecios.length;
    const numeroCarrito = document.getElementById("numeroCarrito");

    if (numero !== 0) {
        numeroCarrito.style.display = "";
        numeroCarrito.innerText = numero;
    } else {
        numeroCarrito.style.display = "none";
    }

    try {
        const datosUserData = await buscarUsuario(idUsuario); //cambiar
        const prueba = datosUserData.data;
        if (prueba.tipoCuenta === "cliente") {
            console.log("cliente");
            nombreUser.innerText = datosUser.nombreUsuario
            divLogSign.style.display = "none"
            divUser.style.display = ""
        } else if (prueba.tipoCuenta === "administrador") {
            console.log("admin");
            nombreUser.innerText = datosUser.nombreUsuario
            divLogSign.style.display = "none"
            divUser.style.display = ""
        } else if (prueba.tipoCuenta === "vendedor") {
            console.log("vendedor");
            nombreUser.innerText = datosUser.nombreUsuario
            divLogSign.style.display = "none"
            divUser.style.display = ""
        }
    } catch (error) {
        // Handle the case where there is an error fetching user data
        console.error("Error fetching user data:", error);
    }
}