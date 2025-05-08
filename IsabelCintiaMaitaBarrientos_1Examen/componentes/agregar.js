
document.addEventListener("DOMContentLoaded", () => {
    const inputNewTask = document.querySelector("[data-new-task]");
    const addBtn = document.querySelector("[data-add-btn]");
    const taskList = document.querySelector("[data-task-list]");
  
    const agregarElemento = () => {
      const tarea = inputNewTask.value.trim();
      if (tarea === "") {
        alert("El campo está vacío. Por favor, ingresa una tarea.");
        return;
      }
      const li = document.createElement("li");
      li.classList.add("item");
      li.dataset.taskItem = "";
      li.textContent = tarea;
      taskList.appendChild(li);
      inputNewTask.value = "";
    };
  
    addBtn.addEventListener("click", agregarElemento);
});