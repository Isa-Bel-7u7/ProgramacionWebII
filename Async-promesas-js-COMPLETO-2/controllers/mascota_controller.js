// import { mascotaService } from "../service/mascota-service.js";

// const formulario = document.querySelector("[data-form-mascota]");

// formulario.addEventListener("submit", (evento) => {
//     evento.preventDefault();

//     const nombre = document.querySelector("[data-nombre-mascota]").value;
//     const especie = document.querySelector("[data-especie-mascota]").value;
//     const edad = document.querySelector("[data-edad-mascota]").value;
//     const id_cliente = document.querySelector("[data-id_mascota-mascota]").value;

//     mascotaService
//         .crearMascota(nombre, especie, raza, dueño)
//         .then(() => {
//             window.location.href = "../screens/registro_completado_mascota.html";
//         })
//         .catch((error) => {
//             console.log(error);
//             window.location.href = "../screens/error_pets.html";
//         });
// });




import { mascotaService } from "../service/mascota-service.js";

const crear_nueva_fila = (nombre, especie, edad, id_cliente, id) => {
    const fila = document.createElement('tr');
    const contenido = `
        <td class="td" data-td>${nombre}</td>
        <td>${especie}</td>
        <td>${edad}</td>
        <td>${id_cliente}</td>
        <td>
            <ul class="table__button-control">
                <li>
                    <a
                        href="../screens/editar_cliente.html?id=${id_cliente}"
                        class="simple-button simple-button--edit"
                    >Editar</a>
                </li>
                <li>
                    <button
                        class="simple-button simple-button--delete"
                        type="button" id="${id}">
                        Eliminar
                    </button>
                </li>
            </ul>
        </td>
    `;
    fila.innerHTML = contenido;

    const btn = fila.querySelector("button");
    btn.addEventListener("click", () => {
        const idMascota = btn.id;
        mascotaService.eliminarMascota(idMascota)
            .then(() => {
                alert("Mascota eliminada");
                fila.remove();
            })
            .catch((error) => {
                console.error("Error al eliminar la mascota:", error);
                alert("Error al eliminar la mascota");
            });
    });

    return fila;
};

const table = document.querySelector("[data-table]");

mascotaService.listarMascotas()
    .then(data => {
        data.forEach(({ nombre, especie, edad, id_cliente, id }) => {
            const nuevaFila = crear_nueva_fila(nombre, especie, edad, id_cliente, id);
            table.appendChild(nuevaFila);
        });
    })
    .catch(error => {
        console.error("Error al cargar las mascotas:", error);
        alert("Ocurrió un error al cargar las mascotas");
    });