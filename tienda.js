const divProductos = document.getElementById("product-list");
//const botonBorar = document.getElementById("botonaprieta");
const containerPrincipal =document.getElementById("container-principal");
const containerSection =document.getElementById("sectionId");
const divProductosCarrito = document.getElementById("divProductosCarrito");
const divTotalCarrito = document.getElementById("totalCarrito");
const divTotalDeProductosEnCarrito = document.getElementById("totalDeProductosEnCarrito");
// Abrir/cerrar el modal estilo off-canvas
const openCart = document.getElementById('open-cart');
const closeCartBtn = document.getElementById('close-cart-btn');
const closeModalBg = document.getElementById('close-modal-bg');
const cartModal = document.getElementById('cart-modal');

//Modal de finalizar compra
const modal = document.getElementById("miModal");
const botonCerrar = document.getElementById("cerrarModal");
const modalBg = document.querySelector("#miModal .modal-background");

//Eventos click del modal realizar compra
[botonCerrar, modalBg].forEach(el => {
  el.addEventListener("click", () => {
      modal.classList.remove("is-active");
  });
});

//Mis datos.
const productos = {
    hombre: [
      {
        id: 1,
        title: "Camisa Oxford",
        categoria: "Hombre",
        image: "./assets/h1.jpg",
        price: 500,
        talla: ["S", "M", "L"]
      },
      {
        id: 2,
        title: "Pantalones Chinos",
        categoria: "Hombre",
        image: "./assets/h2.jpg",
        price: 600,
        talla: ["S", "M", "L", "XL"]
      },
      {
        id: 3,
        title: "Camisa italiana",
        categoria: "Hombre",
        image: "./assets/h3.jpg",
        price: 700,
        talla: ["M", "L", "XL"]
      },
      {
        id: 4,
        title: "Playera básica",
        categoria: "Hombre",
        image: "./assets/h4.jpg",
        price: 900,
        talla: ["M", "L", "XL"]
      },
      {
        id: 5,
        title: "Lentes Trench",
        categoria: "Hombre",
        image: "./assets/h5.jpg",
        price: 1200,
        talla: ["L", "XL", "XXL"]
      },
      {
        id: 6,
        title: "Pantalones Trench",
        categoria: "Hombre",
        image: "./assets/h6.jpg",
        price: 300,
        talla: ["S", "M", "L"]
      },
      {
        id: 7,
        title: "Sudadera king",
        categoria: "Hombre",
        image: "./assets/h7.jpg",
        price: 650,
        talla: ["M", "L", "XL"]
      },
      {
        id: 8,
        title: "Camisa cargo",
        categoria: "Hombre",
        image: "./assets/h8.jpg",
        price: 700,
        talla: ["S", "M", "L", "XL"]
      },
      {
        id: 9,
        title: "Gorro acolchado",
        categoria: "Hombre",
        image: "./assets/h9.jpg",
        price: 800,
        talla: ["L", "XL", "XXL"]
      },
      {
        id: 10,
        title: "Playera Slim Fit",
        categoria: "Hombre",
        image: "./assets/h10.jpg",
        price: 1000,
        talla: ["M", "L", "XL"]
      },
      {
        id: 11,
        title: "Playera deportiva",
        categoria: "Hombre",
        image: "./assets/h11.jpg",
        price: 550,
        talla: ["M", "L", "XL"]
      },
      {
        id: 12,
        title: "Pantalones de lino",
        categoria: "Hombre",
        image: "./assets/h12.jpg",
        price: 750,
        talla: ["S", "M", "L"]
      },
      {
        id: 13,
        title: "Polo de manga corta",
        categoria: "Hombre",
        image: "./assets/h13.jpg",
        price: 400,
        talla: ["S", "M", "L"]
      },
      {
        id: 14,
        title: "Camisa jacket",
        categoria: "Hombre",
        image: "./assets/h14.jpg",
        price: 950,
        talla: ["M", "L", "XL"]
      },
      {
        id: 15,
        title: "Traje black",
        categoria: "Hombre",
        image: "./assets/h15.jpg",
        price: 800,
        talla: ["S", "M", "L", "XL"]
      }
    ],
  
    mujer: [
      {
        id: 16,
        title: "Blusa de Seda",
        categoria: "Mujer",
        image: "./assets/m1.jpg",
        price: 450,
        talla: ["S", "M", "L"]
      },
      {
        id: 17,
        title: "Chaqueta Slim",
        categoria: "Mujer",
        image: "./assets/m2.jpg",
        price: 550,
        talla: ["S", "M", "L", "XL"]
      },
      {
        id: 18,
        title: "Pantalones Midi",
        categoria: "Mujer",
        image: "./assets/m3.jpg",
        price: 400,
        talla: ["M", "L", "XL"]
      },
      {
        id: 19,
        title: "Traje blue",
        categoria: "Mujer",
        image: "./assets/m4.jpg",
        price: 900,
        talla: ["S", "M", "L", "XL"]
      },
      {
        id: 20,
        title: "Falda de Noche",
        categoria: "Mujer",
        image: "./assets/m5.jpg",
        price: 1200,
        talla: ["M", "L", "XL"]
      },
      {
        id: 21,
        title: "Vestido mazaht",
        categoria: "Mujer",
        image: "./assets/m6.jpg",
        price: 300,
        talla: ["S", "M", "L"]
      },
      {
        id: 22,
        title: "Conjunto tec",
        categoria: "Mujer",
        image: "./assets/m7.jpg",
        price: 650,
        talla: ["S", "M", "L"]
      },
      {
        id: 23,
        title: "Blusa de Lino",
        categoria: "Mujer",
        image: "./assets/m8.jpg",
        price: 700,
        talla: ["S", "M", "L", "XL"]
      },
      {
        id: 24,
        title: "Botas largas black",
        categoria: "Mujer",
        image: "./assets/m9.jpg",
        price: 850,
        talla: ["M", "L", "XL"]
      },
      {
        id: 25,
        title: "Falda de Lana",
        categoria: "Mujer",
        image: "./assets/m10.jpg",
        price: 1000,
        talla: ["S", "M", "L"]
      },
      {
        id: 26,
        title: "Falda de corte Alto",
        categoria: "Mujer",
        image: "./assets/m11.jpg",
        price: 550,
        talla: ["S", "M", "L"]
      },
      {
        id: 27,
        title: "Pantalón Palazzo",
        categoria: "Mujer",
        image: "./assets/m12.jpg",
        price: 750,
        talla: ["S", "M", "L"]
      },
      {
        id: 28,
        title: "Top Corto",
        categoria: "Mujer",
        image: "./assets/m13.jpg",
        price: 400,
        talla: ["S", "M", "L"]
      },
      {
        id: 29,
        title: "Chaleco de Lana",
        categoria: "Mujer",
        image: "./assets/m14.jpg",
        price: 950,
        talla: ["M", "L", "XL"]
      },
      {
        id: 30,
        title: "Pantalones de Cuero",
        categoria: "Mujer",
        image: "./assets/m15.jpg",
        price: 800,
        talla: ["S", "M", "L", "XL"]
      }
    ]
};
const productosMap = new Map([
    [1, { id: 1, title: "Camisa Oxford", categoria: "Hombre", image: "./assets/h1.jpg", price: 500, talla: ["S", "M", "L"] }],
    [2, { id: 2, title: "Pantalones Chinos", categoria: "Hombre", image: "./assets/h2.jpg", price: 600, talla: ["S", "M", "L", "XL"] }],
    [3, { id: 3, title: "Camisa italiana", categoria: "Hombre", image: "./assets/h3.jpg", price: 700, talla: ["M", "L", "XL"] }],
    [4, { id: 4, title: "Playera básica", categoria: "Hombre", image: "./assets/h4.jpg", price: 900, talla: ["M", "L", "XL"] }],
    [5, { id: 5, title: "Lentes Trench", categoria: "Hombre", image: "./assets/h5.jpg", price: 1200, talla: ["L", "XL", "XXL"] }],
    [6, { id: 6, title: "Pantalones Trench", categoria: "Hombre", image: "./assets/h6.jpg", price: 300, talla: ["S", "M", "L"] }],
    [7, { id: 7, title: "Sudadera king", categoria: "Hombre", image: "./assets/h7.jpg", price: 650, talla: ["M", "L", "XL"] }],
    [8, { id: 8, title: "Camisa cargo", categoria: "Hombre", image: "./assets/h8.jpg", price: 700, talla: ["S", "M", "L", "XL"] }],
    [9, { id: 9, title: "Gorro acolchado", categoria: "Hombre", image: "./assets/h9.jpg", price: 800, talla: ["L", "XL", "XXL"] }],
    [10, { id: 10, title: "Playera Slim Fit", categoria: "Hombre", image: "./assets/h10.jpg", price: 1000, talla: ["M", "L", "XL"] }],
    [11, { id: 11, title: "Playera deportiva", categoria: "Hombre", image: "./assets/h11.jpg", price: 550, talla: ["M", "L", "XL"] }],
    [12, { id: 12, title: "Pantalones de lino", categoria: "Hombre", image: "./assets/h12.jpg", price: 750, talla: ["S", "M", "L"] }],
    [13, { id: 13, title: "Polo de manga corta", categoria: "Hombre", image: "./assets/h13.jpg", price: 400, talla: ["S", "M", "L"] }],
    [14, { id: 14, title: "Camisa jacket", categoria: "Hombre", image: "./assets/h14.jpg", price: 950, talla: ["M", "L", "XL"] }],
    [15, { id: 15, title: "Traje black", categoria: "Hombre", image: "./assets/h15.jpg", price: 800, talla: ["S", "M", "L", "XL"] }],
    [16, { id: 16, title: "Blusa de Seda", categoria: "Mujer", image: "./assets/m1.jpg", price: 450, talla: ["S", "M", "L"] }],
    [17, { id: 17, title: "Chaqueta Slim", categoria: "Mujer", image: "./assets/m2.jpg", price: 550, talla: ["S", "M", "L", "XL"] }],
    [18, { id: 18, title: "Pantalones Midi", categoria: "Mujer", image: "./assets/m3.jpg", price: 400, talla: ["M", "L", "XL"] }],
    [19, { id: 19, title: "Traje blue", categoria: "Mujer", image: "./assets/m4.jpg", price: 900, talla: ["S", "M", "L", "XL"] }],
    [20, { id: 20, title: "Falda de Noche", categoria: "Mujer", image: "./assets/m5.jpg", price: 1200, talla: ["M", "L", "XL"] }],
    [21, { id: 21, title: "Vestido mazaht", categoria: "Mujer", image: "./assets/m6.jpg", price: 300, talla: ["S", "M", "L"] }],
    [22, { id: 22, title: "Conjunto tec", categoria: "Mujer", image: "./assets/m7.jpg", price: 650, talla: ["S", "M", "L"] }],
    [23, { id: 23, title: "Blusa de Lino", categoria: "Mujer", image: "./assets/m8.jpg", price: 700, talla: ["S", "M", "L", "XL"] }],
    [24, { id: 24, title: "Botas largas black", categoria: "Mujer", image: "./assets/m9.jpg", price: 850, talla: ["M", "L", "XL"] }],
    [25, { id: 25, title: "Abrigo de Lana", categoria: "Mujer", image: "./assets/m10.jpg", price: 1000, talla: ["S", "M", "L"] }],
    [26, { id: 26, title: "Falda de corte Alto", categoria: "Mujer", image: "./assets/m11.jpg", price: 550, talla: ["S", "M", "L"] }],
    [27, { id: 27, title: "Pantalón Palazzo", categoria: "Mujer", image: "./assets/m12.jpg", price: 750, talla: ["S", "M", "L"] }],
    [28, { id: 28, title: "Top Corto", categoria: "Mujer", image: "./assets/m13.jpg", price: 400, talla: ["S", "M", "L"] }],
    [29, { id: 29, title: "Chaleco de Lana", categoria: "Mujer", image: "./assets/m14.jpg", price: 950, talla: ["M", "L", "XL"] }],
    [30, { id: 30, title: "Pantalones de Cuero", categoria: "Mujer", image: "./assets/m15.jpg", price: 800, talla: ["S", "M", "L", "XL"] }]
]);
const carrito = new Map();

