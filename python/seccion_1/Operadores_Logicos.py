# Los operadores lógicos se utilizan para realizar operaciones lógicas
# en valores booleanos (True o False).


# and: Retorna True si ambos operandos son verdaderos.
a, b, c = 5, 10, 15

print(True and True)   # True
print(a < b and b < c)   # True
print(True and False)   # False
print(a < b and c < b)   # False


# or: Retorna True si al menos uno de los operandos es verdadero.
d = 5
e = 10
f = 15
print(d < e or e < f)    # True
print(d < 2 or e < d)    # False
print(True or False)      # True
print(False or True)      # True
print(True or True)       # True
print(False or False)     # False


# not: Retorna True si el operando es falso.
# Es decir, revierte el valor booleano del operando.
op1 = True
op2 = False
op3 = 5 < 6
op4 = 5 > 6
print(not op1)   # False
print(not op2)   # True
print(not op3)   # False
print(not op4)   # True

# Recordando a Pedro El H4ck3r: 😢 (0101010101010100101001001)
