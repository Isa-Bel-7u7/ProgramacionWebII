// const API_MASCOTAS_URL = 'http://localhost/api/mascotas.php';

// const listarMascotas = () => {
//     return fetch(API_MASCOTAS_URL)
//         .then(response => {
//             if (!response.ok) throw new Error("Error al obtener mascotas");
//             return response.json();
//         })
//         .catch(error => {
//             console.error("Error en la solicitud:", error);
//             throw error;
//         });
// };

// const crearMascota = (nombre, especie, edad, id_cliente) => {
//     return fetch(API_MASCOTAS_URL, {
//         method: 'POST',
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ id: uuid.v4(), nombre, especie, edad, id_cliente })
//     }).then(response => {
//         if (!response.ok) throw new Error("Error al crear mascota");
//         return response.json();
//     });
// };

// const eliminarMascota = (id) => {
//     return fetch(${API_MASCOTAS_URL}?id=${id}, {
//         method: 'DELETE'
//     }).then(response => {
//         if (!response.ok) throw new Error("Error al eliminar mascota");
//         return response.json();
//     });
// };

// const obtenerMascota = (id) => {
//     return fetch(${API_MASCOTAS_URL}?id=${id})
//         .then(response => {
//             if (!response.ok) throw new Error("Error al obtener mascota");
//             return response.json();
//         });
// };

// const actualizarMascota = (nombre, especie, raza, dueño, id) => {
//     return fetch(API_MASCOTAS_URL, {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ nombre, especie, raza, dueño, id })
//     }).then(response => {
//         if (!response.ok) throw new Error("Error al actualizar mascota");
//         return response.json();
//     }).catch(err => console.log(err));
// };

// export const mascotaService = {
//     listarMascotas,
//     crearMascota,
//     eliminarMascota,
//     obtenerMascota,
//     actualizarMascota
// };




const SUPABASE_URL = 'https://jlzgxxcklswdgixzvlvg.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impsemd4eGNrbHN3ZGdpeHp2bHZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4Nzc5NDcsImV4cCI6MjA2MjQ1Mzk0N30.laziHzAoI9YPnXJHHUbO8nOMkUjfrKoRluOkEKO27gs';
const TABLE = 'mascotas';
const API_URL = `${SUPABASE_URL}/rest/v1/${TABLE}`;
const HEADERS = {
    'apikey': SUPABASE_KEY,
    'Authorization': `Bearer ${SUPABASE_KEY}`,
    'Content-Type': 'application/json'
};

// Listar mascotas
// Listar mascotas
const listarMascotas = () => {
    return fetch(`${API_URL}?select=*`, { headers: HEADERS })
        .then(res => {
            if (!res.ok) throw new Error('Error al listar mascotas');
            return res.json();
        });
};
// Crear mascota
const crearMascota = (nombre, especie, edad, id_cliente) => {
    const mascota = {
        nombre,
        especie,
        edad: parseInt(edad),
        id_cliente,
        id: uuid.v4()
    };
    return fetch(API_URL, {
        method: 'POST',
        headers: HEADERS,
        body: JSON.stringify(mascota)
    })
    .then(async (res) => {
        if (!res.ok) {
            const text = await res.text();
            throw new Error(text || 'Error al crear mascota');
        }
        const text = await res.text();
        return text ? JSON.parse(text) : mascota;
    })
    .catch((error) => {
        console.error("Error al crear mascota:", error);
        throw error;
    });
};

// Eliminar mascota
const eliminarMascota = (id) => {
    return fetch(`${API_URL}?id=eq.${id}`, {
        method: 'DELETE',
        headers: HEADERS
    });
};

// Obtener mascota por ID
const obtenerMascota = (id) => {
    return fetch(`${API_URL}?id=eq.${id}`, {
        headers: HEADERS
    })
    .then(res => {
        if (!res.ok) throw new Error('Error al obtener mascota');
        return res.json();
    })
    .catch(error => {
        console.error("Error en obtener mascota:", error);
        throw error;
    });
};

// Actualizar mascota
const actualizarMascota = (nombre, especie, edad, id_cliente, id) => {
    return fetch(`${API_URL}?id=eq.${id}`, {
        method: 'PATCH',
        headers: {
            ...HEADERS,
            'Prefer': 'return=representation'
        },
        body: JSON.stringify({ nombre, especie, edad: parseInt(edad), id_cliente })
    });
};

export const mascotaService = {
    listarMascotas,
    crearMascota,
    eliminarMascota,
    obtenerMascota,
    actualizarMascota
};
