import Form from "./components/formulario.js";
import taskTable from "./components/tabla.js";
import cards from "./components/cards.js";

(() => {
    Form.setDatos((task) => {
        taskTable.addTask(task);
        cards.update();
    });
})();

// import Form from "./components/formulario.js";
// import Table from "./components/tabla.js";  
// import Cards from "./components/cards.js";
// (()=>{
//     Form.setDatos((task)=>{
//         Table.addTask(task);
//         Cards.update();
//     });
// })();