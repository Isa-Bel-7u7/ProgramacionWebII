import cards from "./cards.js"; // Importa el módulo de tarjetas para mantenerlas sincronizadas

const tabla = (() => {
    const cuerpoTabla = document.getElementById("taskTable").querySelector("tbody"); // Cuerpo de la tabla

    // Función para agregar una tarea a la tabla
    const addTask = (task) => {
        const nuevaFila = cuerpoTabla.insertRow(); // Crea una nueva fila en la tabla

        // Agrega columnas con los datos de la tarea
        nuevaFila.insertCell(0).textContent = task.task; // Nombre de la tarea
        nuevaFila.insertCell(1).textContent = task.description; // Descripción de la tarea
        nuevaFila.insertCell(2).textContent = task.date; // Fecha de la tarea
        nuevaFila.insertCell(3).textContent = task.priority; // Prioridad de la tarea

        // Columna de acciones (Completar y Eliminar)
        const accionCell = nuevaFila.insertCell(4); // Columna para botones
        const accions = document.createElement("div"); // Contenedor para botones
        accions.className = "actions"; // Clase para estilos

        // Botón para completar la tarea
        const completeButton = document.createElement("button");
        completeButton.textContent = "Completar";
        completeButton.className = "view";
        completeButton.addEventListener("click", () => {
            nuevaFila.classList.toggle("completed"); // Marca o desmarca la tarea como completada
            cards.updateTasks(getTasks()); // Actualiza las tarjetas sincronizadas
        });
        accions.appendChild(completeButton); // Añade el botón al contenedor

        // Botón para eliminar la tarea
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        deleteButton.className = "delete";
        deleteButton.addEventListener("click", () => {
            cuerpoTabla.deleteRow(nuevaFila.rowIndex); // Elimina la fila de la tabla
            cards.updateTasks(getTasks()); // Actualiza las tarjetas sincronizadas
        });
        accions.appendChild(deleteButton); // Añade el botón al contenedor

        accionCell.appendChild(accions); // Añade el contenedor de botones a la fila
    };

    // Función para obtener todas las tareas actuales desde la tabla
    const getTasks = () => {
        return Array.from(cuerpoTabla.rows).map((row) => ({
            task: row.cells[0].textContent,
            description: row.cells[1].textContent,
            date: row.cells[2].textContent,
            priority: row.cells[3].textContent,
            completed: row.classList.contains("completed"), // Verifica si la fila está marcada como completada
        }));
    };

    // Función para actualizar la tabla con un conjunto de tareas
    const updateTasks = (tasks) => {
        cuerpoTabla.innerHTML = ""; // Limpia la tabla actual
        tasks.forEach((task) => addTask(task)); // Agrega cada tarea
    };

    return { addTask, updateTasks, getTasks }; // Exporta las funciones
})();

export default tabla;