/*
    ¿Que es un Callback?
        Un callback es una función que se pasa a otra función como parametro y se invoca después de que algún evento o proceso ha terminado, de alli el nombre callback que significa: llamar de vuelta.

        Es decir, la funcion receptora cuando es iniciada, recibe una funcion que viene definida en los parametros y es iniciada o llamada dentro de la misma funcion receptora.
*/


// *** EJEMPLO 1 ***

// En este ejemplo, primero defino una funcion que recibe como parametros un array y una funcion callback.

// creacion de la funcion "agregar"

function agregar(miArray, miCallback, nuevoDato) {
    
    // Realizo un proceso con el array recibido como parametro
    miArray.push(nuevoDato);

    // Despues de hacer el proceso ejecuto el callback que es recibido por parametros,
    // este realizara un proceso con los resultados obtenidos en las lineas superiores de la funcion agregar(), 
    // el proceso que realiza el callback se define al iniciar la funcion agregar().

    miCallback();
}

// Defino el array que sera enviado por parametros.
let nombres = ["Jean","Carlos","Jose"];
console.log(nombres)

// Iniciando la funcion agregar().
// El primer parametro es el array nombres.
// El segundo parametro es un callback, una funcion.
// Esta funcion va a llamar de vuelta (callback) datos de la funcion "agregar".

agregar(nombres, () => {console.log(nombres)},"keyner");

agregar(nombres, () => {
console.log(nombres)},"Daniel");

agregar(nombres, () => {
    console.log(`Agregue un nombre al array`);
    console.log(nombres);
},"Adafff");


function algo(){
    {console.log(nombres)}
    
}

agregar(nombres,algo,"Pedro");

/* ------------------------------------------------------------------------ */

// *** Ejemplo 2 *** (Realizar diferentes operaciones con un callback) 

// En este ejemplo se crea una funcion "operacion" que recibira 2 parametros y un callback,
// en su interior solo hay un retorno, en el cual asignará los 2 parametros (num1 y num2 ) recibidos dentro 
// del callback y lo ejecuta.

function operacion(num1, num2, callback){
    return ( callback(num1,num2) );
};

// En esta ocacion el callback suma los 2 parametros que recibe al ser iniciado en la funcion "operacion",
// resliza una logica que es definida en el mismo llamado de la funcion "operacion" y retorna un resultado.

console.log( operacion(5, 4 ,function(a,b){ 
    return a + b
} ) );

console.log( operacion(5, 4, function(a,b){ return a - b} ) );

console.log( operacion(5, 4, function(a,b){ return a * b} ) );

console.log( operacion(5, 4, function(a,b){ return a / b} ) );

console.log( operacion(5, 4, function(a,b){ return a ** b} ) );

console.log( operacion(5, "5", function(a,b){ return a === b} ) );

console.log( operacion(5, 4, function(a,b){ return a < b} ) );

console.log( operacion(5, 4, function(a,b){ return a > b} ) );

console.log( operacion("Hola", "mundo", function(a,b){ return `${a} ${b}!`} ) );


/* ------------------------------------------------------------------------ */

// *** EJEMPLO 3 ***
/*
    Crea una función "iterarArray" que reciba un array y un callback. 
    La función debería iterar sobre el array e invocar el callback para cada elemento.
    
    NOTA: Esto seria un poco similar a la logica del funcionamiento interno de .map()
*/

//              index:0  index:1  index:2  index:3 index:4
let personas = ["Victor","Nelson","Pedro","Keyner","Adaff"];

 console.log(personas[0]);
 console.log(personas[1]);
 console.log(personas[3]);
 console.log(personas[4]);

 // En este ejemplo se usa for con un incremento tradicional para utilizar el valor de 
// la variable "elemento" al realizar el llamado del indice en el array que coincida
// con el ciclo actual.

// El ciclo se repetira mientras "elemento" sea menor a la longitud del array.
/* 
function saludar(parametro){
    
} */

function clonMap(miArray,miCallback){
    for(let elemento = 0; elemento < miArray.length; elemento++){
        miCallback(`Hola ${miArray[elemento]}!`);
    }
}

let saludos =[];

// Al llamar la funcion "clonMap()", se le pasan 2 parametros, un array y un callbak,
// el callback viajara y sera iniciado en la funcion "clonMap()", recibira datos para 
// procesar al retornar, en este caso un string con las palabras "Hola", el elemento que 
// corresponda el ciclo actual, en cada vuelta del for dentro del la funcion "clonMap()",
// y por ultimo un signo de exclamacion "!".

