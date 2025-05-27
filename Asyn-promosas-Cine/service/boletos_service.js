// const API_URL = "http://localhost/cine/apiBoletos.php";;

// const listarBoletos = () => {
//     return fetch(API_URL)
//         .then(res => res.json());
// };

// const crearBoleto = (boleto) => {
//     return fetch(API_URL, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(boleto)
//     }).then(res => res.json());
// };

// const eliminarBoleto = (id_boleto) => {
//     return fetch(`${API_URL}?id_boleto=${id_boleto}`, {
//         method: "DELETE"
//     }).then(res => res.json());
// };

// const actualizarBoleto = (boleto, id_boleto) => {
//     return fetch(`${API_URL}?id_boleto=${id_boleto}`, {
//         method: "PUT",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(boleto)
//     }).then(res => res.json());
// };

// export const boletoService = {
//     listarBoletos,
//     crearBoleto,
//     eliminarBoleto,
//     actualizarBoleto
// };

const SUPABASE_URL = 'https://iqhmealdmiofdoqzzlev.supabase.co'; 
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlxaG1lYWxkbWlvZmRvcXp6bGV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc5MTk1MDMsImV4cCI6MjA2MzQ5NTUwM30.-GnHtii5nvqd3sGvAGPEupS0rPX3FcQlji7Vo_U8KHo'; // Cambia esto por tu API KEY real
const TABLE = 'boletos';
const API_URL = `${SUPABASE_URL}/rest/v1/${TABLE}`;
const HEADERS = {
    'apikey': SUPABASE_KEY,
    'Authorization': `Bearer ${SUPABASE_KEY}`,
    'Content-Type': 'application/json'
};

const listarBoletos = () => {
    return fetch(`${API_URL}?select=*`, { headers: HEADERS })
        .then(res => {
            if (!res.ok) throw new Error('Error al listar boletos');
            return res.json();
        });
};

const crearBoleto = (boleto) => {
    return fetch(API_URL, {
        method: 'POST',
        headers: {
            ...HEADERS,
            'Prefer': 'return=representation'
        },
        body: JSON.stringify(boleto)
    })
    .then(async (res) => {
        if (!res.ok) {
            const text = await res.text();
            throw new Error(text || 'Error al insertar boleto');
        }
        return res.json();
    });
};

const eliminarBoleto = (id_boleto) => {
    return fetch(`${API_URL}?id_boleto=eq.${id_boleto}`, {
        method: 'DELETE',
        headers: HEADERS
    })
    .then(res => {
        if (!res.ok) throw new Error('Error al eliminar boleto');
        return res;
    });
};

const actualizarBoleto = (boleto, id_boleto) => {
    return fetch(`${API_URL}?id_boleto=eq.${id_boleto}`, {
        method: 'PATCH',
        headers: {
            ...HEADERS,
            'Prefer': 'return=representation'
        },
        body: JSON.stringify(boleto)
    })
    .then(async (res) => {
        if (!res.ok) {
            const text = await res.text();
            throw new Error(text || 'Error al actualizar boleto');
        }
        return res.json();
    });
};

export const boletoService = {
    listarBoletos,
    crearBoleto,
    eliminarBoleto,
    actualizarBoleto
};