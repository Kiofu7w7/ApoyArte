export const viewProductos = (data, container) => {
    container.innerHTML = "";

    data?.forEach((element) => {
        console.log(element);
        const { categorias, descripcion, id, imagen, nombreProducto, precio} = element;

        console.log(categorias, descripcion, id, imagen, nombreProducto, precio)

        container.innerHTML += `
        <div class="tarjetaProducto">
            <h2>${nombreProducto}</h2>
            <h3>ID: ${id}</h3>
            <h3>${precio}</h3>
            <img src="${imagen}">
            <h3>${descripcion}</h3>
            <h3>${categorias}</h3>
            <button id="btnEditarProducto">Editar</button>
            <button>Eliminar</button>
        </div>
        `;
    });
};
