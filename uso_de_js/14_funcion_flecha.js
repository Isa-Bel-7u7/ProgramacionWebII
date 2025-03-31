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
const procesarDatos =(datos) =>{
    return datos
    .filter(datos => datos.calificacion > 51)
    .map(datos => {
        const{materia}= datos;
        return materia.length > 5 ? materia.toUpperCase() : materia.toLowerCase() // ? operador terniario
    });
}
const resultado = procesarDa