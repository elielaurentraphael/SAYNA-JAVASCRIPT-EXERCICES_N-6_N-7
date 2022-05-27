/*
Créez un nouveau dossier nommé functions_exercise.
Ecrivez le code ci-dessous dans un fichier nommé function-0-3.js. 
Faites une prédiction de ce qu'il va imprimer. Exécutez-le. 
N'essayez pas de copier et coller le code, essayez de taper tout le code.
*/

let average = function(num1, num2) {
    console.log("calcul...");
    return (num1 + num2) / 2;
};
console.log(average(5, 10)); // calcul...7.5
console.log(average(20, 26)); // calcul...23
console.log(average(50, 100) + 2); // calcul...77
let a = 21 + 3;
let b = 20;
let n = average(a, b); // calcul...
console.log(average(n, 18)); // calcul...20