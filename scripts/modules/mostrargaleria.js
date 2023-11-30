export const viewProductos = (data, container) => {
    container.innerHTML = "";

    data?.forEach((element) => {
        const {id, imagen, nombreProducto, precio, categorias} = element;
        container.innerHTML += `
        <a href="../../../pages/clienteVendedor/detalleProduto/index.html">
            <span>
                <div style="text-align: center;">
                    <img src="${imagen}" class="tarjetaID" id="${id}" style="margin-bottom: 10px;"/>
                    <p class="nombre" style="margin-top: 10px;"><strong>${nombreProducto}</strong></p>
                    <p class="precio">$ ${precio} cop</p>
                    <p class="categoria">${categorias}</p>
                </div>
            </span>
        </a>`;
    });
};
