## Calback
En JavaScript, un callback es una función que se pasa como argumento a otra función, y se invoca en algún momento durante la ejecución de la función principal. El objetivo de un callback es permitir que la función principal pueda continuar ejecutándose mientras que la función pasada como callback realiza alguna tarea o procesamiento en segundo plano. Una vez que la función pasada como callback haya completado su tarea, invoca de vuelta a la función principal con los resultados que ha producido.

Los callbacks se utilizan comúnmente en JavaScript para manejar eventos, realizar operaciones asíncronas como solicitudes de red, operaciones de lectura / escritura de archivos, entre otros. Los callbacks son esenciales en la programación asíncrona ya que permiten que el código continúe ejecutándose mientras se espera que se complete una tarea.

## Metodo map
map() es un método en JavaScript que se utiliza para transformar los elementos de una matriz (array) en una nueva matriz con elementos modificados. El método map() recorre cada elemento de la matriz original y ejecuta una función de devolución de llamada (callback) proporcionada por el usuario en cada elemento. La función de devolución de llamada debe devolver el valor que se desea que se incluya en la nueva matriz resultante.

El método map() devuelve una nueva matriz con los resultados de la función de devolución de llamada aplicada a cada elemento de la matriz original. La matriz resultante tendrá la misma longitud que la matriz original.

## Metodo Reduce
reduce() es un método en JavaScript que se utiliza para reducir los elementos de una matriz (array) a un solo valor. El método reduce() recorre cada elemento de la matriz original y ejecuta una función de devolución de llamada (callback) proporcionada por el usuario en cada elemento. La función de devolución de llamada toma dos argumentos: un acumulador y el valor actual del elemento. El acumulador es el valor que se devuelve después de cada iteración de la función de devolución de llamada, y se utiliza para almacenar el resultado intermedio.

El método reduce() también acepta un segundo argumento opcional que especifica un valor inicial para el acumulador. Si se proporciona un valor inicial, el método reduce() comenzará a iterar desde el índice 0 de la matriz original. Si no se proporciona un valor inicial, el método reduce() comenzará a iterar desde el índice 1 de la matriz original, y el valor inicial del acumulador será el primer elemento de la matriz.

El método reduce() devuelve el valor final del acumulador después de que se hayan procesado todos los elementos de la matriz original.

.sort().join() es encadenamiento de metodos 