
// import { mascotaService } from "../service/mascota-service.js";

// const crear_nueva_fila = (nombre, especie, raza, dueño, id) => {
//     const fila = document.createElement('tr');

//     const contenido = `
//         <td class="td" data-td>${nombre}</td>
//         <td>${especie}</td>
//         <td>${edad}</td>
//         <td>${id_cliente}</td>
//         <td>
//             <ul class="table__button-control">
//                 <li>
//                     <a
//                         href="../screens/editar_pet.html?id=${id}"
//                         class="simple-button simple-button--edit"
//                     >Editar</a>
//                 </li>
//                 <li>
//                     <button
//                         class="simple-button simple-button--delete"
//                         type="button" id="${id}">
//                         Eliminar
//                     </button>
//                 </li>
//             </ul>
//         </td>
//     `;

//     fila.innerHTML = contenido;

//     const btn = fila.querySelector("button");
//     btn.addEventListener("click", () => {
//         mascotaService.eliminarMascota(btn.id)
//             .then(() => {
//                 alert("Mascota eliminada");
//                 fila.remove(); // Elimina la fila visualmente
//             })
//             .catch(() => alert("Error al eliminar la mascota"));
//     });

//     return fila;
// };

// const table = document.querySelector("[data-table]");

// mascotaService.listarMascotas()
//     .then(data => {
//         data.forEach(({ nombre, especie, edad, id_cliente, id }) => {
//             const nuevaFila = crear_nueva_fila(nombre, especie, edad, id_cliente, id);
//             table.appendChild(nuevaFila);
//         });
//     })
//     .catch(error => alert("Ocurrió un error al cargar las mascotas"));
// 


import { mascotaService } from "../service/mascota-service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nombre = document.querySelector("[data-nombre]").value;
    const especie = document.querySelector("[data-especie]").value;
    const edad = document.querySelector("[data-edad]").value;
    const id_cliente = document.querySelector("[data-id-cliente]").value;

    mascotaService.crearMascota(nombre, especie, edad, id_cliente)
        .then(() => {
            window.location.href = "../screens/lista_pets.html";
        })
        .catch(error => {
            console.error("Error al registrar mascota:", error);
            alert("Ocurrió un error al registrar la mascota");
        });
});
