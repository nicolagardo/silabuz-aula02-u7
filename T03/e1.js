 const arr =  [1,2,3,4,5,6,7,8];
 
//INFO: forEach con funcion anonima
//  arr.forEach(function(e){
//     console.log(e);
//  });

//INFO: forEach con arrow function

    arr.forEach(e => console.log((e*3)-10))

//INFO: Solución con for clásico
// for (let i = 0; i < arr.length; i++ ) {
//     console.log(arr[i]);
// }