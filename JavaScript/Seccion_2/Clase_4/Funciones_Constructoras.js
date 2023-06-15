/* 
    Funcion Constructora:
    Estas funciones permiten la creacion de nuevos objetos en base de una estructura predefinidad(plantilla)

    Las funciones constructora son la forma mas antigua de crear objetos en JavaScript.
    Se define utilizando la palabra clave "function" seguida del nombre de la funcion.

    Una vez definidas se inicializan con la palabra clave "new" para crear un nuevo objeto o instancia 

    Dentro de la funcion, se asignan valores a las propiedades del objeto instanciado utilizando "this".

    NOTA: Es un convenio o buena practica nombrar las funciones constructoras con la primera letra en mayuscula.
    Esto con la finalidad de diferenciar con mas facilidad cuando se esta trabajando con una funcion normal, o una variable.

*/

//Ejemplo 1
function Usuario(miNombre, miApellido, miEdad){
    this.nombre = miNombre,
    this.apellido = miApellido,
    this.edad = miEdad
}
let usuario1 = new Usuario("keyner","Luque",15);
let usuario2 = new Usuario("alanis","martinez",20);
let usuario3 = new Usuario("mushu","luque",155);

usuario1
usuario2
usuario3




