const producto = document.getElementById("producto");
const cantidad = document.getElementById("cantidad");
const resultado = document.getElementById("resultado");
const aviso = document.getElementById("mensaje-promocion");
const verPromo = document.getElementById("boton-promocion");
const calcular = document.getElementById("calcular");
const limpiar = document.getElementById("limpiar");
verPromo.addEventListener("click", function () {
aviso.textContent = "10 % de descuento desde $500 MXN.";
});
function cotizar() {
const precio = Number(producto.value);
const unidades = Number(cantidad.value);
if (producto.value === "") {
resultado.textContent = "Selecciona un producto.";
return;
}
if (!Number.isInteger(unidades) || unidades < 1 || unidades > 20) {
resultado.textContent = "Escribe un entero entre 1 y 20.";
return;
}
const subtotal = precio * unidades;
let descuento = 0;
if (subtotal >= 500) {
descuento = subtotal * 0.10;
}
const total = subtotal - descuento;
resultado.textContent =
"Subtotal: $" + subtotal.toFixed(2) +
" | Descuento: $" + descuento.toFixed(2) +
" | Total: $" + total.toFixed(2) + " MXN";
}
calcular.addEventListener("click", cotizar);
limpiar.addEventListener("click", function () {
producto.value = "";
cantidad.value = "";
resultado.textContent = "";
aviso.textContent = "";
producto.focus();
});