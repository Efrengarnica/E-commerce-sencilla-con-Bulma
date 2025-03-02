const divProductos = document.getElementById("product-list");
const botonBorar = document.getElementById("botonaprieta");
const containerPrincipal =document.getElementById("container-principal");
const containerSection =document.getElementById("sectionId");
const divProductosCarrito = document.getElementById("divProductosCarrito");
const divTotalCarrito = document.getElementById("totalCarrito");

const divTotalDeProductosEnCarrito = document.getElementById("totalDeProductosEnCarrito");


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
        title: "Suéter de cuello alto",
        categoria: "Hombre",
        image: "./assets/h3.jpg",
        price: 700,
        talla: ["M", "L", "XL"]
      },
      {
        id: 4,
        title: "Chaqueta de mezclilla",
        categoria: "Hombre",
        image: "./assets/h4.jpg",
        price: 900,
        talla: ["M", "L", "XL"]
      },
      {
        id: 5,
        title: "Abrigo Trench",
        categoria: "Hombre",
        image: "./assets/h5.jpg",
        price: 1200,
        talla: ["L", "XL", "XXL"]
      },
      {
        id: 6,
        title: "Camiseta básica",
        categoria: "Hombre",
        image: "./assets/h6.jpg",
        price: 300,
        talla: ["S", "M", "L"]
      },
      {
        id: 7,
        title: "Sudadera con capucha",
        categoria: "Hombre",
        image: "./assets/h7.jpg",
        price: 650,
        talla: ["M", "L", "XL"]
      },
      {
        id: 8,
        title: "Pantalones cargo",
        categoria: "Hombre",
        image: "./assets/h8.jpg",
        price: 700,
        talla: ["S", "M", "L", "XL"]
      },
      {
        id: 9,
        title: "Chaleco acolchado",
        categoria: "Hombre",
        image: "./assets/h9.jpg",
        price: 800,
        talla: ["L", "XL", "XXL"]
      },
      {
        id: 10,
        title: "Blazer Slim Fit",
        categoria: "Hombre",
        image: "./assets/h10.jpg",
        price: 1000,
        talla: ["M", "L", "XL"]
      },
      {
        id: 11,
        title: "Buzo deportivo",
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
        title: "Bomber jacket",
        categoria: "Hombre",
        image: "./assets/h14.jpg",
        price: 950,
        talla: ["M", "L", "XL"]
      },
      {
        id: 15,
        title: "Jeans rotos",
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
        title: "Pantalones Slim",
        categoria: "Mujer",
        image: "./assets/m2.jpg",
        price: 550,
        talla: ["S", "M", "L", "XL"]
      },
      {
        id: 18,
        title: "Falda Midi",
        categoria: "Mujer",
        image: "./assets/m3.jpg",
        price: 400,
        talla: ["M", "L", "XL"]
      },
      {
        id: 19,
        title: "Chaqueta de Cuero",
        categoria: "Mujer",
        image: "./assets/m4.jpg",
        price: 900,
        talla: ["S", "M", "L", "XL"]
      },
      {
        id: 20,
        title: "Vestido de Noche",
        categoria: "Mujer",
        image: "./assets/m5.jpg",
        price: 1200,
        talla: ["M", "L", "XL"]
      },
      {
        id: 21,
        title: "Camiseta Básica",
        categoria: "Mujer",
        image: "./assets/m6.jpg",
        price: 300,
        talla: ["S", "M", "L"]
      },
      {
        id: 22,
        title: "Sudadera con Estampado",
        categoria: "Mujer",
        image: "./assets/m7.jpg",
        price: 650,
        talla: ["S", "M", "L"]
      },
      {
        id: 23,
        title: "Pantalones de Lino",
        categoria: "Mujer",
        image: "./assets/m8.jpg",
        price: 700,
        talla: ["S", "M", "L", "XL"]
      },
      {
        id: 24,
        title: "Blazer de Corte Largo",
        categoria: "Mujer",
        image: "./assets/m9.jpg",
        price: 850,
        talla: ["M", "L", "XL"]
      },
      {
        id: 25,
        title: "Abrigo de Lana",
        categoria: "Mujer",
        image: "./assets/m10.jpg",
        price: 1000,
        talla: ["S", "M", "L"]
      },
      {
        id: 26,
        title: "Jeans de Corte Alto",
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
    [3, { id: 3, title: "Suéter de cuello alto", categoria: "Hombre", image: "./assets/h3.jpg", price: 700, talla: ["M", "L", "XL"] }],
    [4, { id: 4, title: "Chaqueta de mezclilla", categoria: "Hombre", image: "./assets/h4.jpg", price: 900, talla: ["M", "L", "XL"] }],
    [5, { id: 5, title: "Abrigo Trench", categoria: "Hombre", image: "./assets/h5.jpg", price: 1200, talla: ["L", "XL", "XXL"] }],
    [6, { id: 6, title: "Camiseta básica", categoria: "Hombre", image: "./assets/h6.jpg", price: 300, talla: ["S", "M", "L"] }],
    [7, { id: 7, title: "Sudadera con capucha", categoria: "Hombre", image: "./assets/h7.jpg", price: 650, talla: ["M", "L", "XL"] }],
    [8, { id: 8, title: "Pantalones cargo", categoria: "Hombre", image: "./assets/h8.jpg", price: 700, talla: ["S", "M", "L", "XL"] }],
    [9, { id: 9, title: "Chaleco acolchado", categoria: "Hombre", image: "./assets/h9.jpg", price: 800, talla: ["L", "XL", "XXL"] }],
    [10, { id: 10, title: "Blazer Slim Fit", categoria: "Hombre", image: "./assets/h10.jpg", price: 1000, talla: ["M", "L", "XL"] }],
    [11, { id: 11, title: "Buzo deportivo", categoria: "Hombre", image: "./assets/h11.jpg", price: 550, talla: ["M", "L", "XL"] }],
    [12, { id: 12, title: "Pantalones de lino", categoria: "Hombre", image: "./assets/h12.jpg", price: 750, talla: ["S", "M", "L"] }],
    [13, { id: 13, title: "Polo de manga corta", categoria: "Hombre", image: "./assets/h13.jpg", price: 400, talla: ["S", "M", "L"] }],
    [14, { id: 14, title: "Bomber jacket", categoria: "Hombre", image: "./assets/h14.jpg", price: 950, talla: ["M", "L", "XL"] }],
    [15, { id: 15, title: "Jeans rotos", categoria: "Hombre", image: "./assets/h15.jpg", price: 800, talla: ["S", "M", "L", "XL"] }],
    [16, { id: 16, title: "Blusa de Seda", categoria: "Mujer", image: "./assets/m1.jpg", price: 450, talla: ["S", "M", "L"] }],
    [17, { id: 17, title: "Pantalones Slim", categoria: "Mujer", image: "./assets/m2.jpg", price: 550, talla: ["S", "M", "L", "XL"] }],
    [18, { id: 18, title: "Falda Midi", categoria: "Mujer", image: "./assets/m3.jpg", price: 400, talla: ["M", "L", "XL"] }],
    [19, { id: 19, title: "Chaqueta de Cuero", categoria: "Mujer", image: "./assets/m4.jpg", price: 900, talla: ["S", "M", "L", "XL"] }],
    [20, { id: 20, title: "Vestido de Noche", categoria: "Mujer", image: "./assets/m5.jpg", price: 1200, talla: ["M", "L", "XL"] }],
    [21, { id: 21, title: "Camiseta Básica", categoria: "Mujer", image: "./assets/m6.jpg", price: 300, talla: ["S", "M", "L"] }],
    [22, { id: 22, title: "Sudadera con Estampado", categoria: "Mujer", image: "./assets/m7.jpg", price: 650, talla: ["S", "M", "L"] }],
    [23, { id: 23, title: "Pantalones de Lino", categoria: "Mujer", image: "./assets/m8.jpg", price: 700, talla: ["S", "M", "L", "XL"] }],
    [24, { id: 24, title: "Blazer de Corte Largo", categoria: "Mujer", image: "./assets/m9.jpg", price: 850, talla: ["M", "L", "XL"] }],
    [25, { id: 25, title: "Abrigo de Lana", categoria: "Mujer", image: "./assets/m10.jpg", price: 1000, talla: ["S", "M", "L"] }],
    [26, { id: 26, title: "Jeans de Corte Alto", categoria: "Mujer", image: "./assets/m11.jpg", price: 550, talla: ["S", "M", "L"] }],
    [27, { id: 27, title: "Pantalón Palazzo", categoria: "Mujer", image: "./assets/m12.jpg", price: 750, talla: ["S", "M", "L"] }],
    [28, { id: 28, title: "Top Corto", categoria: "Mujer", image: "./assets/m13.jpg", price: 400, talla: ["S", "M", "L"] }],
    [29, { id: 29, title: "Chaleco de Lana", categoria: "Mujer", image: "./assets/m14.jpg", price: 950, talla: ["M", "L", "XL"] }],
    [30, { id: 30, title: "Pantalones de Cuero", categoria: "Mujer", image: "./assets/m15.jpg", price: 800, talla: ["S", "M", "L", "XL"] }]
]);

