import { boletoService } from "../service/boletos_service.js";
import { salaService } from "../service/salas-service.js";
import { peliculaService } from "../service/peliculas-service.js";
import { clienteService } from "../service/client-service.js";

const tableBody = document.querySelector("[data-table]");

Promise.all([
    boletoService.listarBoletos(),
    salaService.listarSalas(),
    peliculaService.listarPeliculas(),
    clienteService.listarClientes()
]).then(([boletos, salas, peliculas, clientes]) => {

    const mapaSalas = Object.fromEntries(salas.map(s => [s.id_nro_sala, s.id_nro_sala]));
    const mapaPeliculas = Object.fromEntries(peliculas.map(p => [p.id_pelicula, p.nombre]));
    const mapaClientes = Object.fromEntries(clientes.map(c => [c.id_cliente || c.id, c.nombre]));

    boletos.forEach(boleto => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${boleto.id_boleto}</td>
            <td>${boleto.fecha}</td>
            <td>${boleto.hora}</td>
            <td>${boleto.descripcion}</td>
            <td>${mapaPeliculas[boleto.id_pelicula] || boleto.id_pelicula || ''}</td>
            <td>${mapaClientes[boleto.id_cliente] || boleto.id_cliente || ''}</td>
            <td>${mapaSalas[boleto.id_sala] || boleto.id_sala || ''}</td>
            <td>
                <a href="boletos.html?id=${boleto.id_boleto}" class="simple-button simple-button--edit">Editar</a>
                <button class="simple-button simple-button--delete" type="button" data-id="${boleto.id_boleto}">Eliminar</button>
            </td>
        `;
    
        fila.querySelector("[data-id]").addEventListener("click", () => {
            boletoService.eliminarBoleto(boleto.id_boleto)
                .then(() => {
                    alert("Boleto eliminado");
                    fila.remove();
                })
                .catch(() => alert("Error al eliminar el boleto"));
        });
        tableBody.appendChild(fila);
    });
}).catch(error => alert("Ocurrió un error al cargar los boletos o referencias"));

const buscador = document.querySelector('[data-buscador-boletos]');
const btnBuscar = document.querySelector('[data-btn-buscar-boletos]');

function filtrarBoletos() {
    const filtro = buscador.value.toLowerCase();
    const filas = tableBody.querySelectorAll('tr');
    filas.forEach(fila => {
        const textoFila = fila.textContent.toLowerCase();
        fila.style.display = textoFila.includes(filtro) ? '' : 'none';
    });
}

buscador.addEventListener('input', filtrarBoletos);
btnBuscar.addEventListener('click', filtrarBoletos);