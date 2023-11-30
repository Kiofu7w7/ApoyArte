import{obtenerProductos} from '../../../../scripts/axiosFunc/axiosProducto.js';
import{viewProductos} from '../../../../scripts/modules/detallegaleria.js';

let gal = document.getElementById('fotos');
let ids = []
document.addEventListener('DOMContentLoaded', async () => {
    let art = await obtenerProductos();
    viewProductos(art.data, gal);
    for (let i = 0; i < art.data.lenght; i++) {
        ids.push(art.data[i].id);
        console.log(art.data[i].id)
        console.log(ids)
    }
    console.log(art.data.id)
    console.log(ids);
});