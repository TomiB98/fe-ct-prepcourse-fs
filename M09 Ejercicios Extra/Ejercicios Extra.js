/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var nuevoArray = [];
   for (var clave in objeto) {
      nuevoArray.push([clave, objeto[clave]]);
   }
   return nuevoArray;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let arrayDeLetras = string.split('');
   let objeto = {};
   arrayDeLetras = arrayDeLetras.sort();
   arrayDeLetras.forEach(letra => {
      if (objeto.hasOwnProperty(letra)) {
         objeto[letra] = objeto[letra] + 1;        
      }
      else {
         objeto[letra] = 1;
      }
   });
   return objeto;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var mayusculas = '';
   var minusculas = '';
   for (var i = 0; i < string.length; i++) {
      if (string[i] === string[i].toUpperCase()) {
         mayusculas = mayusculas + string[i];
      }
      else {
        minusculas = minusculas + string[i];
      }
   }
   return mayusculas + minusculas;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   let array = frase.split(' ');
   let mirror = '';
   array.forEach (palabra => {
      let palabraEspejo = ' ';
      for (let i = palabra.length - 1; i >= 0; i--) {
         palabraEspejo = palabraEspejo + palabra[i];
      }
      mirror = mirror + palabraEspejo;
   });
   return mirror.trim();
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let numInvertido = numero.toString().split('').reverse().join('');
   if (numInvertido === numero.toString()) {
      return 'Es capicua';
   }
   else if (numInvertido !== numero.toString()) {
      return 'No es capicua';
   }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let stringCorregida = '';
   for (let i = 0; i < string.length; i++) {
      if (string[i] !== 'a' && string[i] !== 'b' && string[i] !== 'c' ) {
         stringCorregida += string[i]
      }
   }
   return stringCorregida

   //return string.replace(/['abc']/g, '');
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código: 
   let aux;
   for (let i = 0; i < arrayOfStrings.length - 1; i++) {
      for (let j = i + 1; j < arrayOfStrings.length; j++) {
         if (arrayOfStrings[i].length > arrayOfStrings[j].length) {
            aux = arrayOfStrings[i];
            arrayOfStrings[i] = arrayOfStrings[j];
            arrayOfStrings[j] = aux;
         }
      }
   }
   return arrayOfStrings;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let compartidos = [];
   array1.forEach(numero => {
      for (let i = 0; i < array2.length; i++) {
         if (numero === array2[i]) {
            compartidos.push(numero);
         }
      }
   });
   return compartidos;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
