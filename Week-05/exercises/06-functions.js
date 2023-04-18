console.log('--EXERCISE 6: FUNCTIONS');

/* a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y
guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador. */

console.log('-Exercise 6.a');

function easyAddition(a, b) {
  return a + b;
}

var resultAddition = easyAddition(10, 25);

console.log(resultAddition);

/* b. Copiar la función suma anterior y agregarle una validación para controlar si alguno
de los parámetros no es un número; de no ser un número, mostrar un alert aclarando que uno
de los parámetros tiene error y retornar el valor NaN como resultado.*/

console.log('-Exercise 6.b');

function newEasyAddition(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    alert('Uno de los parametros no es un numero');
    return NaN;
  } else {
  return a + b;}
}

var newResultAddition = newEasyAddition(10, "coca cola");

console.log(newResultAddition);

/* c. Crear una función “validateInteger” que reciba un número como parámetro
y devuelva verdadero si es un número entero.*/

console.log('-Exercise 6.c');

function validateInteger(num) {
  if(typeof num !== 'number' || isNaN(num)) {
    return false;
  }
  return Math.floor(num) === num;
}

console.log(validateInteger(12));
console.log(validateInteger(5.3132));
console.log(validateInteger('hello'));


/* d. Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la función
del ejercicio 6c. y que valide que los números sean enteros. En caso que haya decimales mostrar
un alert con el error y retornar el número convertido a entero (redondeado).*/

console.log('-Exercise 6.d');

function newAddition(a, b) {
  if (!validateInteger(a) || !validateInteger(b)) {
    alert('Error: Uno de los parametros no es un numero entero');
    a = Math.round(a);
    b = Math.round(b);
  }
  return a + b;
}

console.log(newAddition(4, 5));
console.log(newAddition(4.5, 5.3));


/* e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro
de una nueva función probando que todo siga funcionando igual que en el apartado anterior. */

console.log('-Exercise 6.e');

function validateInteger(num) {
  if(typeof num !== 'number' || isNaN(num)) {
    return false;
  }
  return Math.floor(num) === num;
}

function newAddition(a, b) {
  if (!validateInteger(a) || !validateInteger(b)) {
    alert('Error!!: Uno de los parametros no es un numero entero');
    a = Math.round(a);
    b = Math.round(b);
  }
  return a + b;
}

console.log(newAddition(4, 5));
console.log(newAddition(4.5, 5.3));