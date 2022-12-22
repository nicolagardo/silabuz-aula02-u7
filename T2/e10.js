
const datos = {}

// Solicitando datos al usuario
let nom = prompt("Nombre")
let apellido = prompt("Apellido")
let edad = prompt("Edad")

datos["nombre"] = nom
datos["apellido"] = apellido
datos["edad"] = edad


console.log(`Hola mi nombre es ${datos.nombre} ${datos.apellido}, y tengo ${datos.edad} años`);