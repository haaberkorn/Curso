/* 
    Se conoce como operador logicos a los simbolos que nos permiten realizar operaciones logicas binarias (true - false).

    Ejemplo:

*/

// &: este simbolo se llama ampersand

// AND / y (&&): devuelve true si ambos operandos son true; 
// si uno de los comparando es false devuelve false.
let nombre = "keyner"
let nombre2 = "luque"
let edadkeyner = 19;
let edadluque = 18;

console.log(true && true);  
console.log(false && true);  
console.log((1 + 1 == 2) && (4 - 2 == 2));  
console.log((1 + 1 == 2) && (4 - 2 == 3));  
console.log(("keyner" == nombre) && (nombre2 == "luque") );  
console.log((nombre == "keyner") && (nombre2 == "luque") && ((edadkeyner > 17) && (edadluque >= 18)));  




// |: Este simbolo se llama barra vertical
// OR / o ||: Devuelve true si ALGUNO de los operandos es true.
// SI AMBOS SON FALSON, DEVUELVE FALSE.


let nombre3 = "nelson";
let nombre4 = "cesar";
let contrasena = false;
let claveEspecial =true;

console.log(true || false);
console.log(false || false);
console.log((nombre3 == "nelson" && ( contrasena == true|| claveEspecial == true)));



/*
    NOT / Negacion ! : Invierte el valor booleano de su operando, es decir...
    Si es true retornara false, si es false retornara true. 

*/

contrasena;
console.log(!contrasena);
console.log(true && !true)

console.log((nombre3 == "nelson" && ( contrasena == true|| claveEspecial == !true)));

/* Actividad para realizar en clase */

//Facil
// uno es igual a false o false
let uno = !true || false;
console.log(uno)//false

let dos = false && !false
console.log(dos);//falso

let tres = true && !true
console.log(tres)//false


//Medio

let cuatro = ( 5 === 5) || (!true);
console.log(cuatro);//true

let cinco = (!0) || (5 < 0);
console.log(cinco);//true

let seis = (3 > 4) && (!0);
console.log(seis);//false

//avanzado

let siete = ((false || true) && (!false && true)) || (true && false);
console.log(siete);

let ocho = (6 === 3+3) && (9/3 >=3);
console.log(ocho);//true

let nueve = (!(!false) || (("1" ==1)) && (!false === true));
console.log(nueve);

//hardcore

let  diez = !(!true) === !(!(5 >= 5));
console.log(diez)//true

let once = !(true && (!true === !(!(8 === 4*2))));
console.log(once);

//ultra-hardcore
let doce = !(true && (!true === !(!(16 === (4*2) + 8)))) !== (false);
console.log(doce);//true

//leyenda
let trece = !(((!(!(10 / 5 == "2") === false) !=false) === ((5 * 5) <= (100 / 4))) && (!((1 + 1) !== (10 / 5)) !== (true)));
console.log(trece);