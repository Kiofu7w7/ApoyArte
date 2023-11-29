import { buscarUsuario } from "../../../../scripts/modules/inicioSesion.js"

async function ejecutarInicioSesion(emailEnviar, contraEnviar) {
    try {
        if(emailEnviar != "" && contraEnviar != ""){
            const variable = await buscarUsuario(emailEnviar, contraEnviar);
            if (variable == true){
                window.location="../../clienteVendedor/landing/index.html ";
                
            }else{
                alert("Datos no coinciden con la base de datos");
            }
        }else{
            alert("Todos los campos son requeridos");
        }
    } catch (error) {
        console.error("Error al buscar el usuario:", error);
    }
}

const botonInicio = document.getElementById("inicioSesion")
const emailHTML = document.getElementById("email")
const passwordHTML = document.getElementById("password")

botonInicio.addEventListener('click', async ()=> {
    ejecutarInicioSesion(emailHTML.value, passwordHTML.value)
})