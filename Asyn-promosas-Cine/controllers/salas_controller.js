import { salaService } from "../service/salas-service.js";

// Función para crear una fila de la tabla
const crearFilaSala = (sala) => {
    const fila = document.createElement('tr');
    fila.innerHTML = `
        <td>${sala.id_nro_sala}</td>
        <td>${sala.nro_sillas}</td>
        <td>${sala.descripcion || ''}</td>
        <td>
            <a href="salas.html?id=${sala.id_nro_sala}" class="simple-button simple-button--edit">Editar</a>
            <button class="simple-button simple-button--delete" type="button" data-id="${sala.id_nro_sala}">Eliminar</button>
        </td>
    `;
    // Botón eliminar
    fila.querySelector("[data-id]").addEventListener("click", () => {
        salaService.eliminarSala(sala.id_nro_sala)
            .then(() => {
                alert("Sala eliminada");
                fila.remove();
            })
            .catch(() => alert("Error al eliminar la sala"));
    });
    return fila;
};

// Llenar la tabla con las salas
const tableBody = document.querySelector("[data-table]");
salaService.listarSalas()
    .then(data => {
        tableBody.innerHTML = ""; // Limpia la tabla
        data.forEach(sala => {
            const fila = crearFilaSala(sala);
            tableBody.appendChild(fila);
        });
    })
    .catch(error => alert("Ocurrió un error al cargar las salas"));

// Buscador funcional
const buscador = document.querySelector('[data-buscador-salas]');
const btnBuscar = document.querySelector('[data-btn-buscar-salas]');

function filtrarSalas() {
    const filtro = buscador.value.toLowerCase();
    const filas = tableBody.querySelectorAll('tr');
    filas.forEach(fila => {
        const textoFila = fila.textContent.toLowerCase();
        fila.style.display = textoFila.includes(filtro) ? '' : 'none';
    });
}

buscador.addEventListener('input', filtrarSalas);
btnBuscar.addEventListener('click', filtrarSalas);


// import { salaService } from "../service/salas-service.js";

// // Función para crear una fila de la tabla
// const crearFilaSala = (sala) => {
//     const fila = document.createElement('tr');
//     fila.innerHTML = `
//         <td>${sala.id_nro_sala}</td>
//         <td>${sala.nroSillas}</td>
//         <td>${sala.descripcion || ''}</td>
//         <td>
//             <a href="salas.html?id=${sala.id_sala}" class="simple-button simple-button--edit">Editar</a>
//             <button class="simple-button simple-button--delete" type="button" data-id="${sala.id_sala}">Eliminar</button>
//         </td>
//     `;
//     // Botón eliminar
//     fila.querySelector("[data-id]").addEventListener("click", () => {
//         salaService.eliminarSala(sala.id_sala)
//             .then(() => {
//                 alert("Sala eliminada");
//                 fila.remove();
//             })
//             .catch(() => alert("Error al eliminar la sala"));
//     });
//     return fila;
// };

// // Llenar la tabla con las salas
// const tableBody = document.querySelector("[data-table]");
// salaService.listarSalas()
//     .then(data => {
//         data.forEach(sala => {
//             const fila = crearFilaSala(sala);
//             tableBody.appendChild(fila);
//         });
//     })
//     .catch(error => alert("Ocurrió un error al cargar las salas"));

// // Buscador funcional
// const buscador = document.querySelector('[data-buscador-salas]');
// const btnBuscar = document.querySelector('[data-btn-buscar-salas]');

// function filtrarSalas() {
//     const filtro = buscador.value.toLowerCase();
//     const filas = tableBody.querySelectorAll('tr');
//     filas.forEach(fila => {
//         const textoFila = fila.textContent.toLowerCase();
//         fila.style.display = textoFila.includes(filtro) ? '' : 'none';
//     });
// }



// buscador.addEventListener('input', filtrarSalas);
// btnBuscar.addEventListener('click', filtrarSalas);