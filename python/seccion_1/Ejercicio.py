"""
    Escribe un programa en Python que solicite al usuario ingresar el nombre y la edad de tres personas. 
    El programa debe determinar quién es la persona mayor y mostrar su nombre y edad en pantalla.

    El programa debe realizar lo siguiente:

    1 - Solicitar al usuario que ingrese el nombre y la edad de la primera persona.
    2 - Solicitar al usuario que ingrese el nombre y la edad de la segunda persona.
    3 - Solicitar al usuario que ingrese el nombre y la edad de la tercera persona.
    4 - Utilizar una estructura condicional para comparar las edades y determinar quién es la persona de mayor edad.
    5 - determinar si dicha persona es mayor de edad.
    6 - Mostrar en pantalla el nombre y la edad de dicha persona y si es o no mayor de edad.

    Recuerda utilizar comentarios para documentar tu código y explicar qué hace cada parte. 
    Puedes utilizar variables para almacenar los nombres y edades ingresados por el usuario, y comparar las edades utilizando 
    operadores de comparación.
"""
#varioable de la edad mayor
edad_mayor = 18 
#variable con los nombre que vamos a colocar
nombre1, nombre2, nombre3 = input("Ingrese el nombre de la primera persona: "), input("Ingrese el nombre de la segunda persona: "), input("Ingrese el nombre de la tercera persona: ") 
#variable con la edades que vamos a colocar
edad1,edad2,edad3 = int(input("Ingrese la edad de la primera persona: ")), int(input("Ingrese el nombre de la segunda persona: ")), int(input("Ingrese la edad de la tercera persona: "))

#muestra en pantalla el nombre y la edad de cada usuario
print(f"el primer usuario se llama {nombre1} y su edad es {edad1}\n el segundo usuario se llama {nombre2} y su edad es {edad2}\n el tercer usuario se llama {nombre3} y su edad es {edad3}")

#se compara que edad1 sea mayor de edad y edad1 sea mayor que edad2 y edad3
if edad1 >= edad_mayor and edad1 > edad2 and edad1 > edad3:
    #se imprime que nombre1 es mayor que nombre 2 y nombre3 
    print(f"{nombre1} es mayor de edad y tiene mas edad que {nombre2} y {nombre3} ")
#se compara si edad1 es menor que mayor edad y si edad 1 es mayor que edad2 y edad3
elif edad1 < edad_mayor and edad1 > edad2 and edad1 > edad3:
    #Se imprime  que nombre 1 no es mayor de edad pero es mayor que nombre2 y nombre3
    print(f"{nombre1} no es mayor de edad pero tiene mas edad que {nombre2} y {nombre3}")
#se compara si edad2 es mayor de edad y si es mayor que edad1 y edad3
elif edad2 >= edad_mayor and edad2 > edad1 and edad2 > edad3:
    #se imprime que nombre2 es mayor de edad y tiene mas edad que nombre1 y nombre3
    print(f"{nombre2} es mayor de edad y tiene mas edad que {nombre1} y {nombre3} ")
#se compara si edad2 es menor de edad y si es mayor que edad1 y edad3
elif edad2 < edad_mayor and edad2 > edad1 and edad2 > edad3:
    #se imprime que nombre2 no es mayor de edad pero es mayor que nombre1 y nombre3
    print(f"{nombre2} no es mayor de edad pero tiene mas edad que {nombre1} y {nombre3}")
#se compara si edad3 es mayor de edad y mayor que edad1 y edad2
elif edad3 >= edad_mayor and edad3 > edad1 and edad3 > edad2:
    #se imprime que nombre3 es mayor de edad y tiene mas edad que nombre1 y nombre2
    print(f"{nombre3} es mayor de edad y tiene mas edad que {nombre1} y {nombre2} ")
#se compara si edad3 es menor de edad y mayor que edad1 y edad2
elif edad3 < edad_mayor and edad3 > edad1 and edad3 > edad2:
    #se imprime
    print(f"{nombre3} no es mayor de edad pero tiene mas edad que {nombre1} y {nombre2}")