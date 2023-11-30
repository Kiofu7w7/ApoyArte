export const viewProductos = (data, container) => {
    container.innerHTML = "";

    data?.forEach((element) => {
        const {id, descripcion, imagen, nombreProducto, precio} = element;
        container.innerHTML += `
        <a class="tarjetaID" id="${id}">
            <div class="tarjetaProducto">
                <img src="${imagen}">
                <h2>${nombreProducto}</h2>
            </div>
            <div class="tarjetaProducto">
                <h3>$ ${precio} cop</h3>
                <h3>${descripcion}</h3>
            </div>
        </a>
        `;
    });
};
