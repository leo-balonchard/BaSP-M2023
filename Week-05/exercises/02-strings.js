console.log('--EXERCISE 2: STRINGS');

/* a. Crear una variable de tipo string con al menos 10 caracteres y
convertir todo el texto en mayúscula (utilizar toUpperCase).*/

console.log('-Exercise 2.a');

var radium = 'radium rocket exercise';

var convertUppercase = radium.toUpperCase();

console.log(convertUppercase);

/* b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros
5 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

console.log('-Exercise 2.b');

var babel = 'Babel Javascript'

var newString = babel.substring(0,5);

console.log(newString);

/* c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos
3 caracteres guardando el resultado en una nueva variable (utilizar substring). */

console.log('-Exercise 2.c');

var visual = 'Visual Studio Code';

var newString02 = visual.substring(15,18);

console.log(newString02);

/* d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera
letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable
(utilizar substring, toUpperCase, toLowerCase y el operador +).*/

console.log('-Exercise 2.d');

var greetings = 'HELLO, HOW ARE YOU?';

var newString03 = greetings.substring(0, 1).toUpperCase() + greetings.substring(1).toLowerCase();

console.log(newString03);

/* e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar
la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/

console.log('-Exercise 2.e');

var country = 'United States';

var firstSpace = country.indexOf(' ');

console.log(firstSpace);

/* f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio).
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas
palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).*/

console.log('-Exercise 2.f');

var words = 'SOLVED EXERCISES';

var findSpace = words.indexOf(' ');

var firstWord = words.substring(0, findSpace);

var secondWord = words.substring(findSpace + 1);

var result = firstWord[0].toUpperCase() + firstWord.substring(1).toLowerCase() + " "
+ secondWord[0].toUpperCase() + secondWord.substring(1).toLowerCase();

console.log(result);