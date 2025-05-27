const API_BASE_URL = 'http://localhost/api/conexion_libros.php';

const crearLibro = (titulo, autor, isbn, anio, descripcion) => {
    return fetch(API_BASE_URL, {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ titulo, autor, isbn, anio, descripcion })
    }).then(res => res.json());
};

export const libroService = { crearLibro };