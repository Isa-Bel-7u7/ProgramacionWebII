document.addEventListener("DOMContentLoaded", () => {
    const taskList = document.querySelector("[data-task-list]");
  
    taskList.addEventListener("click", (event) => {
      if (event.target && event.target.matches("li[data-task-item]")) {
        event.target.classList.toggle("relleno");
      }
    });
  });