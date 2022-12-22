const array = [1,3,5,2,7,5,5,8,4,8,4,8,4]

let numero = prompt("Ingrese num")
let cont = 0;

// for (let i = 0; i < array.length; i++) {
//     if (array[i] == num)
//     cont += 1;
// }
// console.log(cont);

let result = array.filter(num => num == numero).length
console.log(result);
