/* 
    Recursividad: es un funcion que se llama a asi misma.
    Piensa en ella como una alternativa al bucle.

*/

function funcRecursiva(){
    console.log("Esto es una funcion recursiva");
    funcRecursiva();
}

//Inicio comnetado para evitar recursividad(repeticion) infinita.
//funcRecursiva();


function funcRecursiva2(){
    console.log("Esto es otra funcion recursiva");
    funcRecursiva()
}

//funcRecursiva2();