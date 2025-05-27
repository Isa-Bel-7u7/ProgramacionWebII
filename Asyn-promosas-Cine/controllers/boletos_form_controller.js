import { boletoService } from "../service/boletos_service.js";
import { clienteService } from "../service/client-service.js";
import { salaService } from "../service/salas-service.js";
import { peliculaService } from "../service/peliculas-service.js";

const formulario = document.querySelector("[data-form]");

// Llenar selects dinámicamente
const selectPelicula = document.querySelector("[data-id-pelicula]");
const selectCliente = document.querySelector("[data-id-cliente]");
const selectSala = document.querySelector("[data-id-sala]");

peliculaService.listarPeliculas().then(data => {
    data.forEach(pelicula => {
        const option = document.createElement("option");
        option.value = pelicula.id_pelicula; 
        option.textContent = pelicula.nombre; 
        selectPelicula.appendChild(option);
    });
});

clienteService.listarClientes().then(data => {
    data.forEach(cliente => {
        const option = document.createElement("option");
        option.value = cliente.id_cliente || cliente.id; 
        option.textContent = cliente.nombre;
        selectCliente.appendChild(option);
    });
});

salaService.listarSalas().then(data => {
    data.forEach(sala => {
        const option = document.createElement("option");
        option.value = sala.id_sala;
        option.textContent = sala.id_nro_sala || sala.nroSala || sala.nro_sala;
        selectSala.appendChild(option);
    });
});

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const fecha = document.querySelector("[data-fecha]").value;
    const hora = document.querySelector("[data-hora]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;
    const id_pelicula = selectPelicula.value;
    const id_cliente = selectCliente.value;
    const id_sala = selectSala.value;

    if (!id_pelicula || !id_cliente || !id_sala) {
        alert("Debes seleccionar película, cliente y sala.");
        return;
    }

    const datos = { fecha, hora, descripcion, id_pelicula: Number(id_pelicula), id_cliente: Number(id_cliente), id_sala: Number(id_sala) };

    boletoService.crearBoleto(datos)
        .then(() => {
            alert("Boleto registrado correctamente");
            formulario.reset();
        })
        .catch(error => {
            alert("Error al registrar boleto: " + error.message);
        });
});