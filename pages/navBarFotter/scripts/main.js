import { buscarCarrito } from "../../../../scripts/axiosFunc/axiosCarritos.js";
import { buscarUsuario } from "../../../scripts/axiosFunc/axiosUsuario.js";

let auth = localStorage.getItem('auth');
let datosUser = JSON.parse(localStorage.getItem('userData'));


if (!auth || !datosUser) {
    // Handle the case where either auth or userData is missing
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
        const datosUserData = await buscarUsuario("1");
        const prueba = datosUserData.data;

        if (prueba.tipoCuenta === "cliente") {
            console.log("cliente");
        } else if (prueba.tipoCuenta === "administrador") {
            console.log("admin");
        } else if (prueba.tipoCuenta === "vendedor") {
            console.log("vendedor");
        }
    } catch (error) {
        // Handle the case where there is an error fetching user data
        console.error("Error fetching user data:", error);
    }
}