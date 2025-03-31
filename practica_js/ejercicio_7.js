function sumarPropiedad(objetos, propiedad) {
    let suma = 0;

    for (let objeto of objetos) {
        suma += objeto[propiedad];
    }

    return suma;
}

let objetos = [
    { nombre: "A", valor: 10 },
    { nombre: "B", valor: 20 },
    { nombre: "C", valor: 30 }
];
console.log(sumarPropiedad(objetos, "valor")); 