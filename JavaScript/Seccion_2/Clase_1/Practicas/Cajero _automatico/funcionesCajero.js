/* Practica 1 */

/* 
    Defina toda la logica de un cajero automatico.

    Debe mostrar un menu con las opciones:
        Retirar
        Depositar
        Consultar Saldo
        Transferir
*/


// Saldo base
let Saldo = 1000;

//Menu
let menu = +prompt(`Bienvenido al cajero automatico
Que desea hacer:
1) Consultar
2) Retirar
3) Depositar
4) Transferir`,"Ingresa la opcion es numero"
)




switch(menu){
    case 1:
        alert(`Tu saldo actual es ${Saldo}`);
        break;
    case 2:
        // Ingreso a  monto a retirar 
        let retiro = +prompt("Ingresa el monto a retirar");
        // Inciar la funcion y enviar un parametro, en este caso la varibaale que contiene el monto a retirar
        retiroDecajero(retiro);
        break;
    case 3:
        //Pedimos el monto a depositar
        let montoADepositar = +prompt("Ingresa el monto a depositar","Ingresa valor en numero");

        // Inciar la funcion y enviar un parametro, en este caso la varibaale que contiene el monto a depositar
        depositoDinero(montoADepositar);
        break;
    case 4:

        //Creamos la lista de cunetas
        let cuentas = [500,100,500,25000,1,50];

            
        // Pedimos el monto a transferir
        let montoATransferir = +prompt("Ingresa el monto a transferir","Ingresa valor en numero");

        // Pedimos la cuenta destino
        let cuentaDestino = +prompt("Ingresa la cuenta destino","Ingresa valor en numero");

        switch (cuentaDestino){
            case 1:
                cuentas[0] += montoATransferir;
                Saldo -= montoATransferir;
                alert(`Deposito exitoso
                se depositaron ${montoATransferir}$
                
                Tu saldo es ${Saldo}
                
                Saldo de la cuenta destino es: ${cuentas[0]}`);
                break;
            case 2:
                cuentas[1] += montoATransferir;
                Saldo -= montoATransferir;
                alert(`Deposito exitoso
                se depositaron ${montoATransferir}$
                
                Tu saldo es ${Saldo}
                
                Saldo de la cuenta destino es: ${cuentas[1]}`);
                break;
            case 3:
                cuentas[2] += montoATransferir;
                Saldo -= montoATransferir;
                alert(`Deposito exitoso
                se depositaron ${montoATransferir}$
                
                Tu saldo es ${Saldo}
                
                Saldo de la cuenta destino es: ${cuentas[2]}`);
                break;
            case 4:
                cuentas[3] += montoATransferir;
                Saldo -= montoATransferir;
                alert(`Deposito exitoso
                se depositaron ${montoATransferir}$
                
                Tu saldo es ${Saldo}
                
                Saldo de la cuenta destino es: ${cuentas[3]}`);
                break;
            case 5:
                cuentas[4] += montoATransferir;
                Saldo -= montoATransferir;
                alert(`Deposito exitoso
                se depositaron ${montoATransferir}$
                
                Tu saldo es ${Saldo}
                
                Saldo de la cuenta destino es: ${cuentas[4]}`);
                break;
            case 6:
                cuentas[5] += montoATransferir;
                Saldo -= montoATransferir;
                alert(`Deposito exitoso
                se depositaron ${montoATransferir}$
                
                Tu saldo es ${Saldo}
                
                Saldo de la cuenta destino es: ${cuentas[5]}`);
                break;
            default:
                alert("La cuenta no existe");
        }

        break;
    default:
        alert("Opcion no valdia");
}


/* FUNCIONES */

//Retiro
function retiroDecajero(montoDeRetiro){
    // Si el saldo actual al restarle el monto a retirar queda en menos de 0
    if((Saldo - montoDeRetiro) < 0){
        return alert(`Saldo insuficiente,no se puede retirar ${montoDeRetiro}, tu saldo actual es ${Saldo}`);
    // Si el saldo actual al restarle el monto a retirar queda en 0 o mas
    }else if((Saldo - montoDeRetiro ) >= 0){
        // Deduccion de saldo y reasignacion de saldo base
        Saldo -= montoDeRetiro; // saldo = saldo - montoDeRetiro
        // Salida en pantalla de resultado de la operacion
        alert(`Retiraste ${montoDeRetiro}, tu restante es: ${Saldo}`);
        // Retorno de la variable de saldo base luego de ser actualizada
        return Saldo;
    }
}

//Deposito
function depositoDinero(montoDeDeposito){
    Saldo += montoDeDeposito;
    alert(`Tu saldo actual es ${Saldo}`);
    alert(`Depostito exitoso
    Se agregaron ${montoDeDeposito} a tu cuenta`);
    return Saldo;
}

//Transferencia
function tranferirDinero(){
    
}



        
        
