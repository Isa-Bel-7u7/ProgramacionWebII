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
]
const notaAprobacion = 51;
let i = 0;
let materiaSeleccionada = '';
do{
    if(datos[i].calificacion >= notaAprobacion){
        materiaSeleccionada = datos[i].materia;
        break;
    }
    i++;

}
while(i < datos.length && materiaSeleccionada ==''){
    if(materiaSeleccionada == ''){
        console.log('no aprobaste las materias');
    }
    else{
        console.log('la materia aprobada es :' + materiaSeleccionada);
    }
    
}