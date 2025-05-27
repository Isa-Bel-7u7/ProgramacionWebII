import { libroService } from "../service/libro-service.js";

const formulario = document.querySelector(".libro-form");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const titulo = document.getElementById("titulo").value;
    const autor = document.getElementById("autor").value;
    const isbn = document.getElementById("isbn").value;
    const anio = document.getElementById("anio").value;
    const descripcion = document.getElementById("descripcion").value;

    libroService.crearLibro(titulo, autor, isbn, anio, descripcion)
        .then(respuesta => {
            if (respuesta.success) {
                alert("Libro registrado correctamente");
                formulario.reset();
            } else {
                alert("Error al registrar: " + (respuesta.error || "Desconocido"));
            }
        });
});