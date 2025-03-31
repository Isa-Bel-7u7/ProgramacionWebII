const colors =()=>{
    const i = document.createElement('i');
    i.classList.add("fas","fa-solid", "fa-wand-magic-sparkles" )
    i.addEventListener('click', colors(){
        List.classList.toggle('highLight')

    });

}
export default colors;


 
// Icon Family

// Classic
// Select an Icon Style
// <i class="fa-solid fa-wand-magic-sparkles"></i>

// const checkComplete=()=>{
//     const i =document.createElement('i')// creacion de un icono 
//     i.classList.add("far","fa-check-square","icon")//dando estilos al icono
//     i.addEventListener("click",color)
//     return i;
// }

// const color =(evento)=>{
//     const element= evento.target
//     element.classList.add('fas');
//     element.classList.add('completeIcon');
//     element.classList.remove('far');
// };

// const deleteIcon =()=>{
//     const i = document.createElement('i');
//     i.classList.add('fas', 'fa-trash-alt' , 'trashIcon', 'icon')
//     i.addEventListener('click', eliminarTarea);
//     return i;
// }
// const eliminarTarea=(evento)=>{

//     const parent = evento.target.parentElement;
//     parent.remove();
// }