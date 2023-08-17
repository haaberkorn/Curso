"""
input() y print() son dos funciones nativas de Python que se utilizan comúnmente 
para interactuar con el usuario y mostrar información a traves de la consola.

    * La función input() se utiliza para recibir datos ingresados por el usuario a través del teclado. 
    * la función print() se utiliza para mostrar información en la consola.
"""


# Ejemplo 1 (print)
print("Hola mundo")


# Ejemplo 2 (print e input)
print("Ingrese su nombre: ")
nombre = input()
print("Bienvenido", nombre)


# Ejemplo 3: peticion de numeros y suma de valores.

numero1 = int(input("Ingrese el primer numero: "))
numero2 = int(input("Ingrese el segundo numero: "))
print("La suma es: ", numero1 + numero2)
