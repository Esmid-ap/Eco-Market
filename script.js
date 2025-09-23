let carrito = [];
let total = 0;

const productos = {
  frutas: [
    { nombre: "Manzana", precio: 2, img: "imagenes/manzana.jpg" },
    { nombre: "Plátano", precio: 1.5, img: "imagenes/platano.jpg" },
    { nombre: "Naranja", precio: 2.2, img: "imagenes/naranja.jpg" },
    { nombre: "Pera", precio: 2.5, img: "imagenes/pera.jpg" },
    { nombre: "Uvas", precio: 3, img: "imagenes/uvas.jpg" },
    { nombre: "Sandía", precio: 4, img: "imagenes/sandia.jpg" },
    { nombre: "Melón", precio: 3.5, img: "imagenes/melon.jpg" },
    { nombre: "Kiwi", precio: 2.8, img: "imagenes/kiwi.jpg" },
    { nombre: "Mango", precio: 3.2, img: "imagenes/mango.jpg" },
    { nombre: "Fresas", precio: 3.8, img: "imagenes/fresas.jpg" }
  ],
  verduras: [
    { nombre: "Tomate", precio: 1.8, img: "imagenes/tomate.jpg" },
    { nombre: "Lechuga", precio: 1.2, img: "imagenes/lechuga.jpg" },
    { nombre: "Zanahoria", precio: 1.5, img: "imagenes/zanahoria.jpg" },
    { nombre: "Cebolla", precio: 1.3, img: "imagenes/cebolla.jpg" },
    { nombre: "Papa", precio: 2, img: "imagenes/papa.jpg" },
    { nombre: "Brócoli", precio: 2.5, img: "imagenes/brocoli.jpg" },
    { nombre: "Espinaca", precio: 2.2, img: "imagenes/espinaca.jpg" },
    { nombre: "Pepino", precio: 1.7, img: "imagenes/pepino.jpg" },
    { nombre: "Ajo", precio: 1, img: "imagenes/ajo.jpg" },
    { nombre: "Pimiento", precio: 2.4, img: "imagenes/pimiento.jpg" }
  ],
  granos: [
    { nombre: "Arroz", precio: 3, img: "imagenes/arroz.jpg" },
    { nombre: "Pan", precio: 2, img: "imagenes/pan.jpg" },
    { nombre: "Leche", precio: 2.5, img: "imagenes/leche.jpg" },
    { nombre: "Queso", precio: 4, img: "imagenes/queso.jpg" },
    { nombre: "Huevos", precio: 3.5, img: "imagenes/huevos.jpg" },
    { nombre: "Aceite", precio: 5, img: "imagenes/aceite.jpg" },
    { nombre: "Azúcar", precio: 2.2, img: "imagenes/azucar.jpg" },
    { nombre: "Sal", precio: 1.2, img: "imagenes/sal.jpg" },
    { nombre: "Café", precio: 6, img: "imagenes/cafe.jpg" },
    { nombre: "Té", precio: 3, img: "imagenes/te.jpg" }
  ]
};

// ------------------ LOGIN ------------------
function iniciarSesion() {
  document.getElementById("login-container").style.display = "none";
  document.getElementById("menu-container").style.display = "block";
  document.body.style.background = "url('imagenes/fondo/fondo2.jpg') no-repeat center/cover";
}

// ------------------ MOSTRAR PRODUCTOS ------------------
function mostrarProductos(categoria) {
  document.getElementById("menu-container").style.display = "none";
  document.getElementById("productos-container").style.display = "block";
  document.getElementById("categoria-titulo").innerText = categoria.toUpperCase();
  document.getElementById("lista-productos").innerHTML = "";

  productos[categoria].forEach(p => {
    document.getElementById("lista-productos").innerHTML += `
      <div class="card">
        <img src="${p.img}" alt="${p.nombre}">
        <h3>${p.nombre}</h3>
        <p>S/${p.precio}</p>
        <button onclick="agregarAlCarrito('${p.nombre}', ${p.precio})">Agregar</button>
      </div>
    `;
  });

  document.body.style.background = `url('img/fondo-${categoria}.jpg') no-repeat center/cover`;
  document.getElementById("carrito").style.display = "block";
}

// ------------------ VOLVER AL MENÚ ------------------
function volverMenu() {
  document.getElementById("productos-container").style.display = "none";
  document.getElementById("gracias").style.display = "none";
  document.getElementById("menu-container").style.display = "block";
  document.body.style.background = "url('img/fondo-menu.jpg') no-repeat center/cover";
}

// ------------------ AGREGAR AL CARRITO ------------------
function agregarAlCarrito(nombre, precio) {
  let producto = carrito.find(item => item.nombre === nombre);
  if (producto) {
    producto.cantidad++;
  } else {
    carrito.push({ nombre, precio, cantidad: 1 });
  }
  total += precio;
  actualizarCarrito();
}

// ------------------ ELIMINAR DEL CARRITO ------------------
function eliminarDelCarrito(nombre) {
  let producto = carrito.find(item => item.nombre === nombre);
  if (producto) {
    total -= producto.precio;
    producto.cantidad--;

    if (producto.cantidad <= 0) {
      carrito = carrito.filter(item => item.nombre !== nombre);
    }
  }
  actualizarCarrito();
}

// ------------------ ACTUALIZAR CARRITO ------------------
function actualizarCarrito() {
  let lista = document.getElementById("carrito-lista");
  lista.innerHTML = "";

  carrito.forEach(item => {
    let li = document.createElement("li");
    li.innerHTML = `
      ${item.nombre} x${item.cantidad} - S/${(item.precio * item.cantidad).toFixed(2)}
      <button onclick="eliminarDelCarrito('${item.nombre}')">❌</button>
    `;
    lista.appendChild(li);
  });

  document.getElementById("carrito-total").innerText = total.toFixed(2);
}

// ------------------ FINALIZAR COMPRA ------------------
function finalizarCompra() {
  document.getElementById("productos-container").style.display = "none";
  document.getElementById("menu-container").style.display = "none";
  document.getElementById("carrito").style.display = "none";
  document.getElementById("gracias").style.display = "block";

  carrito = [];
  total = 0;
  actualizarCarrito();
}
