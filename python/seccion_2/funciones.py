"""
    Las funciones son bloques de código reutilizable que realizan una tarea específica. 
    Se definen utilizando la palabra reservada "def" seguida del nombre de la función, los parámetros 
    de entrada (si los hay) y dos puntos. 

    El cuerpo de la función se encuentra indentado/tabulado después de la definición. 
    Las funciones pueden tomar cero o más parametros y pueden o no devolver un valor.
"""


""" En JavaSCript una funcion sin parametros luce asi:
    function saludar(){
        console.log("Hola Mundo!");
    }


    Y se llama asi:
    saludar();
"""

# En Python una funcion sin parametro luce asi:




from os import system
def saludar():
    print("Hola Mundo!")


# esta llamando a la funcion
saludar()


# Scope Local y global con una funcion sin parametros:
# La variable llamada "variableUno" es global y se puede acceder desde cualquier parte del programa.
variableUno = 1

# Creamos una funcion sin parametros que use una variable global.


def sumar():
    # Llamando a una variable de scope(alcance) global, dentro de una funcion.
    global variableUno

    # La variable llamada "variableDos" es local y solo puede ser accedida dentro de la funcion.
    variableDos = 2

    print(
        f"La suma de {variableUno} y {variableDos} es: {variableUno + variableDos}")


# sumar()


# Crearndo una funcion con parametros que resta 2 numeros.
def restar(num1, num2):
    print(f"La resta de {num1} y {num2} es: {num1 - num2}")


# Recibiendo datos desde la consola
# respuesta1, respuesta2 = float(input("Ingrese el primer numero: ")), float(input("Ingrese el segundo numero: "))

# restar(respuesta1, respuesta2)


# Ejemplo 2
"""
    Podemos asignar valores predeterminados a los parametros de una función para que no tengamos que 
    proporcionarlos cada vez que llamamos a la función.

    NOTA: Los parametros que tengan valores por defecto deben ir luego de los parametros que se asignaran
    en el llamado de la funcion
"""


def saludo(nombre, apellido="Rodriguez", pais="Venezuela"):
    print(f"Hola, me llamo {nombre} {apellido} y vivo en {pais}")


saludo("Juan", "Perez", "Mexico")
saludo("Diego")
saludo("Cesar", "Lozano")


# Ejemplo 3
# Funciones anonimas/Lambda
"""
Las funciones lambda son funciones anónimas y pequeñas que se pueden definir en una sola línea de código. 
Estas funciones no necesitan ser definidas con un nombre específico y se utilizan a menudo para 
realizar operaciones simples.


# En JavaSCript encontramos las funciones anonimas y funciones de flechas.

- Las funciones anonimas (en JavaSCript) se pueden definir del a siguiente manera:
    const miFuncionAnonima = function (){ console.log("Hola Mundo!"); }

- Las funciones de flecha (en JavaSCript) se pueden definir del a siguiente manera:
    const saludar = () => { console.log("Hola Mundo!"); }

# En Python:
La sintaxis básica de una función lambda es:

nombre = lambda argumentos : expresión
"""


def miFuncionLambda(parametro): return parametro * 2


print(f"El total de la operacion es: { miFuncionLambda(5) } ")
print(f"El total de la operacion es: { miFuncionLambda(10) } ")
print(f"El total de la operacion es: { miFuncionLambda(15) } ")


# NOTA: Las funciones lambda son especialmente útiles cuando se utilizan como argumentos de otras funciones
# que esperan una función como parámetro(callback), como map(), filter(), y reduce().

# map()
# La función map() aplica una procedimiento previamente definido a cada elemento de una lista y
# devuelve una nueva lista con los resultados obtenidos.

# Definimos una lista de números
miLista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Ejemplo de map() sin una funcion Lambda(anonima) (en este caso con una funcion definida)
# Definimos una función que multiplica por 3 un número


def multiplicarPor3(parametro):
    return parametro * 3

# Definimos una variable que se llenara con los elementos procesados por la función map()
# y formateamos a tipo "list" para poder mostrarlo en consola.


# Nombre_de_Variable  map(funcion_a_usar, lista_a_trabajar)
resultadosSinLambda = map(multiplicarPor3, miLista)

print(list(miLista))
print(list(resultadosSinLambda))

# Realizamos el mismo ejemplo, pero en esta ocasion usamos map con una funcion Lambda.

# Definimos una variable que se llenara con los elementos procesados por la función map() y la funcion Lambda en su interior.
resultadosConLambda = map(lambda parametro: parametro * 3, miLista)

print(f"La lista Original es: {list(miLista)}")
print(f"La lista Resultante es: {list(resultadosConLambda)}")

# Importamos una libreria "system" del sistema operativo (os), en esta caso la usaremos para limpiar la consola
# del contenido previo impreso.

system("cls")
print("Se limpio la consona 1 vez")

# filter()
# La función filter() crea una lista con los elementos de otra lista que cumplen cierta condición.

# Definimos una lista de numeros
numeros = [3, 5, 8, 10, 12, 13, 15, 16, 17, 18, 19, 20]

# Ejemplo de filter() sin una funcion Lambda(anonima) (en este caso con una funcion definida)

# Definimos una función que devuelve True si el número es par


def esPAr(parametro):
    return (parametro % 2) == 0


# Formateamos como lista/array y usamos filter para crear una lista con los números pares de la lista numeros
numerosPares = list(filter(esPAr, numeros))

print(list(numeros))
print(numerosPares)
