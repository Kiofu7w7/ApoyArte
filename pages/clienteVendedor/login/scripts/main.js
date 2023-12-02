import { buscarUsuario } from "../../../../scripts/modules/inicioSesion.js";



async function ejecutarInicioSesion(emailEnviar, contraEnviar) {
    try {
        if (emailEnviar !== "" && contraEnviar !== "") {
            const result = await buscarUsuario(emailEnviar, contraEnviar);
            console.log(result)
            const ususa = result.user
            if (result) {
                localStorage.setItem('auth', result.success);
                localStorage.setItem('userData', JSON.stringify(ususa));
                window.location.href = "../../clienteVendedor/landing/index.html";
            } else {
                alert("Datos no coinciden con la base de datos");
            }
        } else {
            alert("Todos los campos son requeridos");
        }
    } catch (error) {
        console.error("Error al buscar el usuario:", error);
    }
}

const botonInicio = document.getElementById("inicioSesion");
const emailHTML = document.getElementById("email");
const passwordHTML = document.getElementById("password");

botonInicio.addEventListener('click', async () => {
    await ejecutarInicioSesion(emailHTML.value, passwordHTML.value);
});