// Navbar Burger (para menú en móviles)
document.addEventListener('DOMContentLoaded', () => {
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0 );
    if ($navbarBurgers.length > 0) {
      $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {
          const target = el.dataset.target;
          const $target = document.getElementById(target);
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
        });
      });
    }
  });
// Abrir
openCart.addEventListener('click', () => {
  cartModal.classList.add('is-active');
});
// Cerrar (botón X)
closeCartBtn.addEventListener('click', () => {
  cartModal.classList.remove('is-active');
});
// Cerrar (clic en la capa oscura)
closeModalBg.addEventListener('click', () => {
  cartModal.classList.remove('is-active');
});

//Aquí se manejan los addEventListener de tipo click.
document.body.addEventListener("click", function(event){
  event.preventDefault();
  //Apartado para manejar los botones del inicio.
  if(event.target.dataset.action === "presentar-elementos"){
      if(event.target.id==="botonHombres") {
          renderizarProductos(productos,"hombre");
      } else{
          renderizarProductos(productos,"mujer");
      }
      return;
  }
  //Apartado para manejar el boton agregar a carrito.
  if(event.target.dataset.action === "agregar-a-carrito"){
      cambiarColorBotonVerde();
      modificarCarrito(Number(event.target.dataset.id));
      return;
  }
  //Apartado para manejar los botones de agregar eliminar del carrito.
  const botonModificarElCarro = event.target.closest("[data-action='modificarCarrito']");
  if(botonModificarElCarro){
      if(botonModificarElCarro.dataset.operacion) {
          cambiarColorBotonRojo();
          modificarCarrito(Number(botonModificarElCarro.dataset.id), botonModificarElCarro.dataset.operacion);
      }else {
          cambiarColorBotonVerde();
          modificarCarrito(Number(botonModificarElCarro.dataset.id));
      }
      return;
  }
  //Apartado para manejar el boton de eliminar del carrito.
  const botonEliminarDeCarro = event.target.closest("[data-action='eliminarDeCarrito']");
  if(botonEliminarDeCarro) {
      cambiarColorBotonRojo();
      const idProducto = Number(botonEliminarDeCarro.dataset.id);
      eliminarElementoCarrito(idProducto);
      return;
  }
  //Apartado para manejar los botones de cambio de género.
  if(event.target.dataset.accion === "presentarProductosPorGenero"){
    const productoAEliminar = document.querySelector('[data-buscadorgenero]');
    if (productoAEliminar) {
        productoAEliminar.remove();
    }
    if(event.target.dataset.genero === "hombre"){
      renderizarProductos(productos, "hombre");
      renderizarProductosPorCategoria();
    }else{
      renderizarProductos(productos, "mujer");
      renderizarProductosPorCategoria();
    }
    return;
  }

  //Apartado para manejar el boton relizar compra
  if(event.target.id === "botonFinalizarCompra"){
    if(carrito.size > 0){
      finalizarCompra();

    }
  }
});

