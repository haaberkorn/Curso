# Primero que nada aprendamos a crear comentarios

# Comentario de 1 linea: se puede hacer con el simbolo #

"""
Este es un comentario
de varias líneas
"""

# En Python, hay varios tipos de datos disponibles, algunos de los cuales son:


# Enteros (int): Representan números enteros positivos o negativos, sin decimales.
numeroEntero = 5
numeroEnteroNegativo = -5


# Flotantes (float): Representan números con decimales.
numeroFlotante = 5.5
numeroFlotanteNegativo = -6.72


# Cadenas de texto (str): Representan texto o caracteres.
# Pueden definirse utilizando comillas simples o dobles.
texto1 = 'Hola'
texto2 = "mundo"


# Booleanos (bool): Representan valores lógicos True (verdadero) o False (falso).
# Importante destacar, estos valores se representan con la primera letra mayuscula.
verdadero = True
falso = False


# Listas (list): Representan colecciones ordenadas de elementos.
# Pueden contener cualquier tipo de datos, incluso otras listas.
# Son el equivalente a arrays o vectores en otros lenguajes.
lista1 = [1, 2, 3, 4, 5]
lista2 = ["Uno", "Dos", "Tres"]
lista3 = [1, 2, 3, "Cuatro", "Cinco", [1, 2, "Tres"], True, False]


# Tuplas (tuple): Son similares a las listas/arrays, pero no se pueden modificar una vez que se crean.
tupla1 = (1, 2, 3)
tupla2 = ("Uno", 2, 3, "Cuatro")


# Diccionarios (dict): Representan una colección de pares clave-valor o key/value.
# Cada elemento del diccionario se compone de una clave y su correspondiente valor.
# Son el equivalente a objetos en otros lenguajes como por ejemplo JavaScript.
# NOTA: la estructura de un diccionario en Python es aun mas similar a JSON que los objetos de JavaScript.
diccionario1 = {"nombre": "Diego", "apellido": "Rodriguez", "edad": 27}


# Hasta ahora hemos declarado variables de forma individual,
# ahora vamos a declarar varias al mismo tiempo.

variable1, variable2, variable3 = "Hola", 2, [True, False, True]
