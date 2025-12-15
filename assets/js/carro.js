// Usamos el carrito global definido en app.js
renderCarro();

// Renderizar los productos en el carro
function renderCarro() {
  const contenedor = document.getElementById("lista-carro");
  if (!contenedor) return;

  if (carrito.length === 0) {
    contenedor.innerHTML = "<p class='carro-vacio'>Tu carro está vacío 🛒</p>";
    document.getElementById("total").textContent = "$0";
    return;
  }

  contenedor.innerHTML = "";

  carrito.forEach((producto, index) => {
    contenedor.innerHTML += `
      <div class="item-carro">
        <span>${producto.nombre}</span>
        <span>$${producto.precio.toLocaleString()}</span>
        <button class="btn-eliminar" onclick="eliminar(${index})">Eliminar</button>
      </div>
    `;
  });

  actualizarTotal();
}

// Eliminar producto
function eliminar(index) {
  carrito.splice(index, 1);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  actualizarContador();
  renderCarro();
}

// Total
function actualizarTotal() {
  const total = carrito.reduce((suma, p) => suma + p.precio, 0);
  document.getElementById("total").textContent = "$" + total.toLocaleString();
}

function finalizarCompra() {
  if (carrito.length === 0) {
    alert("No tienes productos en el carro.");
    return;
  }

  alert("Gracias por tu compra 🛒✨");
  carrito = [];
  localStorage.setItem("carrito", JSON.stringify(carrito));
  actualizarContador();
  renderCarro();
}
