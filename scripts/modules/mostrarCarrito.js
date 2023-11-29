import { buscarProducto } from "../axiosFunc/axiosProducto.js";

export const viewCarritoProductos = async (data, container) => {
    container.innerHTML = "";
    const productosIds = Object.keys(data.productos);

    for (const productoId of productosIds) {
        const producto = data.productos[productoId];
        const nombre = producto.nombre;
        const cantidad = producto.cantidad;
        const productoInfo = await buscarProducto(productoId);
        container.innerHTML += `
        <div class="tarjetaCarritoProducto">
            <img src="${productoInfo.data.imagen}">
            <div>
                <h2>${productoInfo.data.nombreProducto}</h2>
                <h3>$ ${productoInfo.data.precio}</h3>
                <div class="cantidades">
                    <span class="material-symbols-outlined">add</span>
                    <p>${cantidad}</p>
                    <span class="material-symbols-outlined">remove</span>
                    <span class="material-symbols-outlined">delete</span>
                </div>
            </div>
        </div>
        `;
    }
};
