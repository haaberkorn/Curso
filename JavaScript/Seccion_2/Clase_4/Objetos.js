/* 
    Los objetos son una de las estructuras de datos fundamentales.
    Un objeto es un conjunto de pares clave-valor (o key-value) que representan una entidad o un  concepto.
    Las claves son cadenas de texto o simbolos y los valores pueden ser cualquier tipos de datos.
*/

let persona = {

    //clave:  "valor"
    nombre : "Diego",
    apellido: "Rodriguez",
    edad: 15,
    pais: "Venezuela",
    habilidades:["correr","saltar","programar"]
};
console.log(persona.nombre);
console.log(persona.habilidades);
console.log(persona.habilidades[1]);


let mensaje = `Hola, me llamo ${persona.nombre} ${persona.apellido}, tengo ${persona.edad} anos,y vivo en ${persona.pais}, me gusta ${persona.habilidades[0]} y ${persona.habilidades[1]}`;
mensaje;



// Obejto llamado AUTO

let auto = {
    marca: "Chevrolet",
    modelo: "Camaro",
    fecha: "1967",
    motor: "6 en linea",
    trasmision: "Manual",
    colores: ["Negro","Azul","Gris","Rojo"],
    versiones: [{fecha: 1968, techo: "Decapotable"},{fecha: 1969, techo:"transparente"}],
    detalles: function(){
        return (
            `Tengo un auto marca ${this.marca}, tiene un motor ${this.motor} y transmision ${this.trasmision}.`
        )
    },
    avanzando: function(){
        return "EL auto esta avanazando"
    },
    detenido: function(){
        return "El auto esta detenido"
    }
}

// Llmando valores en propiedad
console.log(auto.marca);
console.log(auto.modelo);
console.log(auto.fecha);
console.log(auto.versiones);
console.log(auto.colores);

// Llamando valores en propiedades complejas
console.log(auto.versiones[1].techo);

// Llamando metodos
console.log(auto.detalles());
console.log(auto.avanzando());
console.log(auto.detenido());


// Agregar nueva propiedad (clave) a objeto existente
auto.estado = "nuevo";
console.log(auto.estado);
console.log(auto)


// Agregar nuevo metodos a  objeto existente
auto.choco = function(){
   return "Oh no, el auto choco 🥲"
}
console.log(auto.choco())
console.log(auto);

//agregando otro metodo
auto.gasolina = function(){
    return "El auto se quedo sin gasolina 😭"
}
console.log(auto.gasolina());

//agregando una propiedad (clave)
auto.pais = "Brazil";
console.log(auto.pais)
console.log(auto)

//agregando una lista de paises (Propiedad o clave)
auto.paises = ["chile","colombia","ecuador","venezuela"];
console.log(auto.pais);
console.log(auto);

//Accediendo a un pais especifico de la lista
console.log(auto.paises[2]);

//Agregando una lista de array (Propiedad)
auto.concesionario = [
    {ciudad:"Maracaibo", stock:[100,200]},
    {ciudad:"Caracas", stock:400},
    {ciudad:"Santiago", stock:6200},
    {ciudad:"Bogota", stock:10},
]

console.log(auto.concesionario[0].stock[1]);



