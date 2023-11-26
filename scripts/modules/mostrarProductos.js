export const viewProductos = (data, container) => {
    container.innerHTML = "";

    data?.forEach((element) => {
        const { categorias, descripcion, id, imagen, nombreProducto, precio} = element;
        container.innerHTML += `
        <div class="tarjetaProducto">
            <h2>${nombreProducto}</h2>
            <h3>ID: ${id}</h3>
            <h3>${precio}</h3>
            <img src="${imagen}">
            <h3>${descripcion}</h3>
            <h3>${categorias}</h3>
            <button id="${id}" class="editar">Editar</button>
            <button id="${id}" class="eliminar">Eliminar</button>
        </div>
        `;
    });
};
