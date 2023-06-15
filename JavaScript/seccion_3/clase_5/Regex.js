/* 
    ¿Qué Son Expresiones Regulares?
    Las expresiones regulares(también conocida como regexp o regex) son una secuencia de caracteres que forman un patrón de búsqueda, y se utilizan para hacer comparaciones con texto. Son una herramienta poderosa para manipular y validar texto, y se pueden utilizar en conjunto con métodos de JavaScript como .match(), .replace() .test() etc..

        1234567-12
    Se utilizan en muchos lenguajes de programación, incluyendo JavaScript, para verificar si una cadena de texto cumple con un determinado patrón o para reemplazar texto por un patrón determinado. Las expresiones regulares están escritas entre barras / y pueden incluir una combinación de caracteres 
    literales y caracteres especiales que representan un conjunto de caracteres posibles. 
    
    Por ejemplo, la expresión regular /\d{3}-\d{3}-\d{2}-\d{2}/ busca un número de celularen formato 111-111-11-11.
    
    Se pueden usar en una gran variedad de tareas, como validación de formularios, extracción de información 
    de un párrafo etc...

    Sintaxis:
    • const regexp = /".e.t."/i;

    Coincidencias Basicas
        .       - Cualquier Caracter, excepto nueva linea
        \       - Indica que el siguiente caracter se debe tratar de manera especial o "escaparse".
        \d      - Cualquier Digitos (0-9)
        \D      - No es un Digito (0-9)
        \w      - Caracter de Palabra (a-z, A-Z, 0-9, _)
        \W      - No es un Caracter de Palabra.
        \s      - Espacios de cualquier tipo. (espacio, tab, nueva linea)
        \S      - No es un Espacio, Tab o nueva linea.

        Limites
        \b      - Limite de Palabra
        \B      - No es un Limite de Palabra
        ^       - Inicio de una cadena de texto
        $       - Final de una cadena de texto

        Cuantificadores:
        *       - Coincide con 0 o más ocurrencias del patrón anterior.
        +       - Coincide con 1 o más ocurrencias del patrón anterior.
        ?       - Coincide con 0 o 1 ocurrencia del patrón anterior.
        {3}     - Numero Exacto
        {3,4}   - Rango de Numeros (Minimo, Maximo)
        {3,}     - Desde un numero en adelante

        Conjuntos de Caracteres
        []      - Caracteres dentro de los brackets
        [^ ]    - Caracteres que NO ESTAN dentro de los brackets

        Grupos
        ( )     - Grupo
        |       - Uno u otro

    probar en: http://regexr.com/77g8v

    .match y .replace son métodos de manipulación de strings en JavaScript que pueden ser útiles para buscar y reemplazar patrones de texto en una cadena.

        - El método .match() se utiliza para buscar una coincidencia en una cadena con una expresión regular (regex) o una subcadena. Devuelve un array con las coincidencias o null si no hay ninguna coincidencia.

        - El método .replace() se utiliza para reemplazar una coincidencia en una cadena con una nueva subcadena. 
        Devuelve una nueva cadena con el reemplazo realizado.
*/

let parrafo = 
`Con las expresiones regulares podemos realizar busquedas de secuencias o patrones de caracteres, un ejemplo de su uso es al detectar palabras ofensivas en un chat, o al obtener todos los numeros telefonicos que coincidan con un patron establecido.

contact@vicmantattoo.com

1234567-12345-12-56

Ejemplo: 

Daniel Moran	
daniel_m@hotmail.com
934!123?45@67
www.dmoram.com

Migel Soto
934-234-56-78
miguel123@outlook.com
https://www.miguel.com.cl
 
58 424 6692495

Camila Duran
412 345 67 89
www.camila.shop
carlitos@tucorreo.com
cami-duran@gmail.com`
58-424-6692495

;


const regex10 = /^+?(\d{2,3})\s?(\d{2,6})\s?(\d{1,11})$/;
//Definiendo expresion regular 
// (busqueda global caracteres u,n)
// (g= buscar todas las coincidencias, i= sin distincion de mayusculas, m= busca en todas las lineas)
const regex = /un/g;

//realizando busqueda
// .match() buscas coincidencias entre una expresión regular y el texto que está siendo evaluado. 
// Devuelve un arreglo (array) que contiene las coincidencias encontradas, 
// o null si no se encontraron coincidencias.

let busqueda = parrafo.match(regex);

console.log(busqueda);



// Ejemplo deteccion de patron nunerico

//Definir expresion regular (regex2)
const regex2 = /\d\d\d.\d\d\d.\d\d.\d\d/g;
const regex3 = /\d\d\d\s\d\d\d\s\d\d\s\d\d/g;
const regex4 = /\d\d\d\-\d\d\d\-\d\d\-\d\d/g;



//Busqueda con cuantificadores
//#Ejemplo 1
const regex5 = /\d{2,3}\-\d{2,6}\-\d{1,11}/g;

//Ejemeplo 2
const regex6 = /\d{7}\-\d{5}\-\d{2}\-\d{2}/g;


console.log(parrafo.match(regex2));
console.log(parrafo.match(regex3));
console.log(parrafo.match(regex4));

// Resultado de busqueda que usa cuantificadores
console.log(parrafo.match(regex5))

console.log(parrafo.match(regex6));



// Ejemplo Correo:
// La expresion debe contener: 
// caracter de palabra de 1 o mas, 
// caracter @ seguido de caracter de palabra entre 1 a 7, outlook
// seguido de .com
// ademas, obtener todas las concidencias sin distincion de mayusculas

//Definicion la expresion regular
const emailRegex = /\w+\@\w{2,12}\.com/gi;

console.log(parrafo.match(emailRegex))


/* replace() */
// Reemplazar una palabra en una cadena
let oracion = "El tonto persigue al raton";
/* console.log(oracion.replace("tonto","gato")); */

/* 
    .test()
    Podemos verificar si una cadena de texto contiene una 
    secuencia de caracteres 
    
    En caso de poseerlo retorna true y  en caso de NO poseerlo retorna false
*/

//Verificar si la expresion se encuentra en el parrafo
// .test() retorna true si la expresion regular encuentra una coincidencia en la bsuqueda

const testeo = /tonto/gi
/* console.log(testeo.test(oracion));  */  

if(testeo.test(oracion)){
    oracion = oracion.replace("tonto","******");
    console.log(oracion)
}else{
    console.log("La palabra no se encuentra en la oracion");
}

// Clasifica los correos segun su dominio en diferentes variables, usando RegEx.

let correos = `
diego@gmail.com
francisco@yahoo.com
alejandra@outlook.com
VAlentina@gmail.com
alexnis@hotmail.com
mario@yahoo.com
luis@outlook.com
maria@HOTMAIL.com
fulanito@info.com
sutanito@no-reply.com
`;

//Definir busquedas
let gmailRegEx = /\w+\@gmail\.com/gi;
let yahooRegEx = /\w+\@yahoo\.com/gi;
let outlookRegEx = /\w+\@outlook\.com/gi;
let hotmailRegEx = /\w+\@hotmail\.com/gi;
let infoRegEx = /\w+\@info\.com/gi;
let no_replyRegEx = /\w+\@no\-reply\.com/gi

let correosGmail = correos.match(gmailRegEx);
let correosYahoo = correos.match(yahooRegEx);
let correosOutlook = correos.match(outlookRegEx);
let correosHotmail = correos.match(hotmailRegEx);

correosGmail;
correosYahoo;
correosOutlook;
correosHotmail;