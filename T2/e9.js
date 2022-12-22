const personas = {'Marcelo': 1.80, 'José':1.50, 'Oscar':1.70, 'Jorge': 1.40}

let talla = prompt("Ingrese talla")

for (let i in personas){
    if(personas[i] == talla){
        console.log(i);
        // var txt = document.createTextNode(i);
}
    // let p = document.createElement("p");
    // p.appendChild(txt)
    // document.body.appendChild(p)
}