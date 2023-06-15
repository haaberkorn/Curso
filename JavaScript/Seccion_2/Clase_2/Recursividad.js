/* 
    Recursividad: es un funcion que se llama a asi misma.
    Piensa en ella como una alternativa al bucle.

*/

function funcRecursiva(){
    console.log("Esto es una funcion recursiva");
    //funcRecursiva();
}

//Inicio comnetado para evitar recursividad(repeticion) infinita.
//funcRecursiva();


function funcRecursiva2(){
    console.log("Esto es otra funcion recursiva");
    funcRecursiva()
}

funcRecursiva2();

/* 
    Practica

    Crear una funcion recursiva que imprima los numeros de 5 en 5 hasta llegar a 1000 partiendo de 5.

    (usar condicionales(If o Switch)) y evitar usar bucles (for... while)

*/


let numero = 0;

function contar(){
    //Realizo el incremento de la variable de 5 en 5
    numero += 5;
/*     //Evaluar si el  numero luego de ser incrementado es menor o igual a mil
    if(numero <= 1000){
        //mostrar el numero
        console.log(numero);
        // Recursividad implica Voler a llamar la funcion
        contar();
    }
    // Si el numero es mayor  a mil
    else{
        //Mostar mensaje que indicia que la recursividad se detuvo
        console.log(`La recursividad se ha detenido por que el numero ${numero} es mayor a 1000`);
    } */

    switch(numero < 1001){
        case true:
            //Mostrar numero
            console.log(numero);
            // Recursividad implica Voler a llamar la funcion
            contar();
        break;
        default:
            //Mostar mensaje que indicia que la recursividad se detuvo
        console.log(`La recursividad se ha detenido por que el numero ${numero} es mayor a 1000`);

    }
};
contar();


/* 
    En que situaciones usar las funciones recursividad?
    Las funciones recursivas se usan en situaciones en las que un problema puede ser dividido en subproblemas mas pequenos y similares al problema original.

    Por ejemplo: tienes una tarjeta de metro y 10$ de saldo, cada pasaje cuesta 1$ y es descontado por una funcion de deducion, tras 10 viajes tu tarjeta se queda sin saldo, en este momento el sistema que realiza el descuento de saldo te ofrecera la opcion de realizar una recarga, en este momento la funcion de deduccion llama una funcion diferente llamada recargar para el proceso de agregar saldo.
    tras realizar la recargar, esta funcion(recargar) llamara la funcion de deduccion para cobrar tu proximo pasaje.

    en general, las funcionoes recursivas son utiles para problemas que tienen una estructura de llamadas en cascada, mientras que los bucles y estructuras de datos soon mas adecuados para problemas lineales.

*/

