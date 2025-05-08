document.addEventListener("DOMContentLoaded", () => {
    const countBtn = document.querySelector("[data-count-btn]");
    const taskList = document.querySelector("[data-task-list]");
    const output = document.querySelector("[data-output]");
  
    const contarItems = () => {
      const items = taskList.querySelectorAll("li[data-task-item]");
      output.textContent = "Número total de items: " + items.length;
    };
  
    countBtn.addEventListener("click", contarItems);
  });