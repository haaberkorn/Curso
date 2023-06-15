/* 
    Iniciemos con un ejemplo:

    Hay una fiesta de un nino y una caja de juguetes

    Si el nino de la casa donde se realiza la fiesta tiene la caja de juguetes en su habitacion, solo las personas que en su habitacion podran jugar con los juguetes de la caja.
    En este caso, la caja de juguetes tiene un scope local en lafiesta

    Pero si el nino lleva la caja de juguetes al patio, todo los nino presentes podran jugar con los juguetes de la caja.
    En este caso , la caja de juguetes tiene un scope global en la fiesta.

    Para resumir, el scope local se refiere a algo que soslo puede acceder en un lugaar especifico, cono la habitacion del nino, mientras que el scope global se refiere a algo que se puede acceder desde otros lugares, como el patio con otros ninos.
*/

/* let variableGlobal = "keyner"

function imprimirNombre(){
    let variableLocal = "luque"

    console.log(variableGlobal);
    console.log(variableLocal);

    console.log(`Mi nombre es ${variableGlobal} ${variableLocal}`);
}

console.log(`Mi nombre es ${variableGlobal}`);
imprimirNombre() */

//scope anidado
let variableGlobal = "keyner";
let variableGlobal2;

function imprimirNombre(){
    let variableLocal = "luque"

    console.log(variableGlobal);
    console.log(variableLocal);

    function funcionLocal(){
        let variableSuperLocal = "variableSuperLocal";
        //Enviar datos de una variable local a una global
        variableGlobal2 = variableSuperLocal;

        console.log(variableLocal);
        console.log(variableGlobal);
        console.log(variableSuperLocal);
        }
        funcionLocal();

    return(`Mi nombre es ${variableGlobal} ${variableLocal}`)
}

console.log(`Mi nombre es ${variableGlobal}`);
imprimirNombre();
console.log(variableGlobal2)