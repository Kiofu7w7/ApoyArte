export const viewProductos = (data, container) => {
    container.innerHTML = "";

    data?.forEach((element) => {
        const { categorias, descripcion, id, imagen, nombreProducto, precio} = element;
        container.innerHTML += `
        <a>
            <div class="dibujo">
                <img src="${imagen}"/>
                <p class="nombre"><strong>${nombreProducto}</strong></p>
                <p class="precio">${precio} cop</p>
                <p class="categoria">${categorias}</p>
            </div>
        </a>`;
    });
};
