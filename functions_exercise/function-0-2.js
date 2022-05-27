/*
Créez un nouveau dossier nommé functions_exercise.
Ecrivez le code ci-dessous dans un fichier nommé function-0-2.js. 
Faites une prédiction de ce qu'il va imprimer. Exécutez-le. 
N'essayez pas de copier et coller le code, essayez de taper tout le code.
*/

let exclaim = function(str) {
    let capitalized = str.toUpperCase();
    return capitalized + " !!";
};

let result = exclaim("potato");
console.log(result); // POTATO !!
console.log(result.length); // 9
console.log(result[0]); // P
console.log(result[result.length - 1]); // !