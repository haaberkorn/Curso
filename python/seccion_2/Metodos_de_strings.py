"""
    Los métodos de strings son funciones que se utilizan para realizar operaciones comunes en cadenas de texto.
"""


# len(): devuelve la longitud de la cadena de texto.
from os import system
cadenaDeTexto1 = "lorem ipsum"
print(f"La longitud de la cadena de texto 1 es: { len(cadenaDeTexto1) }")
print(
    f"La longitud de la cadena de texto 2 es: { len(' lorem ipsum otra cosa ') }")


system("cls")  # Limpia la consola del texto previamente impreso.


# count(): Cuenta el número de concurrencias de una subcadena en una cadena.

cadenaDeTexto2 = "Esto, ok, es una cadena de texto, ok, que contiene un mensaje, ok."

print(f"La oracion es: { cadenaDeTexto2 }")
print(f"La palabra ok aparece: { cadenaDeTexto2.count('ok') } veces")
print("Muy bien, no usaste la palabra: ok" if cadenaDeTexto2.count('ok') ==
      0 else f"Puedes mejorarlo, usaste la palabra: ok {cadenaDeTexto2.count('ok')} veces")


system("cls")


# upper(): convierte la cadena de texto en mayúsculas.
nombreUsuario = "hAonteR"

print(f"El nombre de usuario es: {nombreUsuario}")
print(f"El nombre del usuario en mayusculas es: {nombreUsuario.upper()}")


system("cls")


# lower(): convierte la cadena de texto en minúsculas.
nombreUsuarioMayusculas = "COReBIK"

print(f"El nombre de usuario es: {nombreUsuarioMayusculas}")
print(
    f"El nombre del usuario en minúsculas es: {nombreUsuarioMayusculas.lower()}")


system("cls")


# capitalize(): convierte la primera letra de la cadena de texto en mayúscula.
nombreUsuarioMayusculas = "kevinjDURSTEN"

print(f"El nombre de usuario es: {nombreUsuarioMayusculas}")
print(
    f"El nombre del usuario en capitalizado es: {nombreUsuarioMayusculas.capitalize()}")


system("cls")


# replace(): reemplaza una subcadena de una cadena de texto.

# Ejemplo 1
oracion = "El usuario se encuentra offline."

print(f"{oracion}")
print(f"{oracion.replace('offline', 'online')}")
print(f"{oracion.replace('online', 'offline')}")
print(f"{oracion.replace('offline', 'online')}")
print(f"{oracion.replace('offline', 'con problemas de internet')}")


# Ejemplo 2
mensaje = "No seas tonto, las cosas no son como piensas, tonto!"
print(f"{mensaje.replace('tonto', '******')}")


system("cls")


# split(): divide una cadena de texto en una lista(array) de subcadenas utilizando un separador especificado.

texto = "Hola Mundo, estamos aprendiendo a usar Python, en Lexpin, con Diego Rodriguez"
listaDePalabras = list(texto.split("e"))

print(f"La oracion completa es: {texto}")
# ['Hola Mundo, ', 'stamos apr', 'ndi', 'ndo a usar Python, ', 'n L', 'xpin, con Di', 'go Rodrigu', 'z']
print(f"La lista de palabras es: {listaDePalabras} \n")


# Podemos tambien acceder a los indices de manera individual.
print("="*25 + " LISTA DE PALABRAS " + "="*25)
print(listaDePalabras[0])
print(listaDePalabras[1])
print(listaDePalabras[2])
print(listaDePalabras[3])
print(listaDePalabras[4])
print(listaDePalabras[5])
print(listaDePalabras[6])
print(listaDePalabras[7])


system("cls")


# strip(): elimina los caracteres especificados del comienzo y del final de la cadena de texto.
texto = "---Hola Mundo-----------"
print(f"La cadena original es: {texto}")
print(f"Ahora la cadena es: {texto.strip('-')}\n\n")


system("cls")


# join(): Une los elementos de una lista(array) en una cadena separados por un carácter específico.

print("Separamos la cadena donde exista un espacio.")
arrayDePalabras = list(texto.strip('-').split(' '))
print(f"La lista de palabras es: {arrayDePalabras}")
print(f"El indice 0 es: {arrayDePalabras[0]}")
print(f"El indice 1 es: {arrayDePalabras[1]}\n\n")


print("Unimos las cadenas y las separamos ahora por ' - '")
nuevaCadena = " - ".join(arrayDePalabras)
print(f"La nueva cadena es: {nuevaCadena}")


# system("cls")


# startswith() y endswith(): Verifica si una cadena comienza o termina con una subcadena específica.
texto = "Hola, ¿cómo estás?"

# Verificamos si el texto comienza con la secuencia de caracteres "Hola"
empieza_con_hola = texto.startswith("Hola")

# Verificamos si el texto termina con la secuencia de caracteres "?"
termina_con_signo = texto.endswith("?")

print(f"Es texto a evaluar es: {texto}")
print(f"¿Comienza con 'Hola' ?: {empieza_con_hola}")  # True
print(f"¿Termina con '?' ?: {termina_con_signo}")  # True
