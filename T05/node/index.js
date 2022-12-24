const express = require("express")

const app = express()

const PORT = 3000
//INFO: Ruta con su controlador
app.get('/', (req, resp) =>{
    resp.send('¡Hola, Mundo editado de nuevo!')
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
    console.log(`http://localhost:${PORT}`);
   
})


