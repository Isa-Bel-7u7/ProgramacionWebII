import { peliculaService } from "../service/peliculas-service.js";


const crearFilaPelicula = (pelicula) => {
    const fila = document.createElement('tr');
    fila.innerHTML = `
        <td>${pelicula.nombre}</td>
        <td>${pelicula.director}</td>
        <td>${pelicula.anio}</td>
        <td>${pelicula.precio}</td>
        <td>${pelicula.hora_inicio}</td>
        <td>${pelicula.hora_fin}</td>
        <td>${pelicula.id_nro_sala || ''}</td>
        <td>
            <a href="index.html?id=${pelicula.id_pelicula}" class="simple-button simple-button--edit">Editar</a>
            <button class="simple-button simple-button--delete" type="button" data-id="${pelicula.id_pelicula}">Eliminar</button>
        </td>
    `;
    
    fila.querySelector("[data-id]").addEventListener("click", () => {
        peliculaService.eliminarPelicula(pelicula.id_pelicula)
            .then(() => {
                alert("Película eliminada");
                fila.remove();
            })
            .catch(() => alert("Error al eliminar la película"));
    });
    return fila;
};


const tableBody = document.querySelector("[data-table]");
peliculaService.listarPeliculas()
    .then(data => {
        data.forEach(pelicula => {
            const fila = crearFilaPelicula(pelicula);
            tableBody.appendChild(fila);
        });
    })
    .catch(error => alert("Ocurrió un error al cargar las películas"));


const buscador = document.querySelector('[data-buscador-peliculas]') || document.getElementById('buscador-peliculas');
const btnBuscar = document.querySelector('[data-btn-buscar-peliculas]') || document.getElementById('btn-buscar-peliculas');

function filtrarPeliculas() {
    const filtro = buscador.value.toLowerCase();
    const filas = tableBody.querySelectorAll('tr');
    filas.forEach(fila => {
        const textoFila = fila.textContent.toLowerCase();
        fila.style.display = textoFila.includes(filtro) ? '' : 'none';
    });
}

buscador.addEventListener('input', filtrarPeliculas);
btnBuscar.addEventListener('click', filtrarPeliculas);