// Se crea una clase de tarea que va a generar una lista de array de objetos y esos objetos son las tareas
class Tarea{
    constructor(nombreTarea){
    this.tarea = nombreTarea;
    }
}

// se crea una variable con un array vacio 
let nombres = [];

// Se crea una funcion
const registerTask = () =>{
    // Se obtendra los valores de los elemento del id nombre que es el input donde se escribiran las tareas
    let nuevaTarea = document.getElementById("nombre").value;

    //Se ingresa las tareas al final del array vacio nombres iterando la clase tarea
    nombres.push(new Tarea(nuevaTarea));

    //Se crea una variable que accedera los elemento del id list, que es la lista desorganizada
    let verificar = document.getElementById("list");
    
    //insertara un string vacio en la variable que esta accediendo a la lista desorganizada, antes de entrar al map
    verificar.innerHTML = "";

    // va a mapear cada elemento que se ingresara
    nombres.map(
        (element)=>{
            // crea un elemento tipo li, solo lo crea 
            let nameList = document.createElement("li");
            // carga la informacion al el elemento que se mapeo (ingreso en input)
            nameList.innerText = (`${element.tarea}`);
            //Agregando el  li ya antes creado y mostrando la informacion ya antes cargada 
            verificar.appendChild(nameList);

            nameList 
        }
    )
    console.log(nombres);
    
}
    // Accediendo al elemento id, en este caso el boton
    let botonRegistrar = document.getElementById("register");
    // Escuchando con eventos cuando hagas click, mostrar la informacion de la funcion 
    botonRegistrar.addEventListener("click", registerTask);




