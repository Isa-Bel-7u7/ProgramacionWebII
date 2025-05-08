document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.querySelector("[data-toggle-btn]");
    const taskList = document.querySelector("[data-task-list]");
  
    const tacharUltimo = () => {
      const lastItem = taskList.lastElementChild;
      if (lastItem) {
        lastItem.classList.toggle("tachado");
      }
    };
  
    toggleBtn.addEventListener("click", tacharUltimo);
 });