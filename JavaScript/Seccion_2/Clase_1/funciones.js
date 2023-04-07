/****** FUNCIONES *****/

/* 
    Una funcion es un bloque de codigo que se puede ejecutar multiples veces.  (tantas veces cono deseemos)
    Se puede pensar en una funcion como una "subrutina" que realiza una tarea especifica y devuelve un resultado. 
    las funciones permiten encapsular y reutilizar codigo, lo que hace que el desarrollo sea mas eficiente y facil de mantener.

    sintaxis
        Palabra reservada (function (F. Declarativa) var (F. de Expresion)).
        Nombre de funcion (Para las f. de expresion se suelen dejar como anonimas).
        Parentesis () donde se indican los parametros.
        Llaves {} que contienen el proceso a realizar.
        IMPORTANTE: cada sentencia dentro de una funcion debe finalizar con;

*/


let nombre = "keyner"
/* Funcion sin parametros */
//Declarativa
function imprimiSaludo(){
    console.log("Hola keyner");
    console.log("Este mensaje se muestra desde una funcion");
}

/* if(nombre === "keyner"){
    imprimiSaludo()
}else{
    console.log("El usuario no se llama diego")
}

nombre === "keyner"
    ? imprimiSaludo()
    :console.log("El usuario no se llama keyner"); */



/* Funciones de Expresion */
let miFuncion = function(){
    console.log("Hola keyner");
    console.log("Este mensaje se muestra desde una funcion");
}
miFuncion();


/* Funciones con parametros */

/* function saludarPersona(nombrePersona,generoPersona,edadPersona,paisPersona){
    alert(`hola me llamo ${nombrePersona}, soy ${generoPersona} y tengo ${edadPersona} anos de edad y vivo en ${paisPersona}`);
}
saludarPersona("keyner","hombre",30,"Suisa");
saludarPersona("victor","hombre",80,"venezuela");
saludarPersona("pedro","hombre",40,"canada");
saludarPersona("waldemar","hombre",100,"alemania"); */

/* Practica 1 */
//En una funcion, elabora la logica de un cajero automatico que retorne el mensaje: "Saldo insuficiente, tenemos un pelabola aca"
//Cuando el saldo sea menor a 0;

// Saldo base
let Saldo = 1000;

// Saludo de bienvenida e informacion de saldo actual
alert(`bienvenido al cajero automatico tu saldo actual es ${Saldo}`);

// Ingreso a  monto a retirar 
let retiro = +prompt("Ingresa el monto a retirar")

// Definicion de la funcion
function retiroDecajero(montoDeRetiro){
    // Si el saldo actual al restarle el monto a retirar queda en menos de 0
    if((Saldo - montoDeRetiro) < 0){
        return alert(`Saldo insuficiente,no se puede retirar ${montoDeRetiro}, tu saldo actual es ${Saldo}`);
    // Si el saldo actual al restarle el monto a retirar queda en 0 o mas
    }else if((Saldo - montoDeRetiro ) >= 0){
        // Deduccion de saldo y reasignacion de saldo base
        Saldo -= montoDeRetiro; // saldo = saldo - montoDeRetiro
        // Salida en pantalla de resultado de la operacion
        alert(`Retiraste ${montoDeRetiro}, tu restante es: ${Saldo}`);
        // Retorno de la variable de saldo base luego de ser actualizada
        return Saldo;
    }
}

// Inciar la funcion y enviar un parametro, en este caso la varibaale que contiene el monto a retirar
retiroDecajero(retiro);