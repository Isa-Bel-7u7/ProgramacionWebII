import { clienteService } from "../service/client-service.js";

const crearFilaCliente = (cliente) => {
    const fila = document.createElement('tr');
    fila.innerHTML = `
        <td>${cliente.nombre}</td>
        <td>${cliente.email}</td>
        <td>
            <a href="clientes.html?id=${cliente.id_cliente}" class="simple-button simple-button--edit">Editar</a>
            <button class="simple-button simple-button--delete" type="button" data-id="${cliente.id_cliente}">Eliminar</button>
        </td>
    `;

    fila.querySelector("[data-id]").addEventListener("click", () => {
        clienteService.eliminarCliente(cliente.id_cliente)
            .then(() => {
                alert("Cliente eliminado");
                fila.remove();
            })
            .catch(() => alert("Error al eliminar el cliente"));
    });
    return fila;
};

const tableBody = document.querySelector("[data-table]");
clienteService.listarClientes()
    .then(data => {
        data.forEach(cliente => {
            const fila = crearFilaCliente(cliente);
            tableBody.appendChild(fila);
        });
    })
    .catch(error => alert("Ocurrió un error al cargar los clientes"));

const buscador = document.querySelector('[data-buscador-clientes]');
const btnBuscar = document.querySelector('[data-btn-buscar-clientes]');

function filtrarClientes() {
    const filtro = buscador.value.toLowerCase();
    const filas = tableBody.querySelectorAll('tr');
    filas.forEach(fila => {
        const textoFila = fila.textContent.toLowerCase();
        fila.style.display = textoFila.includes(filtro) ? '' : 'none';
    });
}

buscador.addEventListener('input', filtrarClientes);
btnBuscar.addEventListener('click', filtrarClientes);