// Al retornar estos datos seran procesados con la logica definica en el llamado de la funcion
// "clonMap()", en este caso es .push con la finalidad de cargar cada string
// recibido desde la funcion, al ser 4 strings cargara el array saludos con 4 saludos distintos.
// uno por cada persona (elemento) del array "personas".

clonMap(personas, (datos_recibidos) =>{
    saludos.push(datos_recibidos);
})

console.log(saludos);

/* --------------------------------------------------------------- */

// *** EJEMPLO 4 ***

/*
    Crea una función "encontrar" que reciba un array y un callback.
    La función debería iterar(recorrer elemento por elemento) sobre el array e invocar el callback para 
    cada elemento.
    
    la función "encontrar" deberá devolver el primer elemento que retorne true en el callback.
*/

// Variable de elementos a evaluar
const numeros = [1,2,3,"4",5,"6"];

//Funcion que itera sobre los elementos
function encontrar(paramArray, paramCallback){

    // Este for se leeria como: Por cada elemendo del array
    for(indice of paramArray){
        // Este if se leeria como: Si elemento retorna true
        if(paramCallback(paramArray[indice])){
            //Si el elemento es true se retorna ese elemento al callback
            return paramArray[indice];
        }
    }

}


let strings = [];

//llamado de la funcion que itera (encontrar), la cual recibe un callback/funcion como parametro
// Este callback verifica si el tipo de dato de un elemento es string.

let datosString = encontrar(numeros, (elemento)=>{
    //if(typeof(elemento) === "string"){
    //    strings.push(elemento);
    //}
    
    // Retornar un elemento que sea true 
    //return typeof(elemento) === "string";
    return typeof(elemento) === "string"
})

console.log(datosString);
//console.log(strings)

/* ---------------------------------------------------------------- */

/*** EJEMPLO 5 ***/
// Elabora una funcion permita añadir elementos a un carrito mediante llamado de callbacks recursivos.

let carrito = "🛒";
console.log(carrito);

//Funcion que agrega un producto al carrito tras 2 segundos y ejecuta un callback.
function agregarProducto(miParametroCallback){
    setTimeout(()=>{
        carrito+= "📦";
        // carrito = carrito + "📦";
        miParametroCallback();
    },2000);
}



// agregarProducto( ()=> console.log( carrito) )




// Callback Hell
agregarProducto(
    function(){
        console.log(carrito);
        agregarProducto(
            function(){
                console.log(carrito);
                agregarProducto(
                    function(){
                        console.log(carrito);
                        agregarProducto(
                            function(){
                                console.log(carrito);
                                agregarProducto(
                                    function(){
                                        console.log(carrito);
                                        agregarProducto(
                                            function(){
                                                console.log(carrito);
                                                agregarProducto(
                                                    function(){
                                                        console.log(carrito);
                                                    }
                                                )
                                            }
                                        )
                                    }
                                )
                            }
                        )
                    }
                )
            }
        )
    }
);






/*
    Hay varias razones por las que los callbacks pueden ser difíciles de entender:

    Conceptualización: Los callbacks son un concepto abstracto y pueden ser difíciles de comprender para aquellos que están empezando en programación, incluso para los programadores con experiencia, toma algo de tiempo y practica dominarlos.

    Naturaleza asíncrona: Los callbacks son un mecanismo para controlar la asincronía, lo cual puede ser un tema un poco desafiante para algunos programadores.

    Complejidad: A veces, los callbacks pueden ser parte de código complejo y anidado, lo que puede hacer que sea difícil entender qué está sucediendo.

    Ausencia de una estructura definida: Los callbacks no siguen una estructura definida como, por ejemplo, las funciones o los bucles, por lo que a veces pueden ser difíciles de seguir y rastrear.

    Sin embargo, con práctica y estudio, los callbacks pueden ser una herramienta muy útil tanto en JavaScript
    commo en otros lenguajes de programación. 
    
    NOTA: Es importante practicar con ejemplos y código propio para comprender realmente cómo funcionan.

    Te invito a que crees tus propios ejercicios y trates de escribir codigo conforme tu nivel de conocimiento lo permita, es normal si las primeras veces no obtienes el resultado deseado y sientes frustracion,pero no te rindas por eso, con el tiempo comenzaras a ver como poco a poco el concepto de callback 
    se vuelve parte de tu experiencia.
*/