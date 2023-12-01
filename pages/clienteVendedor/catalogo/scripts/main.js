import { obtenerProductos } from "../../../../scripts/axiosFunc/axiosProducto.js";
import { viewProductos } from "../../../../scripts/modules/mostrargaleria.js";

let gal = document.getElementById("galeria");
document.addEventListener("DOMContentLoaded", async () => {
  let art = await obtenerProductos();
  viewProductos(art.data, gal);
});

document.addEventListener("click", ({ target }) => {
  if (target.classList.contains("tarjetaID")) {
    try {
      localStorage.setItem("idFoto", target.id);
    } catch (err) {
      console.log(err);
    }
  }
});
document.addEventListener("DOMContentLoaded", async function () {
    document.getElementById("Todas").addEventListener("click", async () => {
        gal.innerText = "";
        let art = await obtenerProductos();
        viewProductos(art.data, gal);
    });
    document.getElementById("Gratis").addEventListener("click", async() => {
        gal.innerText = "";
        let art = await obtenerProductos();
        const productosGratis = [];
        for (let i = 0; i < art.data.length; i++) {
            if (art.data[i].precio === 0) {
                productosGratis.push(art.data[i]);
            }            
        }
        viewProductos(productosGratis, gal);
    });
    document.getElementById("Barato").addEventListener("click", async() => {
        gal.innerText = "";
        let art = await obtenerProductos();
        const productosBarato = [];

        for (let i = 0; i < art.data.length; i++) {
            if (art.data[i].precio >= 1 && art.data[i].precio <= 100000) {
                productosBarato.push(art.data[i]);
            }
        }
        viewProductos(productosBarato, gal);
    });
    document.getElementById("Caro").addEventListener("click", async() => {
        gal.innerText = "";
        let art = await obtenerProductos();
        const productosCaro = [];

        for (let i = 0; i < art.data.length; i++) {
            if (art.data[i].precio > 100000) {
                productosCaro.push(art.data[i]);
            }
            
        }
        viewProductos(productosCaro, gal);
    });
});

document.addEventListener("DOMContentLoaded", async function () {
  document.getElementById("Todas").addEventListener("click", async () => {
    gal.innerText = "";
    let art = await obtenerProductos();
    viewProductos(art.data, gal);
  });

  document.getElementById("Animales").addEventListener("click", async () => {
    gal.innerText = "";
    let art = await obtenerProductos();
    const productosAnimales = [];

    for (let i = 0; i < art.data.length; i++) {
      if (art.data[i].categorias === "Animales") {
        productosAnimales.push(art.data[i]);
      }
    }
    console.log(productosAnimales);
    viewProductos(productosAnimales, gal);
  });

  document.getElementById("Pixeles").addEventListener("click", async () => {
    gal.innerText = "";
    let art = await obtenerProductos();
    const productosPixeles = [];

    for (let i = 0; i < art.data.length; i++) {
      if (art.data[i].categorias === "Pixeles") {
        productosPixeles.push(art.data[i]);
      }
    }
    console.log(productosPixeles);
    viewProductos(productosPixeles, gal);
  });
  document
    .getElementById("Arquitectura")
    .addEventListener("click", async () => {
      gal.innerText = "";
      let art = await obtenerProductos();
      const productosArquitectura = [];

      for (let i = 0; i < art.data.length; i++) {
        if (art.data[i].categorias === "Arquitectura") {
          productosArquitectura.push(art.data[i]);
        }
      }
      console.log(productosArquitectura);
      viewProductos(productosArquitectura, gal);
    });
  document.getElementById("Pintura").addEventListener("click", async () => {
    gal.innerText = "";
    let art = await obtenerProductos();
    const productosPintura = [];

    for (let i = 0; i < art.data.length; i++) {
      if (art.data[i].categorias === "Pintura") {
        productosPintura.push(art.data[i]);
      }
    }
    console.log(productosPintura);
    viewProductos(productosPintura, gal);
  });
});
