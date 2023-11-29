export const viewUsuarios = (data, container) => {
    container.innerHTML = "";

    data?.forEach((element) => {
        const { carroActual, contraseña, direccion, email, fechaNacimiento, id, idCarrito, nombreUsuario, numeroContacto, primerApellido, primerNombre, segundoApellido, segundoNombre, tipoCuenta} = element;
        container.innerHTML += `
        <div class="tarjetaProducto">
            <h2>${primerNombre} ${segundoNombre}</h2>
            <h3>${primerApellido} ${segundoApellido}</h3>
            <h3>Tipo de cuenta: ${tipoCuenta}</h3>
            <h3>Usuario: ${nombreUsuario}</h3>
            <h3>Email: ${email}</h3>
            <h3>Contacto: ${numeroContacto}</h3>
            <p>Dierrecion: ${direccion}</p>
            <p>Contraseña: ${contraseña}</p>
            <p>Fecha de nacimiento: ${fechaNacimiento}</p>
            <p>ID: ${id}</p>
            <p>Carrito actual: ${carroActual}</p>
            <p>ID carrito: ${idCarrito}</p>
            <button id="${id}" class="editar">Editar</button>
            <button id="${id}" class="eliminar">Eliminar</button>
        </div>
        `;
    });
};
