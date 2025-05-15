/*const API_BASE_URL = 'http://localhost/api/productos.php';

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
    return fetch(${API_BASE_URL}?id=${id}, {
        method: "DELETE"
    });
};

const obtenerProducto = (id) => {
    return fetch(${API_BASE_URL}?id=${id})
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
};*/


const SUPABASE_URL = 'https://jlzgxxcklswdgixzvlvg.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impsemd4eGNrbHN3ZGdpeHp2bHZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4Nzc5NDcsImV4cCI6MjA2MjQ1Mzk0N30.laziHzAoI9YPnXJHHUbO8nOMkUjfrKoRluOkEKO27gs';
const TABLE = 'productos';
const API_URL = `${SUPABASE_URL}/rest/v1/${TABLE}`;
const HEADERS = {
    'apikey': SUPABASE_KEY,
    'Authorization': `Bearer ${SUPABASE_KEY}`,
    'Content-Type': 'application/json'
};

// Listar productos
const listarProductos = () => {
    return fetch(`${API_URL}?select=*`, { headers: HEADERS })
        .then(res => {
            if (!res.ok) throw new Error('Error al listar productos');
            return res.json();
        });
};

// Crear producto
const crearProducto = (nombre, precio, descripcion) => {
    const producto = {
        nombre,
        precio: parseFloat(precio),
        descripcion,
        id: uuid.v4()
    };
    return fetch(API_URL, {
        method: 'POST',
        headers: HEADERS,
        body: JSON.stringify(producto)
    })
    .then(async (res) => {
        if (!res.ok) {
            const text = await res.text();
            throw new Error(text || 'Error al crear producto');
        }
        const text = await res.text();
        return text ? JSON.parse(text) : producto;
    })
    .catch((error) => {
        console.error("Error al crear producto:", error);
        throw error;
    });
};

// Eliminar producto
const eliminarProducto = (id) => {
    return fetch(`${API_URL}?id=eq.${id}`, {
        method: 'DELETE',
        headers: HEADERS
    });
};

// Obtener producto por ID
const obtenerProducto = (id) => {
    return fetch(`${API_URL}?id=eq.${id}`, {
        headers: HEADERS
    })
    .then(res => {
        if (!res.ok) throw new Error('Error al obtener producto');
        return res.json();
    })
    .catch(error => {
        console.error("Error en obtener producto:", error);
        throw error;
    });
};

// Actualizar producto
const actualizarProducto = (nombre, precio, descripcion, id) => {
    return fetch(`${API_URL}?id=eq.${id}`, {
        method: 'PATCH',
        headers: {
            ...HEADERS,
            'Prefer': 'return=representation'
        },
        body: JSON.stringify({ nombre, precio: parseFloat(precio), descripcion })
    });
};

export const productoService = {
    listarProductos,
    crearProducto,
    eliminarProducto,
    obtenerProducto,
    actualizarProducto
};