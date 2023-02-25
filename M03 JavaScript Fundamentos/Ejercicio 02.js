/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:
   return string;
}

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:
   var resultado = 0;
   resultado = x + y;
   return resultado;
}

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   var resultadoResta = 0;
   resultadoResta = x - y;
   return resultadoResta;
}

function divide(x, y) {
   // Retorna el resultado de la division.
   // Tu código:
   var resultadoDivision = 0;
   resultadoDivision = x / y;
   return resultadoDivision; 
}

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   var resultadoMultiplicacion = 0;
   resultadoMultiplicacion = x * y;
   return resultadoMultiplicacion;
}

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   var RestoDivision = 0;
   RestoDivision = x % y;
   return RestoDivision;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
