/* 
    Los bucles son estructuras que nos permiten ejecutar un bloque de codigo varias veces.
    JavaScript admite diferentes tipos de bucles.

    for(in of), while(do-while)
*/

let ciclos = 5;

//for - recorre un bloque de codigo un numero determinado de veces
//for(Inicializador; condicion; tipo incremento){... codigo ...};

for(i = 0; i <= ciclos; i++){
    console.log( i );
    console.log(`ciclos: ${i}`);
}


// Tabla de multiplicar con for
for(i = 0; i <= 10; i++){
    console.log(`${5} x ${i} = ${5*i}`)
}


//mensaje
for(i = 0; i <= 10; i++){
    console.log("Hola")
}


//funcion que reciba un numero mediante prompr y muestre su tabla de multiplicar basica
/* function tabla(){
    let ingreso = +prompt("Ingresa un numero para ver su tabla");
    for(i = 0; i <= 10; i++){
        console.log(`${ingreso} x ${i} = ${ingreso * i}`);
    }
}
tabla(); */











// for/of - Recorre los valores de un array.
// for of con arrays, retorna el valor del indice en el ciclo actual.

let productos = ["celular","tv", "microfono", "estereo", "proyector", "teclado", "ps5"];

// for (elemento of lista){... codifo ...}
for(element of productos){
    console.log(`Me compre un ${element}`);
}

//for in con arrays, No retorna el valor, en su lugar retorna el indice.
for(element in productos){
    console.log(`Indice  ${element}`);
}


// for/in - Recorre las propiedades de un objeto de forma ordenada , seutiliza a menudo para 
// recorrer objetos que NO son arrays.
// Sin embargo es posible recorrer un array con for in, pero el resultado no 
// serian los valores si no los indices.

//ejemplo 1
let persona = {
    nombre : "Luisito",
    edad: 30,
    ciudad:"Bogota",
    telefono:"123-123-12-12",
    email:"luisito@email.com"
}

for(element in persona){
    console.log(element);
    console.log(persona[element]);
}
/* 
//ejemplo 2
let persona2 = {
    nombre : ["Luisito","keyner"],
    edad: 30,
    ciudad:"Bogota",
    telefono:"123-123-12-12",
    email:"luisito@email.com"
}

for(element in persona2){
    console.log(element);
    console.log(persona2[element]);
} */


// ejemeplo 2(Objeto anidados)
let personas = {
Persona1:{
        nombre: "Luisito",
        edad: 30,
        ciudad:"Bogota",
        telefono:"123-123-12-12",
        email:"luisito@email.com"
},
Persona2:{
    nombre: "Luisito",
    edad: 30,
    ciudad:"Bogota",
    telefono:"123-123-12-12",
    email:"luisito@email.com"
},
Persona3:{
    nombre :"Luisito",
    edad: 30,
    ciudad:"Bogota",
    telefono:"123-123-12-12",
    email:"luisito@email.com"
},
Persona4:{
    nombre :"Luisito",
    edad: 30,
    ciudad:"Bogota",
    telefono:"123-123-12-12",
    email:"luisito@email.com"
},
Persona5:{
    nombre:"Luisito",
    edad: 30,
    ciudad:"Bogota",
    telefono:"123-123-12-12",
    email:"luisito@email.com"
}
};

console.log(personas.Persona1.nombre);

for(propiedad in personas){
    console.log(`propiedad : ${propiedad}`);
    console.log(`me llamo ${personas[propiedad].nombre} tengo: ${personas[propiedad].edad} anos, vivo en ${personas[propiedad].ciudad}, mi telefono es ${personas[propiedad].telefono}`)
}