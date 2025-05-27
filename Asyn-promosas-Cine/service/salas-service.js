// const API_URL = "http://localhost/cine/apiSalas.php";

// const listarSalas = () => {
//     return fetch(API_URL)
//         .then(res => res.json());
// };

// const crearSala = (sala) => {
//     return fetch(API_URL, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(sala)
//     }).then(res => res.json());
// };

// const eliminarSala = (id_nro_sala) => {
//     return fetch(`${API_URL}?id_nro_sala=${id_nro_sala}`, {
//         method: "DELETE"
//     }).then(res => res.json());
// };

// const actualizarSala = (sala, id_nro_sala) => {
//     return fetch(`${API_URL}?id_nro_sala=${id_nro_sala}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(sala)
//     }).then(res => res.json());
// };

// export const salaService = {
//     listarSalas,
//     crearSala,
//     eliminarSala,
//     actualizarSala
// };

const SUPABASE_URL = 'https://iqhmealdmiofdoqzzlev.supabase.co'; 
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlxaG1lYWxkbWlvZmRvcXp6bGV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc5MTk1MDMsImV4cCI6MjA2MzQ5NTUwM30.-GnHtii5nvqd3sGvAGPEupS0rPX3FcQlji7Vo_U8KHo'; // Cambia esto por tu API KEY real
const TABLE = 'salas';
const API_URL = `${SUPABASE_URL}/rest/v1/${TABLE}`;
const HEADERS = {
    'apikey': SUPABASE_KEY,
    'Authorization': `Bearer ${SUPABASE_KEY}`,
    'Content-Type': 'application/json'
};

const listarSalas = () => {
    return fetch(`${API_URL}?select=*`, { headers: HEADERS })
        .then(res => {
            if (!res.ok) throw new Error('Error al listar salas');
            return res.json();
        });
};

const crearSala = (sala) => {
    return fetch(API_URL, {
        method: 'POST',
        headers: {
            ...HEADERS,
            'Prefer': 'return=representation'
        },
        body: JSON.stringify(sala)
    })
    .then(async (res) => {
        if (!res.ok) {
            const text = await res.text();
            throw new Error(text || 'Error al insertar sala');
        }
        return res.json();
    });
};

const eliminarSala = (id_sala) => {
    return fetch(`${API_URL}?id_sala=eq.${id_sala}`, {
        method: 'DELETE',
        headers: HEADERS
    })
    .then(res => {
        if (!res.ok) throw new Error('Error al eliminar sala');
        return res;
    });
};

const actualizarSala = (sala, id_sala) => {
    return fetch(`${API_URL}?id_sala=eq.${id_sala}`, {
        method: 'PATCH',
        headers: {
            ...HEADERS,
            'Prefer': 'return=representation'
        },
        body: JSON.stringify(sala)
    })
    .then(async (res) => {
        if (!res.ok) {
            const text = await res.text();
            throw new Error(text || 'Error al actualizar sala');
        }
        return res.json();
    });
};

export const salaService = {
    listarSalas,
    crearSala,
    eliminarSala,
    actualizarSala
};