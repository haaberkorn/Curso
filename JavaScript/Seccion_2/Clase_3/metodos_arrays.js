/* 
    Un array es un objeto que contiene una coleccion ordenada de valores.
    Cada valor se almacena en una posicion especifica dentro del array, 
    y se puede acceder a estos mediante un indice numerico que determian su posicon.

    Los arrays en JavaScript son muy versatil y se utilizan para almacenar y manipular datos de varios tipos, como numetos, cadenas, objetos, etc.

    Se pueden crear arrays vacios o con elementos iniciales y se pueden modificar y acceder a los elementos de una aaray mediante metodos y propiedades

*/

let colores = ["Azul", "Verde", "Naranja","Rojo","Beige"];

// Que es iterar?: Iterar es el proceso de recorrer un conjunto de datos, como una lista o un array.

//Acceder a indices
console.log(colores[0]);
console.log(colores[1]);
console.log(colores[2]);
console.log(colores[3]);
console.log(colores[4]);
console.log(colores[5]);

//Modificar Indice
colores[4] = "Morado";
console.log(colores[4]);

/* Metodos de Arrays  */

//Length: Retorna la longitud de un array.
console.log(colores.length);//Retorna 5 elementos


//push: Agrega elementos al final de un array.
console.log(colores[5]);//undefined
// Push permite agregar elementos al final de una lista o array
colores.push("Celeste","Rosa");
colores.push("0");
console.log(colores[5]);//celeste
console.log(colores[6]);//rosa
colores;


//unshift: Agrega elementos al inicio de un array.
colores.unshift("Uno","Dos");
colores;


//pop: Elimina solo el ultimo elemento al final de un array. 
//No recibe parametros

//Observando la lista antes de ser modificada
colores;

// Guardando el elemento eliminado en una variable
let elementoEliminado = colores.pop();

// Aqui Se elimina un elemento pero no se guarda
colores.pop();


// Observando cual fue el elemento eliminado
elementoEliminado;

// Observando la lista modificada, en este caso se han eliminado 2 elementos.
colores;



//Shift: Elimina solo el 1er elemento al inicio de un array.
colores;


let elementoEliminado2 = colores.shift()

console.log(`Se elimino ${elementoEliminado2}`)

colores;

//index-of: Devuelve la posicion de la primera aparicion de un valor en un array. (Si no existe el valor retorna -1)
colores
console.log(colores.indexOf("Beige"));
console.log(colores.indexOf("Morado"));



/* 
    filter(filtar): es una funcion de los arrays que permite filtrar los elementos mediantes una funcion de retorno booleana.

    La funcion de retorno booleana se aplica a cada elemento del array y solo los elementos para los cuales la funcion devulve true se incluyen en el nuevo array resultante.

    En pocas palabras, este metodo crea un nuevo array con todos los elementos que pasan la prueba implementafa por la funcion indicada.

*/


//Ejemeplo 1 (filter):
let numeros = [1,2,3,4,5,6,7,8,9,10,9,8,7,6,5,4,3,2,1];

let numerosPAres = numeros.filter(
    function(elemento){
        //Funcion de retorno booleano, donde se evalua si el numero es par,
        //En caso de ser true retornara ese numero a una nueva lista.
        return elemento % 2 === 0;
    }
);

let numerosImpares = numeros.filter(
    function(elemento){
        //Funcion de retorno booleano, donde se evalua si el numero es impar,
        //En caso de ser true retornara ese numero a una nueva lista.
        return elemento % 2 === 1;
    }
);

numerosPAres;
numerosImpares;


//Ejemplo 2
let nombres = ["Wilkelert","Luis","Victor","Alfredo","Cesar","Antonio","Ali","Karelys","Pedro","Adaff","Nelson","Waldemar","MiniHacker","Nelson"];

let usuariosIdenticos = nombres.filter(
    function(nombre){
        return (nombre === "Nelson" || nombre === "nelson");
    }
)
usuariosIdenticos;


//Ejemplo 3
let nombresPorLaLEtrasA = nombres.filter(
    function(elemento){
        return(elemento.startsWith("A"))  
     }
)
nombresPorLaLEtrasA;



//Ejemeplo 4
let frutas = ["🍇","🍍","🍇","🍓","🍇","🍎","🍇"];

//Crear un nuevo array llamado uvas y filtrar todos los elementos del array frutas que sean "🍇".

let uvas = frutas.filter(
    function(elemento){
        return elemento === "🍇"
    }
)
uvas;// muestra todas las uvas


//Ejemeplo 5
// Obtener correos que terminan en "@gmail.com" con filter y .endWith()

