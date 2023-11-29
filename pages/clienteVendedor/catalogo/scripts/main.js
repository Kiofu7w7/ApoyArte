import{obtenerProductos} from '../../../../scripts/axiosFunc/axiosProducto.js';
import{viewProductos} from '../../../../scripts/modules/mostrargaleria.js'

let gal = document.getElementById('galeria');

document.addEventListener('DOMContentLoaded',async function(){
    let art = await obtenerProductos();

    viewProductos(art.data,gal);
})

