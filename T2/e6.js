const l = [15,20,50,80,40,60]

let num = prompt("Ingrese num a borrar")

const i = l.indexOf(parseInt(num))
console.log("Resultado del indexOf: ",i);
l.splice(i, 1);
console.log(l);
