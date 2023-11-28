/*import { get } from "./API/get.js";
import { POST } from "./API/post.js";
import { DELETE } from "./API/delete.js";
import { EDIT } from "./API/patch.js";

const url = "http://localhost:3000"

export const listaProductos = async () =>{
    try {
        const datos = await get(url + "/productos");
        return datos
    }
    catch (error) {
        console.log(error)
    }
}


const ProductoUrl = "http://localhost:3000/productos"

export const buscarProductos = async (id) =>{
    try {
        const datos = await get(ProductoUrl + "/" + id );
        return datos
    }
    catch (error) {
        console.log(error)
    }
}

export const crearProductos = async (nombre, precio, imagen, descripcion, categorias) =>{

    const datos = {
        id: crypto.randomUUID(),
        nombreProducto: nombre,
        precio: precio,
        imagen: imagen,
        descripcion: descripcion,
        categorias: categorias
    }

    try {
        await POST(datos, ProductoUrl)
    } catch (error) {
        console.log(error)
    }
}

export const borrarProducto = async(idb) =>{
    try {
        const urlBorrar = (ProductoUrl+"/"+idb)
        await DELETE(urlBorrar)
    }
    catch (error){
        console.log(error)
    }
}

export const editarProductos = async (idE,nombre, precio, imagen, descripcion, categorias) =>{

    const datos = {
        id: idE,
        nombreProducto: nombre,
        precio: precio,
        imagen: imagen,
        descripcion: descripcion,
        categorias: categorias
    }

    try {
        const urlEditar = (ProductoUrl+"/"+idE)
        await EDIT(datos, urlEditar)
    } catch (error) {
        console.log(error)
    }
}*/