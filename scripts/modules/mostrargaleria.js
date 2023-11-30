export const viewProductos = (data, container) => {
    container.innerHTML = "";

    data?.forEach((element) => {
        const {imagen, nombreProducto, precio, categorias} = element;
        container.innerHTML += `
        <a>
            <div class="dibujo" style="text-align: center;">
                <a><img src="${imagen}" style="margin-bottom: 10px;"/></a>
                <p class="nombre" style="margin-top: 10px;"><strong>${nombreProducto}</strong></p>
                <p class="precio">$ ${precio} cop</p>
                <p class="categoria">${categorias}</p>
            </div>
        </a>`;
    });
};