const carrito = new Map();

// Navbar Burger (para menú en móviles)
document.addEventListener('DOMContentLoaded', () => {
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll('.navbar-burger'), 
      0
    );
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

// Abrir/cerrar el modal estilo off-canvas
const openCart = document.getElementById('open-cart');
const closeCartBtn = document.getElementById('close-cart-btn');
const closeModalBg = document.getElementById('close-modal-bg');
const cartModal = document.getElementById('cart-modal');

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

function renderizarInicio(){
renderizarCantidadEnCarrito();
const portada = `
    <div class="columns m-0" id="portadaId">
        <div class="column is-6 column-box bg-image-1">
            <div class="overlay">
            <h2 class="title is-4">Título 1</h2>
            <p>Descripción corta sobre este contenido.</p>
            <button class="button is-light mt-3" id= "botonHombres" data-action = "presentar-elementos">Hombres</button>
            </div>
        </div>
        <!-- Segunda Columna -->
        <div class="column is-6 column-box bg-image-2">
            <div class="overlay">
            <h2 class="title is-4">Título 2</h2>
            <p>Otro texto descriptivo sobre esta sección.</p>
            <button class="button is-light mt-3" id= "botonMujeres" data-action = "presentar-elementos">Mujeres</button>
            </div>
        </div>
    </div>
`;
containerSection.classList.toggle("p-0")
containerPrincipal.classList.toggle("m-0")
containerPrincipal.insertAdjacentHTML("afterbegin", portada);
};
renderizarInicio();

document.body.addEventListener("click", function(event){
    event.preventDefault();

    //Apartado para manejar los botones del inicio.
    if(event.target.dataset.action==="presentar-elementos"){
        if(event.target.id==="botonHombres") {
            renderizarProductos(productos,"hombre");
        } else{
            renderizarProductos(productos,"mujer");
        }
        return;
    }
    //Apartado para manejar el boton agregar a carrito.
    if(event.target.dataset.action==="agregar-a-carrito"){
        modificarCarrito(Number(event.target.dataset.id))
        return;
    }

    //Apartado para manejar los botones de agregar eliminar del carrito.
    const botonModificarElCarro = event.target.closest("[data-action='modificarCarrito']");
    if(botonModificarElCarro){
        if(botonModificarElCarro.dataset.operacion) {
            modificarCarrito(Number(botonModificarElCarro.dataset.id), botonModificarElCarro.dataset.operacion);
        }else {
            modificarCarrito(Number(botonModificarElCarro.dataset.id));
        }
        return;
    }

    //Apartado para manejar el boton de eliminar del carrito.
    const botonEliminarDeCarro = event.target.closest("[data-action='eliminarDeCarrito']");
    if(botonEliminarDeCarro) {
        const idProducto = Number(botonEliminarDeCarro.dataset.id);
        eliminarElementoCarrito(idProducto);
        return;
    }
   

});

function renderizarProductos(objeto,categoria){
    containerPrincipal.removeChild(containerPrincipal.firstElementChild )
    containerSection.classList.toggle("p-0")
    containerPrincipal.classList.toggle("m-0")
    arreglo = objeto[categoria];
    arreglo.forEach(producto => {
        const tarjeta = `
        <div class="column is-3 mb-6 mt-6"> 
            <div class="card">
                <div class="card-image">
                    <figure class="image">
                    <img src=${producto.image} alt=${producto.title}>
                    </figure>
                </div>
                <div class="card-content mt-0 mb-0">
                    <div class="media">
                    <div class="media-content">
                        <p class="title is-4">${producto.title}</p>
                        <p class="subtitle is-6">${producto.categoria}</p>
                    </div>
                    </div>
                    <div class="content">
                    <p>MXN ${producto.price}</p>
                    </div>
                </div>
                <footer class="card-footer mt-0">
                    <button class="button is-light mt-3" data-action = "agregar-a-carrito" data-id = ${producto.id}>Agregar al carrito</button>
                </footer>
            </div>
            </div>

        `
        divProductos.insertAdjacentHTML("beforeend", tarjeta);
    });
};


function modificarCarrito(id, operacion = "suma") {
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
}//modificarCarrito()

function eliminarElementoCarrito(id) {
    carrito.delete(id);
    renderizarCarrito();
}//eliminarElementoCarrito()

function renderizarCantidadEnCarrito(){
    divTotalDeProductosEnCarrito.innerHTML="";
    let cantidadTotalDeProductos = 0;
    carrito.values().forEach(producto=>{
        cantidadTotalDeProductos += producto.cantidadProducto;
    });
    divTotalDeProductosEnCarrito.insertAdjacentText("afterbegin", cantidadTotalDeProductos);
}

//Solo se pone en marcha cuando se empieza a modificar el carrito.
function renderizarCarrito() {
    renderizarCantidadEnCarrito();
    divProductosCarrito.innerHTML = "";
    if(carrito.size === 0){
        divProductosCarrito.insertAdjacentHTML("beforeend",`
                <div class="icon-mensaje-vacio">
                    <p>Tu carrito está vacio</p>
                    <div class="carrito-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-384c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112c0-13.3 10.7-24 24-24zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/></svg>
                    </div>
                </div>
            `);
    }else{
        carrito.values().forEach( valor => {
            let filaCarrito = ` 
                        <div class="columns">
                            <div class="column is-4">
                                <img src=${valor.image} alt=${valor.title} class ="imagen-carrito">
                            </div>
                            <div class="column is-8">
                                <div class="columns is-flex-direction-column">
                                    <div class="contenedor-texto-carrito"><p class ="texto-carrito">${valor.title}</p></div>
                                    <p class ="texto-carrito precio-carrito ">MXN ${((valor.price)*(valor.cantidadProducto)).toFixed(2)}</p>
                                    <p class ="texto-carrito">${valor.cantidadProducto} pz</p>
                                </div>

                                <div class="columns is-justify-content-flex-end">
                                    <button type="button" data-action="modificarCarrito" data-operacion="resta" data-id="${valor.id}" class="is-flex is-flex-direction-column is-align-items-center is-justify-content-center botones-carrito"><svg class="iconos" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg></button>
                                    <button type="button" data-action="modificarCarrito" data-id="${valor.id}" class="is-flex is-flex-direction-column is-align-items-center is-justify-content-center botones-carrito"><svg class="iconos" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg></button>
                                    <button type="button" data-action="eliminarDeCarrito" data-id="${valor.id}" class="is-flex is-flex-direction-column is-align-items-center is-justify-content-center botones-carrito"><svg class="iconos" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg></button>
                                </div>
                            </div>
                        </div>
                        `
            divProductosCarrito.insertAdjacentHTML("beforeend", filaCarrito);
        });
    }
    renderizarTotalCarrito();
}//renderizarCarrito()

function renderizarTotalCarrito() {
    if (carrito.size > 0){
        divTotalCarrito.innerHTML = "";
        let cantidadTotalAPagar = 0;
        carrito.values().forEach( valor => {
            const cantidadTotalPorProducto = (valor.price)*(valor.cantidadProducto);
            cantidadTotalAPagar += cantidadTotalPorProducto;
        });
        divTotalCarrito.insertAdjacentHTML("beforeend", `
            <div class="totalCarrito-fila-precio">
                <div class="totalCarrito-fila-precio-letras">
                    <p class="precio-carrito">Total</p>
                    <p class="texto-IVA">IVA incluido</p>
                </div>
                <div class="totalCarrito-fila-precio-dinero">
                    <p class="precio-carrito">MXN ${cantidadTotalAPagar.toFixed(2)}</p>
                </div>
            </div>
        `);
    } else {
        divTotalCarrito.innerHTML = "";
    }
}//renderizarTotalCarrito()

 

  

  
        
      