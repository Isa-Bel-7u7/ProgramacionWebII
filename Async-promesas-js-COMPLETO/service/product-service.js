const API_BASE_URL = 'http://localhost/api/conexion_productos.php';

// Obtener la lista de productos
const listaProductos = () => {
    return fetch(API_BASE_URL)
        .then(response => {
            if (!response.ok) throw new Error("Error al obtener la lista de productos");
            return response.json();
        })
        .catch(error => {
            console.error("Error en la solicitud:", error);
            throw error;
        });
};

// Crear un nuevo producto
const crearProducto = (nombre_producto, precio_producto, descripcion_producto) => {
    return fetch(API_BASE_URL, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre_producto, precio_producto, descripcion_producto })
    }).then(response => {
        if (!response.ok) throw new Error("Error al crear el producto");
        return response.json();
    });
};

// Eliminar un producto por ID
const eliminarProducto = (id_producto) => {
    return fetch(`${API_BASE_URL}?id_producto=${id_producto}`, {
        method: "DELETE"
    }).then(response => {
        if (!response.ok) throw new Error("Error al eliminar el producto");
    });
};

// Obtener un producto por ID
const obtenerProducto = (id_producto) => {
    return fetch(`${API_BASE_URL}?id_producto=${id_producto}`)
        .then(response => {
            if (!response.ok) throw new Error("Error al obtener el producto");
            return response.json();
        });
};

// Actualizar un producto
const actualizarProducto = (id_producto, nombre_producto, precio_producto, descripcion_producto) => {
    return fetch(API_BASE_URL, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id_producto, nombre_producto, precio_producto, descripcion_producto })
    }).then(response => {
        if (!response.ok) throw new Error("Error al actualizar el producto");
        return response.json();
    });
};

// Exportar las funciones
export const productService = {
    listaProductos,
    crearProducto,
    eliminarProducto,
    obtenerProducto,
    actualizarProducto
};