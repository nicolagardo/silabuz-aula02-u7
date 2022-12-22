const m = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
rest = (m[0][0] + m[1][1] + m[2][2]) /3
// console.log(rest);
// let suma = 0;
// for(let i = 0; i < m.length; i ++){
//     for (let j = 0; j < m.length; j++) {
//         if (i === j){
//             suma += m[i][j]
//             // console.log(suma);
//         }
//     }
// }
// console.log(suma);


const matriz = [[1,2,3],[4,5,6],[7,8,9]];

let suma = 0;

for (let i = 0; i < matriz.length; i++) {
  suma += matriz[i][i];
}

const promedio = suma / matriz.length;

console.log(promedio);
