"""
En Python, hay dos tipos de variables: locales y globales. 
La diferencia entre ellas es el alcance, scope o ámbito que tienen dentro del programa.

    Variables locales: Las variables locales son aquellas que se definen dentro de una función 
    y solo pueden ser accedidas dentro de esa función. Esto significa que su alcance está limitado al 
    cuerpo de la función. Si intentas acceder a una variable local fuera de la función, obtendrás 
    un error.

    Variables globales: Las variables globales son aquellas que se definen fuera de una función y se 
    pueden acceder desde cualquier parte del programa, ya sea dentro de una función o fuera de ella. 
    Sin embargo, si intentas modificar una variable global dentro de una función, debes declararla 
    como global dentro de la función.


NOTA: Es importante tener cuidado al utilizar variables globales, ya que pueden ser modificadas 
desde cualquier parte del programa, lo que puede dificultar el seguimiento y depuración de errores. 
Por lo general, se recomienda utilizar variables locales siempre que sea posible y pasar valores 
entre funciones mediante argumentos y valores de retorno.

"""
