// const numbers =[0,1,2,3,4,5,6,7,8,9,10]
// console.log(numbers)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const pares = numbers.filter(numero => numero % 2 === 0);
const impares = numbers.filter(numero => numero % 2 !== 0);

console.log("Números pares:", pares);
console.log("Números impares:", impares);
