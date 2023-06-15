/* 
    - Realiza un algoritmo que determine si algun usuario de una lista de usuario se llama Diego
    - adccional modifica el indice del usuario (si existe) con el nombre Alonso
    - de lo contrario retornar un mensaje que diga el usuario no existe.
*/

let names = ["keyner","snack","luque","diego","hernandez","cesar","pedro","jaimito"];

let someNames = names.some(
    function(element){
        return element === "diego";
    }
);
someNames;

let findNames = names.findIndex(
        function(element){
            return element === "diego"
        }
);

findNames

if (findNames >= 0){
    names[findNames] = "Alonso"
    console.log(names);
}else{
    console.log("El usuario no existe");
}
