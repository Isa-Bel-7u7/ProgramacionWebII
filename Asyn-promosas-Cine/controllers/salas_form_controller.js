// import { salaService } from "../service/salas-service.js";

// const form = document.querySelector("[data-form]");

// if (form) {
//     form.addEventListener("submit", (e) => {
//         e.preventDefault();

        
//         const id_nro_sala = parseInt(form.querySelector("[data-id-nro-sala]").value, 10);
//         const nro_sillas = parseInt(form.querySelector("[data-nro-sillas]").value, 10);
//         const descripcion = form.querySelector("[data-descripcion]").value;
        
//         const id_pelicula = parseInt(form.querySelector("[data-id-pelicula]").value, 10);

        
//         const nuevaSala = {
//             id_nro_sala,
//             nro_sillas,
//             descripcion,
//             id_pelicula 
//         };

//         salaService.crearSala(nuevaSala)
//             .then(respuesta => {
//                 if (respuesta.message) {
//                     alert("Sala registrada correctamente");
//                     form.reset();
//                 } else {
//                     alert("Error al registrar sala: " + (respuesta.error || "Error desconocido"));
//                 }
//             })
//             .catch(() => alert("Error al registrar sala"));
//     });
// }

import { salaService } from "../service/salas-service.js";

const formulario = document.querySelector("[data-form]");
const url = new URL(window.location);
const id = url.searchParams.get("id");


if (id) {
    salaService.listarSalas()
        .then(data => {
            const sala = data.find(s => String(s.id_sala) === String(id));
            if (sala) {
                document.querySelector('[data-id-nro-sala]').value = sala.id_nro_sala || "";
                document.querySelector('[data-nro-sillas]').value = sala.nroSillas || "";
                document.querySelector('[data-descripcion]').value = sala.descripcion || "";
            }
        });
}

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const id_nro_sala = document.querySelector('[data-id-nro-sala]').value;
    const nroSillas = document.querySelector('[data-nro-sillas]').value;
    const descripcion = document.querySelector('[data-descripcion]').value;

    const datos = { id_nro_sala, nroSillas, descripcion };

    if (id) {
       
        salaService.actualizarSala(datos, id)
            .then(() => {
                alert("Sala actualizada correctamente");
                window.location.href = "lista_salas.html";
            })
            .catch(error => {
                alert("Error al actualizar sala: " + error.message);
            });
    } else {
       
        salaService.crearSala(datos)
            .then(() => {
                alert("Sala registrada correctamente");
                formulario.reset();
            })
            .catch(error => {
                alert("Error al registrar sala: " + error.message);
            });
    }
});