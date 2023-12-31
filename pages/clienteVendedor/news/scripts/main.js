import{obtenerProductos} from '../../../../scripts/axiosFunc/axiosProducto.js';
import{viewProductos} from '../../../../scripts/modules/mostrargaleria.js'

let foto1 = document.getElementById('url1');
let foto2 = document.getElementById('url2');
let foto3 = document.getElementById('url3');
let foto4 = document.getElementById('url4');
let name1 = document.getElementById('nombre1');
let name2 = document.getElementById('nombre2');
let name3 = document.getElementById('nombre3');
let name4 = document.getElementById('nombre4');
let fotonews = document.getElementById('news');

document.addEventListener('DOMContentLoaded',async function(){
    let image = await obtenerProductos();
    let urls = []
    let names = []

    for (let i = 0; i < image.data.length; i++) {
        urls.push(image.data[i].imagen);
    }
    for (let i = 0; i < image.data.length; i++) {
        names.push(image.data[i].nombreProducto);
    }
    
    foto1.setAttribute('src',urls[0])
    foto2.setAttribute('src',urls[1])
    foto3.setAttribute('src',urls[5])
    foto4.setAttribute('src',urls[3])
    name1.innerText = (names[0])
    name2.innerText = (names[1])
    name3.innerText = (names[5])
    name4.innerText = (names[3])

    fotonews.setAttribute('src','https://res.cloudinary.com/dyepe4ih7/image/upload/v1701294520/ApoyArte/dqhbca6pxmapmryiigkq.png')
})

let currentSlide = 0;

  function showSlide(index) {
    const carousel = document.getElementById('carousel');
    const slideWidth = document.querySelector('.slide').clientWidth;

    if (index >= 0 && index < carousel.children.length) {
      currentSlide = index;
      carousel.style.transform = `translateX(${-currentSlide * slideWidth}px)`;
    }
  }

  function prevSlide() {
    showSlide(currentSlide - 1);
  }

  function nextSlide() {
    showSlide(currentSlide + 1);
  }