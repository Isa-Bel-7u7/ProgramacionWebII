const Form = (() => {
    // Recuperamos elementos del DOM
    const form = document.querySelector("[data-form]");
    const inputTask = document.querySelector("[data-input-task]");
    const inputDescription = document.querySelector("[data-input-descripcion]");
    const date = document.querySelector("[data-input-fecha]");
    const inputPrioridad = document.querySelector("[data-input-prioridad]");

    // Obtenemos los datos del formulario
    const datosForm = () => {
        return {
            task: inputTask.value.trim(),
            description: inputDescription.value.trim(),
            date: date.value.trim(),
            priority: inputPrioridad.value.trim(),
        };
    };

    // Validación de los datos
    const validarDatos = (data) => {
        if (!data.task || !data.description || !data.date) {
            alert("Por favor, completa todos los campos.");
            return false;
        }
        if (isNaN(data.priority) || parseInt(data.priority, 10) <= 0) {
            alert("La prioridad debe ser un número entero positivo.");
            return false;
        }
        return true;
    };

    // Enviar datos al servidor (método POST)
    const enviarAlServidor = async (data) => {
        try {
            const response = await fetch("http://localhost:3000/tareas", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) throw new Error("Error al enviar los datos al servidor.");

            const nuevaTarea = await response.json();
            console.log("Tarea guardada:", nuevaTarea);
        } catch (error) {
            console.error("Error:", error.message);
        }
    };

    // Limpiar el formulario
    const reset = () => {
        inputTask.value = "";
        inputDescription.value = "";
        date.value = "";
        inputPrioridad.value = "";
    };

    // Manejo del formulario al enviar datos
    const setDatos = (callback) => {
        form.addEventListener("submit", (evento) => {
            evento.preventDefault(); // Prevenimos comportamiento por defecto
            const datos = datosForm(); // Obtenemos los datos del formulario
            if (validarDatos(datos)) {
                enviarAlServidor(datos); // Enviamos datos al servidor
                callback(datos);         // Actualizamos la UI
                reset();                 // Limpiamos el formulario
            }
        });
    };

    return { setDatos }; // Exportamos la función setDatos
})();

export default Form;