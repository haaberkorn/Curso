# En Python, las listas/arrays tienen una gran cantidad de métodos incorporados.


# Lista de prueba (array)
frutas = ["Manzana", "Pera", "Banana", "Naranja"]
print(f"\nLista Original\n{frutas}")

# append(): permite agrega un elemento al final de la lista.
frutas.append("Piña")
print(f"\nappend\n{frutas}")

# extend(): permite agregar multiples elementos al final de la lista.
dulces = ["Caramelo", "Chocolate", "Galleta"]
frutas.extend(dulces)
dulces.extend(frutas)
print(f"\nextend dulces a frutas\n{frutas}")
print(f"\nextend frutas a dulces\n{dulces}")

# insert(): permite insertar un elemento en una posición especifica.
frutas.insert(3, "Mango")
print(f"\ninsert\n{frutas}")


# remove(): permite eliminar el primer elemento de la lista que coincida con el valor dado.
frutas.remove("Banana")
print(f"\nremove\n{frutas}")
