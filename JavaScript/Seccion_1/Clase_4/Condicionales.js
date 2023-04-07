/* 
    Una expresion condicional es un conjunto de instrucciones que evaluan una expresion y solo se ejecutaran si dicha expresion es verdadero.

    JavaScript admite dos expresiones condicionales :(if...else) y (switch)
*/

//if (si)

let nombre = "keyner";

if(nombre === "diego"){
    console.log("El usuario se llama diego");
}

//if-else (Si-Sino)
if(nombre === "diego"){
    console.log("El usuario se llama diego");
}else{
    console.log("El usuario no se llama diego");
}

//if - else if -else (Si - Sino Si -Sino)
let listaDeNombres = ["diego", "pedro", "marcos", "daniela", "maria", "andres"]

if(listaDeNombres[4] === "diego"){
    console.log("El usuario se llama diego");
}
else if(listaDeNombres[4] === "pedro"){
    console.log("El usuario se llama pedro")
}
else if(listaDeNombres[4] === "marcos"){
    console.log("El usuario se llama marcos")
}
else if(listaDeNombres[4] === "daniela"){
    console.log("El usuario se llama daniela")
}
else if(listaDeNombres[4] === "maria"){
    console.log("El usuario se llama maria")
}
else if(listaDeNombres === "andres"){
    console.log("El usuario se llama andres")
}
else{
    console.log("El nombre del usuario no concuenrda con el registro");
}

/* 
    Ejercicio extra 1: Realizar un algoritmo que valide si la suma de 2 numeros es mayor, igual o menor a la multiplicacion de otros 2 numeros.
*/

//Variables para sumar
let num1 = 37;
let num2 = 3;

//variable para multiplicar
let num3 = 5;
let num4 = 8;

//Resultado de la suma
let resultado1 = num1 + num2;
//Resultado de la multiplicacion
let resultado2 = num3 * num4;

if(resultado1 > resultado2){
    console.log("El resultadio de la suma es mayor que el resultado de la multiplicacion");
}else if(resultado2 > resultado1){
    console.log("El resultado de la suma es menor que la multiplicacion");
}else{
    console.log("El resultado de la suma y la multiplicacion son iguales");
}


/* prompt : es una funcion nativa de JavaScript que muestra una ventana de entrada en el navegador. */

//let miNombre = prompt("Ingresa tu nombre");

//console.log(miNombre);

/* 
    Ejercicio extra 2: Realizar un algoritmo que valide si un mensaje(Usuario) en un campo es identico(===) a otro mensaje(Usuario)e otro campo
*/

/* Ejercicio 1 */

// let mensaje1 = prompt("Ingresa la contrasena");
// let mensaje2 = prompt("Ingrese nuevamente la contrasena");
//
// if(mensaje1 === mensaje2){
//    alert("las contrasenan coinciden ");
//} else{
//    alert("las contrasena no coinciden");
//}

/* Ejercico 2 */
//Realiza un algoritmo que sume 2 numeros ingresados mediante prompt y retorne el resultado en un alert

//OPCIONAL: ADEMAS SI LOS NUMEROS NO SE PUEDES SUMAR RETORNA UN MENSAJE DE ERROR EN CONSOLA 


/* let number1 = +prompt("Ingresa el primer numero","1");
let number2 = +prompt("Ingresa otro numero", "1");

let resultadoNumbers = number1 + number2;

if(resultadoNumbers >= 0 || resultadoNumbers <= 0){
    alert( resultadoNumbers );
}else{
    console.error("Estos numeros no se pueden sumar");
} */


/* 
    Operator ternario: El operador ternario es una manera abreviada  de realizar validaciones booleanas  (if-else).
*/

/* let usuario = "keyner";

    (usuario == "keyner") 
    ? console.log("el usuario se llama "+usuario) 
    : console.log("el usuario no se llama "+usuario);

 */


/* let rol = "cliente";

(rol == "administrador")
    ? console.log(`El usuario es ${rol} permisos asignados`)
    : console.log(`El usuario es ${rol} no tiene permisos asignados`);

 */

    /* 
        Switch: Permite ejecutar un bloque de codigo basandose en casos.
        La sintaxis de switch consiste en un aexpression a evaluar y en base a los resultados esperados, se desarrollan los casos a ejecutar, adicional se coloca break para evitar que se ejecuten los demas casos y default para un repuesta por defecto en caso de que ningun caso se cumpla.
    
    */

    let producto = +prompt(
        `Minimarket 🤩
        Que deseas comprar?:
        1) carne
        2) verduras
        3) frutas
        4) dulces
        5) bebidas
        6) productos de aseo personal
        7) productos de limpieza
        8) papeleria
        9) No veo lo que busca`
    );

        switch(producto){
            case 1:
                alert("Compraste carne");
                break;
            case 2:
                alert("Compraste verdura");
                break;
            case 3:
                alert("Compraste frutas");
                break; 
            case 4:
                alert("Compraste dulces");
                break;
            case 5:
                alert("Compraste bebidas");
                break;
            case 6:
                alert("Compraste producto de aseo personal");
                break;
            case 7:
                alert("Compraste producto de limpieza");
                break;
            case 8:
                alert("Compraste papeleria");
                break;
            case 9:
                alert("Pronto llegaran mas producto");
                break; 
            default:              
                alert("Opcion no validad")
                                           
        }





