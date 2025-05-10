import { productService } from "../service/product-service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-description]").value;

    productService.crearProducto(nombre, precio, descripcion)
        .then(() => {
            alert("Producto registrado exitosamente");
            // Redirige a la lista de productos
            window.location.href = "../screens/lista_productos.html";
        })
        .catch(() => alert("Ocurrió un error al registrar el producto"));
        
});