/* 
    LAs funciones de flecha (arrow functions) son una forma abreviada de escribir funciones, En lugar de utilizar la palabra clave "function" se utiliza la flecha "=>" para definir la funcuion.

    NOTA:
    Las funciones de flecha tienen un comportamiento diferente en cuanto el this.
    No tienen su propio objeto this, en su lugar, heredan el this del contexto/scope en el que fueron creadas.

*/

// Por ejemplo, una función tradicional se escribiría así:
/* function suma(a, b) {
    return a + b;
}
console.log( suma(10,20) );
 */

//ejemplo #1
let suma = () => {return 10 + 20}
console.log(suma())

// ejemplo #2
let sumar = (a,b) => a + b;
console.log(sumar(10,90));


// .map() con Funcion de flecha
let mezcla = [100,20,"35","cuatro",51,"6",78,"8","9",10,"once",12,"13"];
let variablePAraStrings = [];
let numerosEnteros = [];


mezcla.map(
    (elemento) => {
        (typeof(elemento) === "string")
            ? variablePAraStrings.push(elemento)
            : numerosEnteros.push(elemento)

        // (typeof(valorDelIndice) === "string")
        //     ? variableParaStrings.push(valorDelIndice)
        //     : (typeof(valorDelIndice) === "number")
        //         ? numerosEnteros.push(valorDelIndice)
        //         : console.log("El dato no se puede almacenar")
    }
)
variablePAraStrings;
numerosEnteros;


// Ejemplo 2 (Saludar a todos los alumnos del array llamado "alumnos" usando .map() y funciones de flecha 
// adicional guardar el saludo en una variable tipo array llamada "saludos");

let alumnos = ["Pedrito","Juanito","Luisita","Camilito","Andreita","Joseito"];
let saludos = [];
saludos;

/* alumnos.map(
    (element,index) => {
        console.log(`Hola ${element}`);
        console.log(` alumno: ${index + 1}) ${element}`)
        saludos.push(`Hola ${element}`);
    }
)
saludos; */


//funcion anonima
alumnos.map(
    function(element,index){
        console.log(`Hola ${element}`);
        console.log(` alumno: ${index + 1}) ${element}`)
        saludos.push(`Hola ${element}`);
    }
);

saludos;

let loquesea

var regex = /^\w+@\w+[a-zA-Z]{4,7}.[a-zA-Z]{1,3}$/;


var correo = "juan@gmail."; 
console.log(regex.test(correo)); // true

var correo = "ana@hotmail.com2";  
console.log(regex.test(correo)); // false

var correo = "luis@outlook.co"; 
console.log(regex.test(correo)); // true