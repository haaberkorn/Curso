# Importamos la libreria time que nos permitira realizar acciones con el reloj de la computadora
# al proporcionar varios métodos y funciones.
from os import system
import time

print("Hola, estamos aprendiendo que son funciones de tiempo, con Python, en Lexpin.")


# sleep(): Pausa la ejecución del programa durante el número especificado en segundos como numeros en flotantes (ej: 1 o 1.5).
# Es útil para crear retrasos o introducir pausas en el flujo del programa.

# Ejemplo de uso:
time.sleep(5)
print("Este mensaje se esta mostrando luego de transcurrir 5 segundos")
time.sleep(5)
print("Este mensaje se esta mostrando luego de transcurrir 5 segundos mas")


# NOTA: importamos la libreria system para poder realizar acciones en la consola.

# system("cls") # Limpia la consola del texto previamente impreso.
# system("exit") # Cierra el programa


system("cls")


# localtime():  Devuelve el tiempo local actual como una estructura de tiempo (objeto time.struct_time)
# que contiene varios atributos como año, mes, día, hora, minutos, segundos, etc.

tiempoActual = time.localtime()

print(f"La fecha actual es: {tiempoActual}")
print(f"El año actual es: {tiempoActual.tm_year}")
print(f"La hora actual es: {tiempoActual.tm_hour}")
print(f"El minuto actual es: {tiempoActual.tm_min}")
print(f"El segundo actual es: {tiempoActual.tm_sec}")


# system("cls")


""" 
    strftime(formato, estructura): Convierte una estructura de tiempo (time.struct_time) en una cadena de caracteres formateada según el 
    formato especificado. El formato debe seguir una sintaxis especial para representar diferentes componentes del tiempo, como %Y para el año 
    completo, %m para el mes en numero y %h para el mes en iniciales, %d para el día, %H para la hora en formato de 24 horas, %M para los minutos, %S para los segundos.

    Lista de formatos y descripciones:
    "%d": Representa el día del mes en formato numérico con ceros iniciales si es necesario. Por ejemplo, "01" para el primer día del mes.
    "%h": Representa el mes en formato numérico con ceros iniciales si es necesario. Por ejemplo, "01" para enero.
    "%Y": Representa el año en formato de cuatro dígitos. Por ejemplo, "2022".
    "%H": Representa la hora en formato de 24 horas con ceros iniciales si es necesario. Por ejemplo, "09" para las 9 de la mañana.
    "%M": Representa los minutos en formato numérico con ceros iniciales si es necesario. Por ejemplo, "05".
    "%S": Representa los segundos en formato numérico con ceros iniciales si es necesario. Por ejemplo, "30".
    "%a": Representa el nombre abreviado del día de la semana. Por ejemplo, "Mon" para lunes.
    "%A": Representa el nombre completo del día de la semana. Por ejemplo, "Monday" para lunes.
    "%b": Representa el nombre abreviado del mes. Por ejemplo, "Jan" para enero.
    "%B": Representa el nombre completo del mes. Por ejemplo, "January" para enero.
    "%c": Representa la fecha y hora utilizando el formato local.
    "%p": Representa "AM" o "PM" según la hora.
    "%j": Representa el día del año en formato numérico. Por ejemplo, "001" para el primer día del año.
    "%w": Representa el número del día de la semana, donde 0 es domingo y 6 es sábado.
    "%x": Representa la fecha utilizando el formato local.
    "%X": Representa la hora utilizando el formato local.
"""

tiempoActual = time.localtime()
tiempFormateado = time.strftime("%d/%h/%Y  %H:%M:%S %p", tiempoActual)
print(tiempFormateado)
