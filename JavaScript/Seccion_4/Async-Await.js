
/* 
    Async-Await es en escencia lo mismo que las promesas, es azucar sintactica, es decir es una manera
    mas facil de interpretar las promesas, sin dejar de ser un proceso asincronico.
*/

// Ejemplo 1

//Variable que contiene datos (Simula un servidor)

const misDatos = [
    {
        nombre:"Diego",
        apellido:"Rodriguez",
        sexo:"Hombre"
    },{
        nombre:"Marcos",
        apellido:"Lopez",
        sexo:"Hombre"
    },{
        nombre:"Maria",
        apellido:"Rondon",
        sexo:"Mujer"
    },{
        nombre:"Diana",
        apellido:"Ramones",
        sexo:"Mujer"
    },{
        nombre:"Isaac",
        apellido:"Duarte",
        sexo:"Hombre"
    }
];

// Promesa de obtencion de datos
const obtenerDatos = () => {
    let misDatos2 = [];
    return new Promise(
        (resolve,reject) => {
            if(misDatos.length > 0){
                setTimeout(
                    () =>{
                        misDatos.map(
                            (indice) =>{
                                misDatos2.push(indice)
                            }
                        )
                          resolve(misDatos2)
                    },3000
                )
            }else{
                reject(`La promesa no se cumplio`)
            }
        }
    )
}

// Funcion que espera la promesa "obtenerDatos" se cumpla para mostrar los datos
// (Esto simula el tiempo de espera entre el cliente y el servidor)

async function buscarDatos(){
    const datosRecibidos = await obtenerDatos();
    //Si quiero hacer algo con la informacion que reciba, hay que hacerlo aca si es iterable o no es iterable
    try{
        console.log(datosRecibidos)
        console.log(datosRecibidos[0].nombre)
        console.log(datosRecibidos[1].apellido)
        console.log(datosRecibidos[2].sexo)
        console.log(datosRecibidos[3].nombre)
    }
    catch(err){
        console.log(err)
    }
}

buscarDatos()
