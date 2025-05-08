
document.addEventListener("DOMContentLoaded", () => {
    const inputNewTask = document.querySelector("[data-new-task]");
    const addBtn = document.querySelector("[data-add-btn]");
  
    const verificarInputVacio = () => {
      if (inputNewTask.value.trim() === "") {
        alert("El campo está vacío. Por favor, ingresa una tarea.");
      }
    };
  
    addBtn.addEventListener("click", verificarInputVacio);
  });