//Aquí se manejan los addEventListener de tipo input.
document.body.addEventListener("input", function(event){
  const query = event.target.value.toLowerCase();  
  const resultados = productos[event.target.dataset.buscadorgenero].filter(producto => producto.title.toLowerCase().includes(query));
  renderizarProductosConCategoriaDada(resultados);
});

function renderizarInicio(){
    renderizarCantidadEnCarrito();
    const portada = `
        <div class="columns m-0" id="portadaId">
            <div class="column is-6 column-box bg-image-1">
                <div class="overlay">
                <button class="button is-light has-background-black-transparent is-rounded has-text-white mt-3" id= "botonHombres" data-action = "presentar-elementos">Hombres</button>
                </div>
            </div>
            <!-- Segunda Columna -->
            <div class="column is-6 column-box bg-image-2">
                <div class="overlay">
                <button class="button is-light has-background-black-transparent is-rounded has-text-white mt-3" id= "botonMujeres" data-action = "presentar-elementos">Mujeres</button>
                </div>
            </div>
        </div>
    `;
    containerSection.classList.toggle("p-0");
    containerPrincipal.classList.toggle("m-0");
    containerPrincipal.insertAdjacentHTML("afterbegin", portada);
};//renderizarInicio()
renderizarInicio();

function renderizarProductos(objeto, categoria){
    containerPrincipal.removeChild(containerPrincipal.firstElementChild);
    divProductos.innerHTML="";
    containerSection.classList.toggle("p-0");
    containerPrincipal.classList.toggle("m-0");
    let menuCategorias = null;
    if(categoria === "hombre"){
      menuCategorias = `
                        <div class="tabs is-centered">
                          <ul>
                            <li class="is-active"><a data-accion="presentarProductosPorGenero" data-genero="hombre">Hombre</a></li>
                            <li><a data-accion="presentarProductosPorGenero" data-genero="mujer">Mujer</a></li>
                          </ul>
                        </div>
      `
    }else{
      menuCategorias = `
                        <div class="tabs is-centered">
                          <ul>
                            <li><a data-accion="presentarProductosPorGenero" data-genero="hombre">Hombre</a></li>
                            <li class="is-active"><a data-accion="presentarProductosPorGenero" data-genero="mujer">Mujer</a></li>
                          </ul>
                        </div>
      `
    }
    containerPrincipal.insertAdjacentHTML("afterbegin",`
        <div class="control">
          <input class="input" type="text" data-buscadorgenero=${categoria} placeholder="Buscar">
        </div>
      `);
    containerPrincipal.insertAdjacentHTML("afterbegin",menuCategorias);
    arreglo = objeto[categoria];
    arreglo.forEach(producto => {
        const tarjeta = `
                  <div class="column is-3 mb-6 mt-6"> 
                      <div class="card has-background-gray">
                          <div class="card-image">
                              <figure class="image">
                              <img src=${producto.image} alt=${producto.title}>
                              </figure>
                          </div>
                          <div class="card-content mt-0 mb-0">
                              <div class="media">
                              <div class="media-content">
                                  <p class="subtitle is-5">${producto.title}</p>
                                  <p class="subtitle is-6">${producto.categoria}</p>
                              </div>
                              </div>
                              <div class="content">
                              <p class="title is-6">MXN ${producto.price}</p>
                              </div>
                          </div>
                          <footer class="card-footer mt-0 is-flex is-justify-content-center is-align-items-center">
                              <button class="button is-light has-background-black has-text-white mt-3 agregarACarrito" data-action = "agregar-a-carrito" data-id = ${producto.id}>Agregar al carrito</button>
                          </footer>
                      </div>
                  </div>

        `
        divProductos.insertAdjacentHTML("beforeend", tarjeta);
    });
};//renderizarProductos()

