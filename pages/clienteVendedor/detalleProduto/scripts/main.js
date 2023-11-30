import{obtenerProductos} from '../../../../scripts/axiosFunc/axiosProducto.js';

let gal = document.getElementById('galeria');
document.addEventListener('DOMContentLoaded', async () => {
    let art = await obtenerProductos();
    viewProductos(art.data, gal); // Asegúrate de que 'gal' esté definido antes de esta línea
});