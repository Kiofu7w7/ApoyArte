import{obtenerProductos, buscarProducto} from '../../../../scripts/axiosFunc/axiosProducto.js';

let art = await obtenerProductos();
console.log(art)