function renderizarProductosConCategoriaDada(arreglo){
  divProductos.innerHTML="";
  if(arreglo.length===0){
    divProductos.insertAdjacentHTML("afterbegin", `
          <div class='sinCoincidencias is-flex is-justify-content-center is-align-items-center'> 
            <p>Sin coincidencias</p>
           </div>
      `);
  }
  arreglo.forEach(producto => {
    const tarjeta = `
              <div class="column is-3 mb-6 mt-6"> 
                  <div class="card has-background-gray">
                      <div class="card-image">
                          <figure class="image">
                          <img src=${producto.image} alt=${producto.title}>
                          </figure>
                      </div>
                      <div class="card-content mt-0 mb-0">
                          <div class="media">
                          <div class="media-content">
                              <p class="subtitle is-5">${producto.title}</p>
                              <p class="subtitle is-6">${producto.categoria}</p>
                          </div>
                          </div>
                          <div class="content">
                          <p class="title is-6">MXN ${producto.price}</p>
                          </div>
                      </div>
                      <footer class="card-footer mt-0 is-flex is-justify-content-center is-align-items-center">
                          <button class="button is-light has-background-black has-text-white mt-3 agregarACarrito" data-action = "agregar-a-carrito" data-id = ${producto.id}>Agregar al carrito</button>
                      </footer>
                  </div>
              </div>

    `
    divProductos.insertAdjacentHTML("beforeend", tarjeta);
});
};//renderizarProductosConCategoriaDada()

