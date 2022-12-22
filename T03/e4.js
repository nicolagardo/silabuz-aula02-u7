const l = [
    {
        nombre: "Marcelo",
        edad: 20,
        email: "prueba1@mail.com",
    },
    {
        nombre: "Jorge",
        edad: 25,
        email: "prueba2@mail.com",
    },
    {
        nombre: "José",
        edad: 30,
        email: "prueb3@mail.com",
    },
    {
        nombre: "Marco",
        edad: 32,
        email: "prueba4@mail.com",
    },
    ];
const listaFiltrada = l.filter(e => e.nombre[0] != "M")


let ul = document.createElement("ul");
listaFiltrada.map(e => {
    console.log(e.nombre[0]);
    let nombre = document.createTextNode(e.nombre);
    ul.appendChild(nombre);
    //INFO: Creacion de etiquetas
    let ulSub = document.createElement("ul");
    let liEdad = document.createElement("li"); 
    let liEmail = document.createElement("li");
    // INFO: Creación de texto para insertar en los tags
    let edad = document.createTextNode(e.edad)
    let email = document.createTextNode(e.email)
    // INFO: Agregando el texto a la etiqueta
    liEdad.appendChild(edad)
    liEmail.appendChild(email)

    ulSub.appendChild(liEdad)
    ulSub.appendChild(liEmail)

    ul.appendChild(ulSub)
    
});

document.body.appendChild(ul)