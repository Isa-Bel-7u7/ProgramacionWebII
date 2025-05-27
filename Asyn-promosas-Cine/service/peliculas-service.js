// const API_URL = "http://localhost/cine/apiPeliculas.php";

// const listarPeliculas = () => {
//     return fetch(API_URL)
//         .then(res => res.json());
// };

// const crearPelicula = (pelicula) => {
//     return fetch(API_URL, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(pelicula)
//     }).then(res => res.json());
// };

// const eliminarPelicula = (id_pelicula) => {
//     return fetch(`${API_URL}?id_pelicula=${id_pelicula}`, {
//         method: "DELETE"
//     }).then(res => res.json());
// };

// const actualizarPelicula = (pelicula, id_pelicula) => {
//     return fetch(`${API_URL}?id_pelicula=${id_pelicula}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(pelicula)
//     }).then(res => res.json());
// };

// export const peliculaService = {
//     listarPeliculas,
//     crearPelicula,
//     eliminarPelicula,
//     actualizarPelicula
// };


const SUPABASE_URL = 'https://iqhmealdmiofdoqzzlev.supabase.co'; 
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlxaG1lYWxkbWlvZmRvcXp6bGV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc5MTk1MDMsImV4cCI6MjA2MzQ5NTUwM30.-GnHtii5nvqd3sGvAGPEupS0rPX3FcQlji7Vo_U8KHo'; // Cambia por tu API KEY real
const TABLE = 'Peliculas';
const API_URL = `${SUPABASE_URL}/rest/v1/${TABLE}`;
const HEADERS = {
    'apikey': SUPABASE_KEY,
    'Authorization': `Bearer ${SUPABASE_KEY}`,
    'Content-Type': 'application/json'
};

const listarPeliculas = () => {
    return fetch(`${API_URL}?select=*`, { headers: HEADERS })
        .then(res => {
            if (!res.ok) throw new Error('Error al listar películas');
            return res.json();
        });
};

const crearPelicula = (pelicula) => {
    return fetch(API_URL, {
        method: 'POST',
        headers: {
            ...HEADERS,
            'Prefer': 'return=representation'
        },
        body: JSON.stringify(pelicula)
    })
    .then(async (res) => {
        if (!res.ok) {
            const text = await res.text();
            throw new Error(text || 'Error al insertar película');
        }
        return res.json();
    });
};

const eliminarPelicula = (id_pelicula) => {
    return fetch(`${API_URL}?id_pelicula=eq.${id_pelicula}`, {
        method: 'DELETE',
        headers: HEADERS
    })
    .then(res => {
        if (!res.ok) throw new Error('Error al eliminar película');
        return res;
    });
};

const actualizarPelicula = (pelicula, id_pelicula) => {
    return fetch(`${API_URL}?id_pelicula=eq.${id_pelicula}`, {
        method: 'PATCH',
        headers: {
            ...HEADERS,
            'Prefer': 'return=representation'
        },
        body: JSON.stringify(pelicula)
    })
    .then(async (res) => {
        if (!res.ok) {
            const text = await res.text();
            throw new Error(text || 'Error al actualizar película');
        }
        return res.json();
    });
};

// Exporta las funciones
export const peliculaService = {
    listarPeliculas,
    crearPelicula,
    eliminarPelicula,
    actualizarPelicula 
};