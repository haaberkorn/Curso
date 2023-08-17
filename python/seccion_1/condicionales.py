"""
    Las estructuras condicionales permiten que el programa tome diferentes caminos de ejecución 
    dependiendo de si una condición se cumple o no. 

    Las estructuras condicionales en Python son if, if-else, if-elif-else y Operador Ternario.
"""

# Ejemplo 1:
nacimiento = int(input("Ingrese su año de nacimiento: "))

if 2023 - nacimiento > 25:
    print("Eres mayor de edad y mayor de 25 años o mas")
elif 2023 - nacimiento == 25:
    print("Tienes exactamente 25 años de edad")
elif 2023 - nacimiento > 18 and 2023 - nacimiento < 25:
    print("Tienes entre 18 y 25 años de edad")
else:
    print("Eres menor de edad")


# Al igual que hemos visto anteriormente en JavaSCript, en Python tambien se utiliza el operador Ternario
# Ejemplo: Operador Ternario 
print("Eres mayor de 25 años") if 2023 - nacimiento > 25 else print("Tienes exactamente 25 años de edad") if 2023 - nacimiento == 25 else print("Eres menor de edad")




# Ejemplo 2 - Operador ternario: Validar si nu numero es positivo o negativo
# num = int(input("Ingresa un numero: "))
# print("El numero es positivo" if num >= 0 else "El numero es negativo")
# print("El numero es positivo" if num > 0 else "El numero es neutro" if num == 0 else "El numero es negativo")




# Aporte de Wilklert Garrido
n = int(input("Ingrese un monto: "))

if n != 0: #Si n es distinto a 0, entoces se cumplira con:
    if n > 0: #Si n es mayor que 0, se cumplira con:
        if n % 2 == 0: #Si el n divido con 2 es igual a 0
            print(f'El valor de {n} es PAR POSITIVO') #Resultado 1
        else: #Si no, se cumple, entonces
            print(f'El valor de {n} es IMPAR POSITIVO') #Resultado 2
    else: #Si no, Se cumplen con las condiciones anterires, entonces:
        if n % 2 == 0: #Si el n divido con 2 es igual a 0
            print(f'El valor de {n} es PAR NEGATIVO')
        else: #Si no, se cumple, entonces:
            print(f'El valor de {n} es IMPAR NEGATIVO')
else: #Si no se cumple con ninguna de las condiciones anteriores, como resultado se tendra:
    print(f'El valor de {n} es NEUTRO')




# Ejemplo 3: Menú
# Decoradores de Strings
# \n es un decorador de string que permite que se imprima un salto de linea.
# \t es un decorador de string que permite que se imprima un tabulador.
# \s es un decorador de string que permite que se imprima un espacio.

eleccion = input("- Para sumar escriba: 1\n- Para restar escriba: 2\n- Para multiplicar escriba: 3\n- Para salir: otra tecla\nRespuesta: ")

if eleccion == "1":
    print("\n\nSuma\n")
    num1 = int(input("Ingrese el primer numero: "))
    num2 = int(input("Ingrese el segundo numero: "))
    print(f"\nLa suma es: {num1 + num2}")
elif eleccion == "2":
    print("\n\nResta\n")
    num1 = int(input("Ingrese el primer numero: "))
    num2 = int(input("Ingrese el segundo numero: "))
    print(f"\nLa resta es: {num1 - num2}")
elif eleccion == "3":
    print("\n\nMultiplicacion\n")
    num1 = int(input("Ingrese el primer numero: "))
    num2 = int(input("Ingrese el segundo numero: "))
    print(f"\nLa multiplicacion es: {num1 * num2}")
else:
    print("\n\nGracias por usar esta APP\n")