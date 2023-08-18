"""
    Match-Case es una estructura de control de flujo que permite comparar un valor con múltiples casos
    y ejecutar un bloque de código correspondiente al caso que coincida. 

    Es equivalente a la estructura switch-case en otros lenguajes de programación como JavaScript.
"""

#  En JavaScript usariamos Switch Case para comparar un valor con múltiples casos de la siguiente manera:
# switch(variable){
#     case "1":
#         console.log("mensaje");
#         break;
#     case "2":
#         console.log("mensaje");
#         break;
#     default:
#         console.log("mensaje");
# }


# En Python usamos Match Case con la misma finalidad:
print("Seleccion de IDIOMA\nIngresa el numero correspondiente a un idioma")
respuesta = input("1) Español\n2) Ingles\n3) Aleman\n4) Ruso\n5) Japones\nIngresa tu opcion: ")

match respuesta:
    case "1":
        print("Has elegido Español")
    case "2":
        print("You have chosen English")
    case "3": 
        print("Sie haben Deutsch gewählt")
    case "4":
        print("ты выбрал русский язык")
    case "5":
        print("日本語を選択しました")
    case _:                           
        print("Opcion NO valida")



# Ejemplo 2
# # Validar la respuesta ingresada mediante input y determinar que tema de color se aplica usando Match-Case

tema = input("Ingresa el tema que deseas:\nclaro\noscuro\nRespuesta: ")


match tema:
    case "claro":
        print("Seleccionaste el tema claro")
    case "oscuro": 
        print("Seleccionaste el tema oscuro")
    case _:
        print("Opcion NO valida")