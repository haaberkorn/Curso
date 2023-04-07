/* Varibales */

/* var: Variables de alcance (Scope) global/ se puede reasignar */
var nombre = "Diego";
nombre; //"Diego"

/* Reasignando valor */
nombre = "Pedro:"
nombre; // "Carlos"

/* let Variables de alcance (scope) limitado / se puede reasignar */
let edad = 30;
edad; //30
edad = 10; // 10
edad = edad + 20; 
edad; //30
edad = edad + 50;
edad; //80

let nombreYapellido = "keyner luque";
nombreYapellido;
nombreYapellido = "juanito Guerrero";
nombreYapellido;



/* const: al igual que let es de alcance (scopre) limitado, nose puede mutar, ni reasignar*/
const apellido = "Luque";
apellido // "Luque"
apellido = //"Avila"; // error
apellido // no retorna por que arrriba hay un error 


