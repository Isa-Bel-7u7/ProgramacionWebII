import { productoService } from "../service/peliculas-service.js";

const formulario = document.querySelector("[data-form]");

const obtenerInfo = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if (id == null) {
        window.location.href = "../screens/error.html";
        return;
    }

    const nombre = document.querySelector("[data-nombre]");
    const hora_inico = document.querySelector("[data-hora-inicio]");
    const hora_fin = document.querySelector("[data-hora_fin]");
    const fecha = document.querySelector("[data-anio]");
    const precio = parseInt(document.querySelector('[data-precio]').value);

    try {
        const producto = await productoService.obtenerProducto(id);
        if (producto.nombre && producto.precio && producto.descripcion) {
            nombre.value = producto.nombre;
            precio.value = producto.precio;
            descripcion.value = producto.descripcion;
        } else {
            throw new Error("Datos incompletos");
        }
    } catch (error) {
        console.error("Error al obtener producto:", error);
        window.location.href = "../screens/error.html";
    }
};

obtenerInfo();

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;

    productoService.actualizarProducto(nombre, precio, descripcion, id)
        .then(() => {
            window.location.href = "../screens/edicion_concluida.html";
        })
        .catch(error => {
            console.error("Error al actualizar producto:", error);
        });
});
