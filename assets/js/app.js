// === CARRITO GLOBAL ===
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function actualizarContador() {
  const contador = document.getElementById("contador-carro");
  if (contador) {
    contador.textContent = carrito.length;
  }
}

function agregarAlCarro(nombre, precio) {
  carrito.push({ nombre, precio });
  localStorage.setItem("carrito", JSON.stringify(carrito));
  actualizarContador();
}

document.addEventListener("DOMContentLoaded", () => {
  actualizarContador();
});

// Modo oscuro persistente
const toggle = document.getElementById("toggleTema");

if (localStorage.getItem("tema") === "dark") {
  document.body.classList.add("dark");
}

if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem(
      "tema",
      document.body.classList.contains("dark") ? "dark" : "light"
    );
  });
}

// === DROPDOWN FIGURAS 3D ===
document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btnDropdown");
    const menu = document.getElementById("submenuFiguras");

    if (!btn || !menu) return;

    btn.addEventListener("click", (e) => {
        e.stopPropagation();
        menu.classList.toggle("activo");
    });

    document.addEventListener("click", () => {
        menu.classList.remove("activo");
    });

    menu.addEventListener("click", (e) => {
        e.stopPropagation();
    });
});
