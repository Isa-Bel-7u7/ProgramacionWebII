const datos =[
    {
        'materia':'Programacion Web',
        'calificacion':70
    },
    {
        'materia':'Base de Datos II',
        'calificacion':10
    },
    {
        'materia':'Robotica',
        'calificacion':80
    },

    {
        'materia':'Programacion Movil',
        'calificacion':50
    },
    {
        'materia':'English',
        'calificacion':60
    },
    {
        'materia':'Programacion III',
        'calificacion':70
    },
    {
        'materia':'Animacion Digital',
        'calificacion':80
    },
    {
        'materia':'IOT',
        'calificacion':65
    },
    {
        'materia':'Matematica Computacional',
        'calificacion':75
    },
    {
        'materia':'Algrbra',
        'calificacion':90
    },
];

let materiaSeleccionada = '';
const notaAprobada = 51;
for (let i = 0; i < datos.length && notaAprobada =='';i++) {
    if(datos[i].calificacion <= notaAprobada){
        materiaSeleccionada=datos[i].materia;
    }
} 

if(materiaSeleccionada == ""){
    console.log("--..");
}
else{
    console.log("--------");
}