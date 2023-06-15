/*
    ¿Qué son Eventos?
    Los eventos son la manera en la cual JavaScript controla las acciones de los visitantes en una web 
    y define el comportamiento de la página cuando estos se produzcan. 

    Cuando un usuario visita una página web e interactúa con ella se producen los eventos y con Javascript 
    podemos definir qué queremos que ocurra cuando se produzcan ciertos eventos o situaciones.

    Para entender los eventos es necesario conocer algunos conceptos básicos:

    •	Evento: Es algo que ocurre. Generalmente los eventos ocurren cuando el usuario interactúa con el documento, pero podrían producirse por situaciones ajenas al usuario, como en el caso de que una imagen no este disponible.

    •	Tipo de evento: Es el tipo del suceso que ha ocurrido, por ejemplo, un clic sobre un botón oel envío de un formulario. Cada tipo de elemento de la página ofrece diversos tipos de eventos de JavaScript. 

    •	Manejador de evento: Es el comportamiento que nosotros podemos asignar como respuesta a un evento. Se especifica mediante una función en JavaScript, que se asocia a un tipo de evento en concreto. 
    Una vez asociado el manejador a un tipo de evento sobre un elemento de la página, y cada vez que ocurre ese tipo de evento sobre ese elemento en concreto, se ejecutará el manejador de evento asociado.

    Formas de manejar eventos:
    
    •	Mediante atributos HTML: <button onclick="miFuncion()">Presiona Aquí!</button>

    •	Mediante propiedades JavaScript: elemento.onclick = miFuncion(){ …código… }

    •	Mediante addEventListener():  la forma más recomendable es hacer uso del método .addEventListener(), 
        el cuál es mucho más potente y versatil para la mayoría de los casos.
*/

/* Lista de eventos mas comunes
    Esta es una lista de algunos de los eventos mas usados.

    Eventos del mouse:
    - focus: ocurre cuando el elemento gana el foco.
    - blur: Cuando el elemento pierde el foco.
    - click: ocurre cuando el usuario hace clic sobre el elemento.
    - dblclick: ocurre cuando el usuario hace doble clic sobre el elemento.
    - mousedown: ocurre cuando el usuario presiona el botón del ratón en un elemento.
    - mouseup: ocurre cuando el usuario libera el botón pulsado del ratón sobre un elemento.
    - mouseover: ocurre cuando el usuario mantiene el puntero sobre un elemento.
    - mouseout: ocurre cuando el usuario mueve el puntero fuera de un elemento.
    - mousemove: ocurre cuando el usuario mueve el puntero del ratón sobre un elemento.

    Eventos del teclado:
    - keydown: ocurre cuando el usuario presiona una tecla.
    - keyup: ocurre cuando el usuario libera la tecla.
    - keypress: ocurre cuando el usuario presiona una tecla y la mantiene pulsada.
*/



let botonDeSaludo = document.getElementById("miBoton");

let contador = 0;


/* botonDeSaludo.onclick = () =>{
    console.log(`El contador ahora vale: ${contador += 1}`);
} 
 */

botonDeSaludo.onmousedown = () =>{
    console.log(`El contador ahora vale: ${contador += 1}`);
}

botonDeSaludo.onmouseup = () =>{
    console.log(`El contador ahora vale: ${contador += 1}`);
}


// Calculadora basica usando selectores, eventos y DOM
//Seleccionar input
let primerInput = document.getElementById("numero1");
let segundoInput = document.getElementById("numero2");

//Seleccionar botones
let botonDeSumar = document.getElementById("botonSumar");
let botonDeRestar = document.getElementById("botonRestar");
let botonDeMultiplicar = document.getElementById("botonMultiplicar");
let botonDeDividir = document.getElementById("botonDividir");

//Seleccionar Parrafo donde se muestra el resultado
let parrafoResultado = document.getElementById("resultado");

//Evento de Sumar
botonDeSumar.onclick = () =>{
    parrafoResultado.innerText = `El total de la suma es :${+primerInput.value + +segundoInput.value}`;
}

//Evento de Restar
botonDeRestar.onclick = () =>{
    parrafoResultado.innerText = `El total de la suma es :${+primerInput.value - +segundoInput.value}`;
}

//Evento de multiplicar
botonDeMultiplicar.onclick = () =>{
    parrafoResultado.innerText = `El total de la suma es :${+primerInput.value * +segundoInput.value}`;
}

//Eveneto de dividir
botonDeDividir.onclick = () =>{
    parrafoResultado.innerText = `El total de la suma es :${+primerInput.value / +segundoInput.value}`;
}

//Calculadora con Eval(En una sola linea)
// Eval  como su nombre lo indica  evalu ara una operacion matematica y  fraccionar el contenido para retornar un resultado
document.getElementById("operacion").onclick = () => {
    document.getElementById("parrafoEval").innerText = 
    `El resultado es: ${eval(document.getElementById("inputEval").value)}`}


/* 
    eventListener()

    Con el método .addEventListener() podemos añadir una "escucha" del evento indicado en el primer parámetro, 
    y en el caso de que ocurra, se ejecutará la función asociada indicada en el segundo parámetro.

*/

let botonDeColor = document.getElementById("cambiarColor");

// Agregando escucha de eveneto : parametros (tipo_de_evento, manejar/funcion a realizar)

const colorVerde = () => {
    document.body.classList.remove("from-yellow-400", "to-yellow-900");
    document.body.classList.add("from-green-400", "to-green-900");

}

const colorAmarillo = () => {
    document.body.classList.remove("from-green-400", "to-green-900");
    document.body.classList.add("from-blue-400", "to-blue-900");

}

botonDeColor.addEventListener("click",colorVerde);
botonDeColor.addEventListener("mousedown",colorAmarillo);