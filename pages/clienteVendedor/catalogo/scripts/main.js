import{obtenerProductos} from '../../../../scripts/axiosFunc/axiosProducto.js';
import{viewProductos} from '../../../../scripts/modules/mostrargaleria.js'

const botonAnimales = document.getElementById('Animales')

let gal = document.getElementById('galeria');
document.addEventListener('DOMContentLoaded', async () => {
    let art = await obtenerProductos();
    viewProductos(art.data, gal); // Asegúrate de que 'gal' esté definido antes de esta línea
});

document.addEventListener('DOMContentLoaded',async function(){

    document.getElementById('Todas').addEventListener('click', async () => {
        gal.innerText = ""
        let art = await obtenerProductos();
        viewProductos(art.data, gal); 
    });

    document.getElementById('Animales').addEventListener('click', async () => {
        gal.innerText = "";
        let art = await obtenerProductos();
        const productosAnimales = [];
    
        for (let i = 0; i < art.data.length; i++) {
            if (art.data[i].categorias === "Animales") {
                productosAnimales.push(art.data[i]);
            }
        }
        console.log(productosAnimales)
        viewProductos(productosAnimales, gal);
    });

    document.getElementById('Pixeles').addEventListener('click', async () => {
        gal.innerText = "";
        let art = await obtenerProductos();
        const productosPixeles = [];
    
        for (let i = 0; i < art.data.length; i++) {
            if (art.data[i].categorias === "Pixeles") {
                productosPixeles.push(art.data[i]);
            }
        }
        console.log(productosPixeles)
        viewProductos(productosPixeles, gal);
    });
    document.getElementById('Arquitectura').addEventListener('click', async () => {
        gal.innerText = "";
        let art = await obtenerProductos();
        const productosArquitectura = [];
    
        for (let i = 0; i < art.data.length; i++) {
            if (art.data[i].categorias === "Arquitectura") {
                productosArquitectura.push(art.data[i]);
            }
        }
        console.log(productosArquitectura)
        viewProductos(productosArquitectura, gal);
    });
    document.getElementById('Pintura').addEventListener('click', async () => {
        gal.innerText = "";
        let art = await obtenerProductos();
        const productosPintura = [];
    
        for (let i = 0; i < art.data.length; i++) {
            if (art.data[i].categorias === "Pintura") {
                productosPintura.push(art.data[i]);
            }
        }
        console.log(productosPintura)
        viewProductos(productosPintura, gal);
    });

    
})
