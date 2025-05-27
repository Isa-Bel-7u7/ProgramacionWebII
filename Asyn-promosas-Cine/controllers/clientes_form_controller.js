import { clienteService } from "../service/client-service.js";

const formulario = document.querySelector("[data-form]");
const url = new URL(window.location);
const id = url.searchParams.get("id");

if (id) {
    clienteService.listarClientes()
        .then(data => {
            const cliente = data.find(c => String(c.id_cliente) === String(id));
            if (cliente) {
                document.querySelector('[data-nombre]').value = cliente.nombre || "";
                document.querySelector('[data-email]').value = cliente.email || "";
            }
        });
}

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.querySelector('[data-nombre]').value;
    const email = document.querySelector('[data-email]').value;

    const datos = { nombre, email };

    if (id) {
        
        clienteService.actualizarCliente(datos, id)
            .then(() => {
                alert("Cliente actualizado correctamente");
                window.location.href = "lista_clientes.html";
            })
            .catch(error => {
                alert("Error al actualizar cliente: " + error.message);
            });
    } else {
       
        clienteService.crearCliente(datos)
            .then(() => {
                alert("Cliente registrado correctamente");
                formulario.reset();
            })
            .catch(error => {
                alert("Error al registrar cliente: " + error.message);
            });
    }
});