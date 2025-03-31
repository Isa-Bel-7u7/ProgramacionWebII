function numeroMasRepetido(numeros) {
    let contador = {};
    let maxNumero = numeros[0];
    let maxConteo = 1;

    for (let numero of numeros) {
        if (contador[numero] == null) {
            contador[numero] = 1;
        } else {
            contador[numero]++;
        }

        if (contador[numero] > maxConteo) {
            maxConteo = contador[numero];
            maxNumero = numero;
        }
    }

    return maxNumero;
}

let numeros = [1, 2, 2, 3, 3, 3, 4];
console.log(numeroMasRepetido(numeros)); 