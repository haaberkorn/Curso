/* 
    Los strings o cadenas de caracteres cuentan con metodos para ser manipulados, entre los principales metodos se encuentran:

*/

let saludo = " Hola mundo, mensaje de prueba! ";

// Length : No es un metodo, es una propiedad que devuelve la longitud de una cadena. (No recibe parametros)
console.log(saludo.length);

let password = "Keyner"

console.log(password.length);


// toUpperCase() y toLowerCase(); convierten una cadena a mayuscula a minuscula, respectivamente. (No reciben parametros)
console.log(password.toUpperCase());
console.log(password.toLowerCase());


// indexOF() y lasIndexof(): buscas un valor especifico en una cadena y devuelven su posicion.
console.log(password.indexOf("e"));
console.log(password.lastIndexOf("e"));

// slice(): extrae una porcion de una cadena
// slice(star,end)
let saludo_2 = "hola todos!";
console.log(saludo_2.slice(5,10));

//substring(): Extrae una porcion de una cadena
//substring(index, index2)
console.log(saludo_2.substring(10,5));


//replace(): reemplaza un valor especifico en una cadena con otro valor.
let mensaje = "El perro de juanito persigue al raton";
console.log(mensaje.replace("perro","gato"));


// concat(): une dos o mas cadenas.
let nombre = "Keyner";
let saludo_3 = "Hola!, me llamo! "
let mensaje_completo = saludo_3.concat(nombre)

console.log(saludo_3.concat(nombre));

mensaje_completo;

// split(): Divide una cadena en un array de subcadenas, su argumento sirve para delimitar la cadena original.
let articulo = "Divide una cadena en un array. de subcadenas. su argumento sirve. para delimitar la cadena. original.";

console.log(articulo.split("."));
articulo = articulo.split(".");
console.log(articulo);

// trim(): elimina los espacios en blanco al principio y al final de una cadena. (No recibe parametros)
console.log(saludo.trim());
saludo = saludo.trim();
console.log(saludo.length);

// startsWith() y endsWith(); determina si una cadena comienza o termina
// con un sufijo(Secuencia al inicio) o  prefijo(Secuencia al final) especifico.


let usuario = "@usuario_keyner";
let usuario2 = "@usuario_corebik";
let usuario3 = "@r-casapon";

console.log(usuario.startsWith("@usuario_"));
console.log(usuario2.startsWith("@usuario_"));
console.log(usuario3.startsWith("@usuario_"));



let email = "keynerluque@gmail.com";
let email2 = "keynerluque@gmail.info";
let email3 = "keynerluque@gmail.net";

console.log(email.endsWith(".com"));
console.log(email2.endsWith(".com"));
console.log(email3.endsWith(".com"));




