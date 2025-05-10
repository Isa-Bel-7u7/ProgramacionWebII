import { productService } from "../service/product-service.js";

const crear_nueva_fila = (nombre, precio, id) => {
    const fila = document.createElement("tr");
    const contenido = `
        <td class="td" data-td>${nombre}</td>
        <td>${precio}</td>
        <td>
            <ul class="table__button-control">
                <li>
                    <a
                        href="../screens/editar_producto.html?id=${id}"
                        class="simple-button simple-button--edit"
                    >Editar</a>
                </li>
                <li>
                    <button
                        class="simple-button simple-button--delete"
                        type="button" id="${id}"
                    >Eliminar</button>
                </li>
            </ul>
        </td>
    `;
    fila.innerHTML = contenido;

    // Agregar evento para eliminar producto
    const btn = fila.querySelector("button");
    btn.addEventListener("click", () => {
        const id = btn.id;
        productService.eliminarProducto(id)
            .then(() => {
                alert("Producto eliminado");
                fila.remove(); // Eliminar la fila de la tabla
            })
            .catch(() => alert("Error al eliminar el producto"));
    });

    return fila;
};

// Seleccionar la tabla donde se mostrarán los productos
const table = document.querySelector("[data-table]");

// Obtener la lista de productos y mostrarlos en la tabla
productService.listaProductos()
    .then((productos) => {
        productos.forEach(({ nombre_producto, precio_producto, id_producto }) => {
            const nuevaFila = crear_nueva_fila(nombre_producto, precio_producto, id_producto);
            table.appendChild(nuevaFila);
        });
    })
    .catch(() => alert("Ocurrió un error al cargar los productos"));