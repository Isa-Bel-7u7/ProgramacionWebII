import { peliculaService } from "../service/peliculas-service.js";

const formulario = document.querySelector("[data-form]");
const url = new URL(window.location);
const id = url.searchParams.get("id");

if (id) {
    peliculaService.listarPeliculas()
        .then(data => {
            const pelicula = data.find(p => String(p.id_pelicula) === String(id));
            if (pelicula) {
                document.querySelector('[data-nombre]').value = pelicula.nombre || "";
                document.querySelector('[data-director]').value = pelicula.director || "";
                document.querySelector('[data-precio]').value = pelicula.precio || "";
                document.querySelector('[data-anio]').value = pelicula.anio || "";
                document.querySelector('[data-hora-inicio]').value = pelicula.hora_inicio || "";
                document.querySelector('[data-hora-fin]').value = pelicula.hora_fin || "";
                document.querySelector('[data-id-nro-sala]').value = pelicula.id_nro_sala || "";
            }
        });
}

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.querySelector('[data-nombre]').value;
    const director = document.querySelector('[data-director]').value;
    const precio = document.querySelector('[data-precio]').value;
    const anio = document.querySelector('[data-anio]').value;
    const hora_inicio = document.querySelector('[data-hora-inicio]').value;
    const hora_fin = document.querySelector('[data-hora-fin]').value;
    const id_nro_sala = document.querySelector('[data-id-nro-sala]').value;

    const datos = {
        nombre,
        director,
        precio,
        anio,
        hora_inicio,
        hora_fin,
        id_nro_sala
    };

    if (id) {
        
        peliculaService.actualizarPelicula(datos, id)
            .then(() => {
                alert("Película actualizada correctamente");
                window.location.href = "lista_peliculas.html";
            })
            .catch(error => {
                alert("Error al actualizar película: " + error.message);
            });
    } else {
        
        peliculaService.crearPelicula(datos)
            .then(() => {
                alert("Película registrada correctamente");
                formulario.reset();
            })
            .catch(error => {
                alert("Error al registrar película: " + error.message);
            });
    }
});