import{obtenerProductos} from '../../../../scripts/axiosFunc/axiosProducto.js';
import{viewProductos} from '../../../../scripts/modules/detallefotos.js';

let gal = document.getElementById('fotos');
document.addEventListener('DOMContentLoaded', async () => {
    let art = await obtenerProductos();
    viewProductos(art.data, gal);
});