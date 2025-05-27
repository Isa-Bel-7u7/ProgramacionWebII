const API_BASE_URL = 'http://localhost/api/mascotas.php';

const listarMascotas = () => {
    return fetch(API_BASE_URL)
        .then(response => {
            if (!response.ok) throw new Error(`Error al listar mascotas: ${response.statusText}`);
            return response.json();
        })
        .catch(error => {
            console.error("Error en la solicitud de mascotas:", error);
            throw error;
        });
};

const crearMascota = (nombre, especie, edad, id) => {
    const idMascota = crypto.randomUUID();

    return fetch(API_BASE_URL, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idMascota, nombre, especie, edad, id })
    })
    .then(response => {
        if (!response.ok) throw new Error(`Error al crear mascota: ${response.statusText}`);
        return response.json();
    })
    .catch(error => {
        console.error("Error creando mascota:", error);
        throw error;
    });
};

const eliminarMascota = (idMascota) => {
    return fetch(`${API_BASE_URL}?idMascota=${encodeURIComponent(idMascota)}`, {
        method: "DELETE"
    })
    .then(response => {
        if (!response.ok) throw new Error(`Error al eliminar mascota: ${response.statusText}`);
        return response.json();
    })
    .catch(error => {
        console.error("Error eliminando mascota:", error);
        throw error;
    });
};

const obtenerMascota = (idMascota) => {
    return fetch(`${API_BASE_URL}?idMascota=${encodeURIComponent(idMascota)}`)
        .then(response => {
            if (!response.ok) throw new Error(`Error al obtener la mascota: ${response.statusText}`);
            return response.json();
        })
        .catch(error => {
            console.error("Error obteniendo mascota:", error);
            throw error;
        });
};

const actualizarMascota = (nombre, especie, edad, id, idMascota) => {
    return fetch(API_BASE_URL, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, especie, edad, id, idMascota })
    })
    .then(response => {
        if (!response.ok) throw new Error(`Error al actualizar mascota: ${response.statusText}`);
        return response.json();
    })
    .catch(error => {
        console.error("Error actualizando mascota:", error);
        throw error;
    });
};

export const mascotaService = {
    listarMascotas,
    crearMascota,
    eliminarMascota,
    obtenerMascota,
    actualizarMascota
};
