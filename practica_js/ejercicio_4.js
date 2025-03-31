const numeros = [4, 6, 8, 9, 10, 11, 14];
const primerPrimo = encontrarPrimerPrimo(numeros);
console.log(primerPrimo); 

function esPrimo(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;

    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}

function encontrarPrimerPrimo(array) {
    for (let i = 0; i < array.length; i++) {
        if (esPrimo(array[i])) {
            return array[i];
        }
    }
    return null; 
}