let correos = [
    "juanito@yahoo.com",
    "pedrito@gmail.com",
    "rubencito@aol.com",
    "juao@yahoo.com",
    "carlos1212@gmail.com",
    "mushu@aol.com",
    "alanis@yahoo.com",
    "pedroElhacker@gmail.com",
    "haru@aol.com",
    "hola@yahoo.com",
    "keyner@gmail.com",
    "miku@aol.com",
    "correo@yahoo.com",
    "correo@gmail.com",
    "rubencitoporsiempre@aol.com",
    "boggie@yahoo.com",
    "diego@gmail.com",
    "ruben@aol.com",
    "rinngo@yahoo.com",
    "ventas@gmail.com",
    "r@aol.com",
];

let correosGmail = correos.filter(
    function(elemento){
        return elemento.endsWith("gmail.com");
    }
);
correosGmail;

let correosYahoo = correos.filter(
    function(elemento){
        return elemento.endsWith("yahoo.com");
    }
);

correosYahoo;

let correosAol = correos.filter(
    function(elemento){
        return elemento.endsWith("aol.com");
    }
);
correosAol;


//find(buscar): devuelve el valor del primer elemento del array que cumpla (retorne true) con la funcion definida.
//Si ningun  elemento cumple con la funcion (si retorna false), devuelve undefined.

let comidas = ["🍖","🥩","🧀","🥓","🥙"];

//Ejemeplo 1 (find);
let queso = comidas.find(
    function(elemento){
        return elemento === "🧀";

    }
);
queso;//queso

//Ejemeplo 2 (find):
//Si busco un elemento que no este en la lista, retorna undefined
let tomate = comidas.find(
    function(elemento){
        return elemento === "🍅";
    }
)
tomate//undefined


let correoGmail = correos.find(
    function(elemento){
        return elemento === "ventas@gmail.com"
    }
)
correoGmail//ventas@gmail.com


//findindex: devuelve la posicion de la primera coincidencia de un elemento en un array.
console.log(comidas);

//Ejemeplo 1 (Cual es la posicion de la tocineta);

let indiceTocineta = comidas.findIndex(
    function(elemento){
        return elemento === "🥓";
    }
);
indiceTocineta;

//Ejemplo 2 (Cual es la posicion del mango?):
//Si no encuntra un elemento retorna -1
let indexMango = comidas.findIndex(
    function(elemento){
        return elemento === "🥭";
    }
);
console.log(indexMango);


//fill: Rellena el array con el elemento indicado desde un indice inicial hasta una posicion
// antes del indice final indicado.
// Ejemeplo: array.fill(elementoNuevo , posicionDeInicio, posicionFinal)


//Ejemplo 1
let compra = ["🥭","🍅","🥓","🥙","🧀","🥩","🍇"];

//como me gusta mucho el helado, voy a reemplazar, "🥓","🥙","🧀" y "🥩" por "🍦".

compra.fill("🍦",2,6);
compra

//Ejemplo 2 
let usuarios = ["Pago","Pago","Deuda","Deuda","Deuda","Pago"];
usuarios.fill("algo",2,3);
usuarios.fill("algo",4,5);
usuarios;

//Every(Todos): devuelve true SI TODOS los elementos del array CUMPLEN con la  funcion proporcionada,
//de lo contrario retorna false.

//Ejemplo 1 (Todos es par?)
let listaNumeros = [1,3,5,7,9,11];

//Se evalua si TODOS los elementos del array son pares 
let todosPares = listaNumeros.every(
    function(elemento){
        return (elemento % 2) === 0;
    }
);
todosPares;//false


//Ejemplo 2 (Todos es impar)
let todosImpares = listaNumeros.every(
    function(elemento){
        return(elemento % 2) === 1
    }
);
todosImpares;//true

//ejemplo 3 (Todo es carne?)
let comida = ["🥩","🥩","🥩","🥩","🥩"];
let verificar = comida.every(
    function(element){
        return element === "🥩";
    }
);
verificar;//true


//some(alguno): devuelve true si alguno de los elementos cumple con la funcion proporcionada,
//de lo contrario devuelve false.
let vegetables = ["🍅","🍆","🥔","🫑","🌽","🍄","🍫"];

//Ejemplo 1 (Alguno es un chocolate?).
let compareVegetables = vegetables.some(
    function(element){
        return element === "🍫";
    }
);
compareVegetables;//true


//Ejemplo 2.0
let vegetables2 = ["🍆","🍆","🍆","🍆","🍆","🍫","🍆","🍆"]
let allvegetables = vegetables2.every(
    function(element){
    return element === "🍆";
}
);
allvegetables;//false

//Ejemplo 3 (Alguno  es el numero 2?)
const numbers = [1,2,3,4,5,7,8,9,10];

const someNumbers = numbers.some(
    function(element){
        return element === 2;
    }
);
someNumbers;//true


