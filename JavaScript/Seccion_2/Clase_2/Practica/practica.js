/* 
    Realiza un algoritmo que:

    1) muestre un mensaje en pantalla indicando una serie de requisitos
    2) pida 2 veces el nombre de  usuario mediante prompt
    3) compare si son identicos
    4) verifique si el usuario tiene al menos 5 caracteres y maximo 15
    5) si comienza con @
    6) si termina con $ 
    7) luego muestra un mensaje en pantalla indicando si el cumple los requisitos
    7.1) en caso de no cumplir todo los requisitos, muestra otro mensaje indicando los requisitos cumplidos y los fallados.
    7.2) en caso de cumplir todo los requisitos, muestra un mensaje en pantalla con el nombre del usuario y un mensaje de felicidades, usuario registrado.
    8) Adicional, muestra un mensaje preguntando si desea reiniciar el proceso (sin loops)

*/


alert(`Por favor leer cuidadosamente
1) Ingresar tu nombre de usuario
2) tiene que tener minimo 5 caracter un maximo de 15 caracter
3) el usuario tiene que comenzar con @ y temrinar con $`);

function repetir(){
let usuario = prompt("ingrese un nombre de usuario");
let usuario2 = prompt("Ingresa nuevamente tu nombre de usuario");

if(usuario != usuario2){
    alert("El nombre no es igual,se desplegara un menu si quiere repetir el proceso y cualquier otra tecla para terminar el proceso");
    decision = +prompt("Ingrese el numero 1 para repetir")
        if(decision === 1){
            repetir();
        }else{
            alert("Gracias por participar");
        }
}else if(usuario == usuario2 && usuario.length >= 5 && usuario2.length <= 15 && (usuario.startsWith("@") && usuario.endsWith("$"))){
    alert(`el nombre del usuario es igual, comienza con el caracter "@" y termina con el caracter "$" y tiene ${usuario.length} caracteres lo minimo permitido`);
    alert("Felicidades cumpliste todos los requisitos 😁")
}else if(usuario == usuario2 && usuario.length >= 5 && usuario2.length <= 15 && (usuario.startsWith("@") && !usuario.endsWith("$"))){
    alert(`el nombre del usuario es igual, comienza con el caracter "@" y termina con un caracter distinto a "$" y tiene ${usuario.length} caracteres lo minimo permitido`);
    alert(`te falto el requisito de que el caracter tiene que terminar en "$"`);
}else if(usuario == usuario2 && usuario.length >= 5 && usuario2.length <= 15 && (!usuario.startsWith("@") && usuario.endsWith("$"))){
    alert(`el nombre del usuario es igual, comienza con un caracter distinto a  "@" y termina con el caracter "$" y tiene ${usuario.length} caracteres lo minimo permitido`);
    alert(`te falto el requisito de que el caracter tiene que comenzar en "@"`);
}else if(usuario == usuario2 && usuario.length >= 5 && usuario2.length <= 15 && (!usuario.startsWith("@") && !usuario.endsWith("$"))){
    alert(`el nombre del usuario es igual, comienza con un caracter distinto a "@" y termina con un caracter distinto a "$" y tiene ${usuario.length} caracteres lo minimo permitido`);
    alert(`te faltaron los requisito de que el caracter tiene que comenzar en "@" y tiene  que terminar en "$"`);
}else if(usuario == usuario2 && usuario.length < 5 && (usuario.startsWith("@") && usuario.endsWith("$"))){
    alert(`el nombre del usuario es igual y tiene ${usuario.length} caracteres, comienza con el caracter "@" y termina con el caracter "$" tiene menos de los caracteres permitido por favor ingresar un nuevo usuario`);
    alert(`te faltaron el requisito que el minimo de caracter es 5`);
    decision2 = +prompt("Ingrese el numero 1 para ingresar nuevamente el nombre del usuario");
         if(decision2 === 1){
            repetir();
        }else{
            alert("Sera en otra ocacion que ingreses tu usuario");
        }
}else if(usuario == usuario2 && usuario.length < 5 && (usuario.startsWith("@") && !usuario.endsWith("$"))){
    alert(`el nombre del usuario es igual y tiene ${usuario.length} caracteres, comienza con el caracter "@" y termina con un caracter distinto a  "$" tiene menos de los caracteres permitido por favor ingresar un nuevo usuario`);
    alert(`te faltaron el requisito que el minimo de caracter es 5 y el requisito que tiene que temrinar en $`);
    decision2 = +prompt("Ingrese el numero 1 para ingresar nuevamente el nombre del usuario");
         if(decision2 === 1){
            repetir();
        }else{
            alert("Sera en otra ocacion que ingreses tu usuario");
        }
}else if(usuario == usuario2 && usuario.length < 5 && (!usuario.startsWith("@") && usuario.endsWith("$"))){
    alert(`el nombre del usuario es igual y tiene ${usuario.length} caracteres, comienza con un caracter distinto a "@" y termina con el caracter "$" tiene menos de los caracteres permitido por favor ingresar un nuevo usuario`);
    alert(`te faltaron el requisito que el minimo de caracter es 5 y el requisito que tiene que comenzar en @`);
    decision2 = +prompt("Ingrese el numero 1 para ingresar nuevamente el nombre del usuario");
         if(decision2 === 1){
            repetir();
        }else{
            alert("Sera en otra ocacion que ingreses tu usuario");
        }
}else if(usuario == usuario2 && usuario.length < 5 && (!usuario.startsWith("@") && !usuario.endsWith("$"))){
    alert(`el nombre del usuario es igual y tiene ${usuario.length} caracteres, comienza con un caracter distinto a  "@" y termina con un caracter distinto a  "$" tiene menos de los caracteres permitido por favor ingresar un nuevo usuario`);
    alert(`te faltaron el requisito que el minimo de caracter es 5 y el requisito que tiene que comenzar en "@" y terminar en $`);
    decision2 = +prompt("Ingrese el numero 1 para ingresar nuevamente el nombre del usuario");
         if(decision2 === 1){
            repetir();
        }else{
            alert("Sera en otra ocacion que ingreses tu usuario");
        }
}else if(usuario == usuario2 && usuario.length > 15 && (usuario.startsWith("@") && usuario.endsWith("$"))){
    alert(`el nombre del usuario es igual y tiene ${usuario.length} caracteres, comienza con el caracter "@" y termina con el caracter "$" tiene mas caracteres de lo permitido por favor ingresar un nuevo usuario`);
    alert(`te faltaron el requisito que el maximo  de caracter permitido es 15`);
    decision3 = +prompt("Ingrese el numero 1 para ingresar nuevamente el nombre del usuario");
         if(decision3 === 1){
            repetir();
        }else{
            alert("Sera en otra ocacion que ingreses tu usuario");
        }
}else if(usuario == usuario2 && usuario.length > 15 && (!usuario.startsWith("@") && usuario.endsWith("$"))){
    alert(`el nombre del usuario es igual y tiene ${usuario.length} caracteres, comienza con un caracter distinto a "@" y termina con el caracter "$" tiene mas caracteres de lo permitido por favor ingresar un nuevo usuario`);
    alert(`te faltaron el requisito que el maximo  de caracter permitido es 15 y el requisito que tiene que comenzar en @`);
    decision3 = +prompt("Ingrese el numero 1 para ingresar nuevamente el nombre del usuario");
         if(decision3 === 1){
            repetir();
        }else{
            alert("Sera en otra ocacion que ingreses tu usuario");
        }
}else if(usuario == usuario2 && usuario.length > 15 && (usuario.startsWith("@") && !usuario.endsWith("$"))){
    alert(`el nombre del usuario es igual y tiene ${usuario.length} caracteres, comienza con el caracter "@" y termina con un caracter distinto a  "$" tiene mas caracteres de lo permitido por favor ingresar un nuevo usuario`);
    alert(`te faltaron el requisito que el maximo  de caracter permitido es 15 y el requisito que tiene que temrinar en $`);
    decision3 = +prompt("Ingrese el numero 1 para ingresar nuevamente el nombre del usuario");
         if(decision3 === 1){
            repetir();
        }else{
            alert("Sera en otra ocacion que ingreses tu usuario");
        }
}else if(usuario == usuario2 && usuario.length > 15 && (!usuario.startsWith("@") && !usuario.endsWith("$"))){
    alert(`el nombre del usuario es igual y tiene ${usuario.length} caracteres, comienza con un caracter distinto a "@" y termina con un caracter distinto a  "$" tiene mas caracteres de lo permitido por favor ingresar un nuevo usuario`);
    alert(`te faltaron el requisito que el maximo  de caracter permitido es 15 y el requisito que tiene que comenzar en "@" y  terminar en $`);
    decision3 = +prompt("Ingrese el numero 1 para ingresar nuevamente el nombre del usuario");
         if(decision3 === 1){
            repetir();
        }else{
            alert("Sera en otra ocacion que ingreses tu usuario");
        }
}
}
repetir();


