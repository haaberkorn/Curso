/* Asignacion = : como bien su nombre indica se utiliza para asignar un valor. */

//Indefinida o undefine
//miVariable;

//Definicion de variable
//let miVariable;

//Asignacion a variable
//let miVariable = 10;

//Variable asiganda como string (cadena de texto)
let nombre = "Keyner";
nombre;

//Variable asiganada como numero
let edad = 18;
edad


//Variables asignadas como array (lista y lista2)
let lista = ["Rodriguez", 2023];
console.log(lista[1]);

let lista2 = [1,2,3,4,5,6,7,8,9];

//Mostrar todos los elementos
lista2;

//Mostrar elemento especifico
console.log(lista2[7]);


let lista3 = [1,2,"tres", "verde",true,5,false,undefined];

console.log(lista3[7]);


//variable de tipo objeto

let controlRemoto = undefined


controlRemoto = {
    color: undefined,
    tamano: undefined,
    numeroDeBotones: "10cm",
    tipoDeAlimentacion: "baterias recargables",
    funciona: true
};

controlRemoto

// Mostrar informacion especifica 
console.log(controlRemoto.numeroDeBotones)

//Primer llamado de la propiedad color antes de tener un valor asiganado
console.log(controlRemoto.color)

//Asiganacion de valor a propiedad especifica
controlRemoto.color = "amarillo";

// Segundo llamado a la propiedad color LUEGO de la asignacion de un valor
console.log(controlRemoto.color);

controlRemoto.tamano = "20cm";
console.log(controlRemoto.tamano)





/* Operador de asignacion y suma */
let numero = 0;
let segundoNumero = 25;
numero += 5; //Equivale a decir: numero +5;

numero;
numero += 5;
numero;

numero += segundoNumero;
numero

/* Operador de asignacion y resta */

// /valor actual de la variable luego de mumtar con el operador de asignacion y suma.
numero;

numero -= segundoNumero;
numero;



/* Operador de asignacion y multiplicacion */

numero *= 5;
numero;

/* Operador de asignacion y division */

numero /= 2;
numero;

