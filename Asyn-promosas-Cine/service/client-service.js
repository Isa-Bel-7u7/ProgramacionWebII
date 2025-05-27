// const API_URL = "http://localhost/cine/apiClientes.php";

// const listarClientes = () => {
//     return fetch(API_URL)
//         .then(res => res.json());
// };

// const crearCliente = (cliente) => {
//     return fetch(API_URL, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(cliente)
//     }).then(res => res.json());
// };

// const eliminarCliente = (id_cliente) => {
//     return fetch(`${API_URL}?id_cliente=${id_cliente}`, {
//         method: "DELETE"
//     }).then(res => res.json());
// };

// const actualizarCliente = (cliente, id_cliente) => {
//     return fetch(`${API_URL}?id_cliente=${id_cliente}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(cliente)
//     }).then(res => res.json());
// };

// export const clienteService = {
//     listarClientes,
//     crearCliente,
//     eliminarCliente,
//     actualizarCliente
// };

// Configuración de Supabase
const SUPABASE_URL = 'https://iqhmealdmiofdoqzzlev.supabase.co'; 
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlxaG1lYWxkbWlvZmRvcXp6bGV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc5MTk1MDMsImV4cCI6MjA2MzQ5NTUwM30.-GnHtii5nvqd3sGvAGPEupS0rPX3FcQlji7Vo_U8KHo'; // Cambia por tu API KEY real
const TABLE = 'clientes';
const API_URL = `${SUPABASE_URL}/rest/v1/${TABLE}`;
const HEADERS = {
    'apikey': SUPABASE_KEY,
    'Authorization': `Bearer ${SUPABASE_KEY}`,
    'Content-Type': 'application/json'
};


const listarClientes = () => {
    return fetch(`${API_URL}?select=*`, { headers: HEADERS })
        .then(res => {
            if (!res.ok) throw new Error('Error al listar clientes');
            return res.json();
        });
};

const crearCliente = (cliente) => {
    return fetch(API_URL, {
        method: 'POST',
        headers: {
            ...HEADERS,
            'Prefer': 'return=representation'
        },
        body: JSON.stringify(cliente)
    })
    .then(async (res) => {
        if (!res.ok) {
            const text = await res.text();
            throw new Error(text || 'Error al insertar cliente');
        }
        return res.json();
    });
};

const eliminarCliente = (id_cliente) => {
    return fetch(`${API_URL}?id_cliente=eq.${id_cliente}`, {
        method: 'DELETE',
        headers: HEADERS
    })
    .then(res => {
        if (!res.ok) throw new Error('Error al eliminar cliente');
        return res;
    });
};

const actualizarCliente = (cliente, id_cliente) => {
    return fetch(`${API_URL}?id_cliente=eq.${id_cliente}`, {
        method: 'PATCH',
        headers: {
            ...HEADERS,
            'Prefer': 'return=representation'
        },
        body: JSON.stringify(cliente)
    })
    .then(async (res) => {
        if (!res.ok) {
            const text = await res.text();
            throw new Error(text || 'Error al actualizar cliente');
        }
        return res.json();
    });
};

export const clienteService = {
    listarClientes,
    crearCliente,
    eliminarCliente,
    actualizarCliente
};