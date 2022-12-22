const lista =  ["Marcelo","Jorge","José","Linder"]

let div2 = document.querySelector("#lista")
let ul = document.createElement("ul");

lista.forEach(e =>{
    console.log(e);
    let li = document.createElement("li");
    let txt = document.createTextNode(e);
    li.appendChild(txt);
    ul.appendChild(li);

})
div2.appendChild(ul);