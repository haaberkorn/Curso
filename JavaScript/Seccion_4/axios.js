/* import axios from "axios";
 */

let boton = document.getElementById("siguiente");
let contador = 1;


// Realizamos una solicitud tipo GET con axios a la api Rick and Morthy
// Realizamos una solicitud tipo GET con Axios a la api de Rick and Morthy
axios.get(`https://rickandmortyapi.com/api/character/${contador}`)
    .then(
        (res)=> { 
            document.getElementById("personaje").setAttribute("src",res.data.image) 
            document.getElementById("nombre").innerText = res.data.name
            document.getElementById("ubicacion").innerText = res.data.location.name
            document.getElementById("especies").innerText = res.data.species
            console.log(res) 
        }
    )
    .catch(
        (err)=>{ console.log(err) }
    );



    // Evento para cambiar de imagen
    boton.addEventListener("click",()=>{
    // Incrementamos la variable contador en 1 con cada click
    contador++

    // Realizamos una solicitud tipo GET con Axios a la api de Rick and Morthy ahora con el contador acrualizado
    axios.get(`https://rickandmortyapi.com/api/character/${contador}`)
    .then(
        (res)=> { 
            document.getElementById("personaje").setAttribute("src",res.data.image) 
            document.getElementById("nombre").innerText = res.data.name
            document.getElementById("ubicacion").innerText = res.data.location.name
            document.getElementById("especie").innerText = res.data.species
            console.log(res.data) 
        }
    )
    .catch(
        (err)=>{ console.log(err) }
    );
});


