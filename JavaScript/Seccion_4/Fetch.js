// fetch() es una función de JavaScript que permite hacer peticiones HTTP (como GET(Obtener datos) o POST(enviar datos)) 
// a un servidor y obtener una respuesta. 
// Esta función retorna una promesa que se resuelve con los datos de la respuesta.

// En resumen, fetch() es una herramienta poderosa y flexible que te permite interactuar con un 
// servidor y obtener datos dinámicos en tu aplicación web.


//Sintaxis:
// fetch("URL") palabra reservada que entre parentesis y comillas contiene la ruta a consultar
//.then() contiene una funcion para tratar los datos, en este caso convertir 
// los datos recibidos en un formato json.
// .catch() contiene una funcion para tratar los errores, en este caso muestra un mensaje en consola.


let personaje = parseInt(Math.random()*826)
const buscar = fetch("https://rickandmortyapi.com/api/character/"+personaje);
/* let datosObtenidos; */

try{buscar
    .then(
        (res) => {
            console.log(`Esto es el JSON: ${res}`)
            return res.json()
        }
    )
    .then(
        //se usa la variable por que se retorno arriba con el return
        res => {
        console.log(`Esto es el JSON LUEGO de ser transformado a objeto`)
        console.log(res)
        
        document.getElementById("nombre").innerText = res.name
        document.getElementById("ciudad").innerText = res.location.name
        document.getElementById("imagen").setAttribute("src",res.image)
        document.getElementById("especie").innerText = res.species
    }        
    )
    .catch(
        err => console.log(`Error: ${err}`)
    )
}
catch(err){
    console.log(err)
}