const l =  ["Hola", "Amigos", "Hoy", true]

let palabra = prompt("Ingrese palabra")

let recorte  = l.unshift(palabra)
let recorte2  = l.push(palabra)

console.log(l);
console.log(recorte);
alert(l)