const cards = (() => {
    const taskCards = document.getElementById("taskCards"); // Contenedor de tarjetas

    // Función para actualizar las tarjetas dinámicamente
    const updateTasks = (tasks) => {
        taskCards.innerHTML = ""; // Limpiar las tarjetas actuales
        tasks.forEach((task) => {
            const card = document.createElement("div"); // Crear una nueva tarjeta
            card.className = "taskCard"; // Clase para estilos

            // Contenido de la tarjeta
            card.innerHTML = `
                <p><strong>Nombre:</strong> ${task.task}</p>
                <p><strong>Descripción:</strong> ${task.description}</p>
                <p><strong>Fecha:</strong> ${task.date}</p>
                <p><strong>Prioridad:</strong> ${task.priority}</p>
                <p><strong>Estado:</strong> ${task.completed ? "Completada" : "Pendiente"}</p>
            `;

            taskCards.appendChild(card); // Agregar la tarjeta al contenedor
        });
    };

    return { updateTasks }; // Exportar la función para usarla en otros módulos
})();

export default cards;