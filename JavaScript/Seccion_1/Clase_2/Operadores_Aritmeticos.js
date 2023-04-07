/*
 Se conoce como operador aritmeticos a los simbolos que nos permiten realizar operaciones matematicas, sumar, restar, multiplicar, dividir 
 */

 //suma(+)
console.log(5 + 5); //10
console.log(50 + 5);//55
console.log("5" + 5);//55
console.log("15" + "10");//1510
console.log("keyner" + " luque")//keyner luque

//Suma de variable
let nombre = "keyner ";
let apellido = "Luque";
console.log(nombre + apellido);//keyner luque

let edad = 29;

//Concatenacion
/* let mensaje = "hola, me llamo " +nombre + apellido + " y tengo " + edad + " anos"; */
let mensaje = `hola, me llamo ${nombre} ${apellido} y tengo ${edad} anos de edad`

console.log(mensaje);

//Ejemplo 2 de suma
let numero1 =50;
let numero2= 20;
let numeroString = "100";

total = numero1 + numeroString;
total;

//Reasignacion de variable
total = numero1 + numero2;
total;//70

//Resta (-)
console.log(5 - 4);//1
console.log("5" - 4);//1
/* 
NaN = Not a Number, este error es muy directo, y les puede ayudar mucho a depurar el codigo teniendo en cuenta su significado, de esta manera podran tener una idea de como solucionarlo (dependiendo de lo que se quiera obtener).
*/
console.log("keyner" - 4);//NaN
console.log("25" - "20");//5
console.log(100 -"30");//70

let saldo = 1000;
let monto = 600;

let retiro = saldo - monto;

retiro;

//Multiplicacion
console.log(5 * 5);//25

let valor1 = 30;
let valor2 = 10;
let valorString = "5";

let multiplicar = valor1 * valor2;
multiplicar;//300

//Multiplicacion de numero y string(solo numero)
let multiplicar2 = multiplicar * valorString;
multiplicar2;

//Division
console.log(10 / 2);//5

let num1 = 100;
let num2 = 3;

let resultado = num1 / num2

resultado;

//Tambien existen operadores aritmeticos para operaciones mas complejas;

//Incremento: Agrega uno a su operando.
let numero = 5;
numero++;
numero;//6
numero++;
numero;//7
numero++;
numero;//8
numero++;
numero;//9
numero++;
numero;//10
numero++;
numero;//11
numero++;
numero;//12
numero++;
numero;//13

//Decremento: Resta uno de su operando.
let numeroo2 = 10;
numeroo2--;
numeroo2;//9
numeroo2--;
numeroo2;//8
numeroo2--;
numeroo2;//7
numeroo2--;
numeroo2;//6

//Negacion unitaria : Devuelve el negativo de su operando.
let number = 10;

number = -number
number;//-10
number = -number
number;//10

//Positivo unitario : Intenta convertir el operando en un numero, si aun no lo es.

let cadenaNumero = "2023";
console.log(typeof cadenaNumero)//string

cadenaNumero = +cadenaNumero;

console.log(typeof cadenaNumero)//number

//Exponenciacion / potencia : Calcula la base a la potencia del exponente
let potencia = 5 **2;
potencia;//25

console.log(5 ** 6);//15625

//Funcion raiz cuadrada
console.log(Math.sqrt(25));//25

//Modulo: devulve el ressto de la division entre dos numeros.
//(Se usa comunmente para determinar numero paares e impares)
let modulo = 10 % 2;
modulo;//0
modulo = 10 % 3;
modulo;//1

modulo = 10 % 5.5;
modulo;//1


