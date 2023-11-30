import { crearUsuario } from "../../../../scripts/axiosFunc/axiosUsuario.js"

document.querySelector('.btnGuardarReg').addEventListener('click', function(event) {
    event.preventDefault();
    crearUsuario(
        document.getElementById("usuario").value,
        document.getElementById("email").value,
        document.getElementById("contrasena").value,
        document.getElementById("nombre").value,
        document.getElementById("apellido").value,
        document.getElementById("telefono").value,
        document.getElementById("direccion").value,
        document.querySelector('#estado').value
    );
    event.target.form.submit();
});