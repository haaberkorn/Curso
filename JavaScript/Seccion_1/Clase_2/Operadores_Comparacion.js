/* Se conoce como operadores de comparacion a los simbolos que nos permite realizar operaciones binarias (entre 2 elementos) de comparacion */

// Igual que == : Devuelve true(Verdadero) si los elementos son iguales
// Y retorna false (falso) si no son iguales
//(No toma en cuneta el tipo de dato, solo el valor)

// true
console.log(1 == 1); //true
console.log("1" == 1); //true 

let a = "a";

console.log(2 == 1); //false
console.log("2" == "3")//false
console.log( "a" == a); //true

/* No es igual que != : Devuelve true si los operadores No son iguales, es decir si son diferentes.
*/

console.log( 1 != "1") //false
console.log(1 != "2") //true
console.log("Keyner" != "keyner") //true
console.log("a" != "A") //true


/* Estricatamente igual que === retorna true SI y solo SI el valor el valor y el tipo de dato es el mismo */

console.log( "1" === 1); //false
console.log( "1" === "1") //true
console.log("keyner" === "keyner") //true
console.log("Keyner" === "keyner")//false

/* Desigualda estricta !== : Retorna true SI y SOLO SI el valor y/o el tipo de dato NO ES EL MISMO. 
*/

console.log(1 !== 1) //false
console.log("1" !== 1)//true


/*  mayor que > : Devuelve true si el operador izquierdo es mayor que el operando derecho */

console.log(2023 > 2022)//true
console.log(2023 > 2025) //false
console.log("2023" > 2022)// true
console.log("2023" > "3022")//false

/* menor que <: devuelve true si el operando izquierdo es menor que el operando derecho */


console.log(2023 < 2022)//false
console.log(2023 < 2025) //true
console.log("2023" < 2022)// false
console.log("2023" < "3022")//true
console.log("600" < 700);//true 
console.log(500 < "450");//false

/* MAyor o igual que >= devuelve true si el operando izquierdo es mayor o igual que el operando derecho*/

console.log(50 >= 60)//false
console.log(50 >= 50)//true
console.log("45" >= 30)//true
console.log(45 >= "46") //false
console.log(45 >= "45")//true
console.log("70" >= 70)//true


/* Menor o igual que <= : Devuelve true si el operando izquierdo es menor o igual que el operando derecho.*/

console.log(2 <= 1);//false
console.log(1 <= 2);//true
console.log(1 <= 1);//true


