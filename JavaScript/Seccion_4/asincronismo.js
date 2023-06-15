/* 
    ¿Qué es el asincronismo?
    El asincronismo es una técnica que permite a los programas ejecutar tareas de manera no bloqueante. 
    Esto permite que el programa puede continuar con otras tareas mientras se completa una tarea asíncrona, 
    en lugar de bloquearse y esperar a que se complete.

    El asincronismo es fundamental para mejorar la experiencia del usuario y mejorar la eficiencia del 
    programa, especialmente cuando se trata de tareas que pueden tardar un tiempo en completarse, como 
    las solicitudes de red y consumo de API´s.

    Hay varias formas de lograr el asincronismo, como promesas, async-await, setTimeout, setInterval
    y la utilización de eventos, cada uno de estos enfoques ofrece diferentes ventajas y desventajas 
    y puede ser apropiado en función del uso que se le quiera dar.

    Para resumir, el asincronismo es una técnica esencial para mejorar la experiencia del usuario y 
    la eficiencia del programa.
*/

// setTimeout(): realiza una accion luego de transcurrido el tiempo indicado 

// Recibe como parametro un callback que es la funcionn  que va a ejecutar en cierto tiempo
setTimeout(
    () => {
        let parrafo = document.getElementById("miParrafo");
        parrafo.innerText = "Este mensaje se a cambiado luego de 5 segundos con la funcion asincrona setTimeout()";
        parrafo.style.color = "red";
        parrafo.style.fontSize = "20px";
    },5000
)

// setTimeval(): Realiza una accion cada cierto tiempo.
let contador = 1;

setInterval(
    () => {
        contador += 1
        let parrafoContador = document.getElementById("conteo");
        parrafoContador.innerText = `La cuenta ahora va por: ${contador}`
},1000
);

//Funcion dedicada para el tiempo
// Captura de objeto de tiempo Date

let time = new Date();
console.log(time);

// Fecha local
console.log(`la fecha actual es ${time.toLocaleDateString()}`);

// Hora local
console.log(`la hora actual es ${time.toLocaleTimeString()}`);


// Obtener ano
console.log(`El ano actual es ${time.getFullYear()}`);

// Obtener mes
console.log(`El mes actual es ${time.getMonth()}`);

//Obtener Dia
console.log(`El dia actual es ${time.getDate()}`);

// Obtener horas
console.log(`La hora actual es ${time.getHours()}`);

// Determinar si la hora en formato 24h sobrepasa las 12h
(time.getHours() > 12)
    ?console.log(`Hola la hora actual es ${time.getHours() -12}`)
    :console.log(`La hora actual es: ${time.getHours()}`)




// Obtener minutos
console.log(`los minutos actuales es ${time.getMinutes()}`);

//Obtener segundos
console.log(`los segundos actuales son ${time.getSeconds()}`);

//Obtener milesimas/milisegundos
console.log(`los milisengudo actuales son ${time.getMilliseconds()}`);



// Base para crear cronometro Reloj
// Base para crear reloj digital
let hora = document.getElementById("hora");
let minuto = document.getElementById("minuto");
let segundo = document.getElementById("segundo");

setInterval(
    ()=>{
        let tiempo = new Date();
        hora.innerText = tiempo.getHours();
        minuto.innerText = tiempo.getMinutes();
        segundo.innerText = tiempo.getSeconds();

        // Reloj en consola
        console.log(`La hora es: ${tiempo.getHours()}:${tiempo.getMinutes()}:${tiempo.getSeconds()}`)
    },1000
);



let relojLinear = setInterval(()=>{let reloj = new Date();document.getElementById("reloj").innerText = reloj.toLocaleTimeString()},1000);

relojLinear()
clearInterval(relojLinear)