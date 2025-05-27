const API_BASE_URL = 'http://localhost/api/productos.php';

const listarProductos = () => {
    return fetch(API_BASE_URL)
        .then(response => {
            if (!response.ok) throw new Error("Error al listar productos");
            return response.json();
        })
        .catch(error => {
            console.error("Error en la solicitud:", error);
            throw error;
        });
};

const crearProducto = (nombre, precio, descripcion) => {
    return fetch(API_BASE_URL, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            nombre,
            precio: parseFloat(precio),
            descripcion
        })
        }).then(response => {
        if (!response.ok) throw new Error("Error al crear producto");
        return response.json();
        });
};

const eliminarProducto = (id) => {
    return fetch(`${API_BASE_URL}?id=${id}`, {
        method: "DELETE"
    });
};

const obtenerProducto = (id) => {
    return fetch(`${API_BASE_URL}?id=${id}`)
        .then(response => {
            if (!response.ok) throw new Error("Error al obtener producto");
            return response.json();
        });
};

const actualizarProducto = (nombre, precio, descripcion, id) => {
    return fetch(API_BASE_URL, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            id,
            nombre,
            precio: parseFloat(precio),
            descripcion
        })
    }).then(response => {
        if (!response.ok) throw new Error("Error al actualizar producto");
        return response.json();
    });
};

export const productoService = {
    listarProductos,
    crearProducto,
    eliminarProducto,
    obtenerProducto,
    actualizarProducto
};