function renderizarProductosPorCategoria(){
  containerSection.classList.toggle("p-0");
  containerPrincipal.classList.toggle("m-0");
};//renderizarProductosPorCategoria()

function modificarCarrito(id, operacion = "suma"){
    if(operacion === "suma"){
        if (carrito.has(id)) {
            carrito.get(id).cantidadProducto += 1;
        }else {
            carrito.set(id,{ ...productosMap.get(id), "cantidadProducto": 1});
        }
    } else {
        if(carrito.get(id).cantidadProducto === 1) {
            carrito.delete(id);
        } else if(carrito.get(id).cantidadProducto > 0) {
            carrito.get(id).cantidadProducto -= 1;
        }     
    }
    renderizarCarrito();
};//modificarCarrito()

function eliminarElementoCarrito(id){
  carrito.delete(id);
  renderizarCarrito();
};//eliminarElementoCarrito()

function renderizarCantidadEnCarrito(){
    divTotalDeProductosEnCarrito.innerHTML="";
    let cantidadTotalDeProductos = 0;
    carrito.values().forEach(producto=>{
        cantidadTotalDeProductos += producto.cantidadProducto;
    });
    divTotalDeProductosEnCarrito.insertAdjacentText("afterbegin", cantidadTotalDeProductos);
};//renderizarCantidadEnCarrito()

