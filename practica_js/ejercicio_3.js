function invertirNumero(numero) {
    let numeroInvertido = 0;

    while (numero > 0) {
        numeroInvertido = numeroInvertido * 10 + (numero % 10);
        numero = Math.floor(numero / 10);
    }

    return numeroInvertido;
}


let numero = 12345;
console.log(invertirNumero(numero)); // 54321