function renderizarCarrito(){
    renderizarCantidadEnCarrito();
    divProductosCarrito.innerHTML = "";
    if(carrito.size === 0){
        divProductosCarrito.insertAdjacentHTML("beforeend",`
                 <p class="has-text-grey">Tu cesta está vacía</p>
            `);
    }else{
        carrito.values().forEach( valor => {
            let filaCarrito = ` 
                        <div class="columns">
                            <div class="column is-4">
                                <img src=${valor.image} alt=${valor.title} class ="imagen-carrito">
                            </div>
                            <div class="column is-8 is-flex is-align-items-center is-justify-content-space-between">

                                <div class="columns is-flex-direction-column">
                                    <div class="contenedor-texto-carrito"><p class ="is-size-6">${valor.title}</p></div>
                                    <p class ="is-size-6 has-text-weight-bold">MXN ${(valor.price)*(valor.cantidadProducto)}</p>
                                    <p class ="is-size-6">${valor.cantidadProducto} pz</p>
                                </div>

                                <div class="columns is-justify-content-flex-end">
                                  <div class="column is-narrow pl-0 pb-0 pt-0 pr-1">
                                    <button type="button" data-action="modificarCarrito" data-operacion="resta" data-id="${valor.id}" class="is-flex is-flex-direction-column is-align-items-center is-justify-content-center botones-carrito"><svg class="iconos" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg></button>
                                  </div>
                                  <div class="column is-narrow pl-0 pb-0 pt-0 pr-1"> 
                                    <button type="button" data-action="modificarCarrito" data-id="${valor.id}" class="is-flex is-flex-direction-column is-align-items-center is-justify-content-center botones-carrito"><svg class="iconos" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg></button>
                                  </div>
                                  <div class="column is-narrow pl-0 pb-0 pt-0 pr-1">
                                    <button type="button" data-action="eliminarDeCarrito" data-id="${valor.id}" class="is-flex is-flex-direction-column is-align-items-center is-justify-content-center botones-carrito"><svg class="iconos" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg></button>
                                  </div>
                                </div>
                            </div>
                        </div>
                        `
            divProductosCarrito.insertAdjacentHTML("beforeend", filaCarrito);
        });
    }
    renderizarTotalCarrito();
};//renderizarCarrito()

function renderizarTotalCarrito(){
    if (carrito.size > 0){
        divTotalCarrito.innerHTML = "";
        let cantidadTotalAPagar = 0;
        carrito.values().forEach( valor => {
            const cantidadTotalPorProducto = (valor.price)*(valor.cantidadProducto);
            cantidadTotalAPagar += cantidadTotalPorProducto;
        });
        divTotalCarrito.insertAdjacentHTML("beforeend", `
            
                <div class="totalCarrito-fila-precio-letras">
                    <p class="is-size-6 has-text-weight-bold">Total</p>
                    <p class="is-size-6 has-text-gray-light">IVA incluido</p>
                </div>
                <div class="totalCarrito-fila-precio-dinero">
                    <p class="is-size-6 has-text-weight-bold">MXN ${cantidadTotalAPagar}</p>
                </div>
            
        `);
    } else {
        divTotalCarrito.innerHTML="";
        divTotalCarrito.insertAdjacentHTML("afterbegin",`<p class="has-text-weight-semibold">Total: $0.00</p>`);
    }
};//renderizarTotalCarrito()

function cambiarColorBotonVerde(){
  openCart.classList.add('transition-color');
  openCart.style.backgroundColor = 'rgb(92, 244, 130)';
  setTimeout(function() {
    openCart.style.backgroundColor = 'white';
  }, 500);  
};//cambiarColorBotonVerde()

function cambiarColorBotonRojo(){
  openCart.classList.add('transition-color');
  openCart.style.backgroundColor = 'red';
  setTimeout(function() {
    openCart.style.backgroundColor = 'white';
  }, 500);  
};//cambiarColorBotonRojo()

function finalizarCompra(){
  carrito.clear();
  renderizarCarrito();
  renderizarTotalCarrito();
  closeModalBg.click();
  modal.classList.add("is-active");
};//finalizarCompra()
