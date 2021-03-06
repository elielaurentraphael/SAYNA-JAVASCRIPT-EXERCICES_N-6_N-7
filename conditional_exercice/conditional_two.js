/*
Durée de l’exercice : 10min 
Conditions

Les instructions conditionnelles sont utilisées pour effectuer différentes actions en fonction de différentes conditions.

Objectif de l'exercice : connaître et comprendre ce que sont les instructions conditionnelles en javascript, 
comment utiliser les instructions conditionnelles (if, else if, else, switch) de manière effective et efficacement

Énoncé : Suivez les étapes ci-dessous pour réaliser votre exercice.

Créez un nouveau dossier nommé conditional_exercise. A l'intérieur, créez un fichier nommé conditional_two.js. 
Prédisez ce que chacun des extraits de code ci-dessous va imprimer.

Tapez le code ci-dessous dans votre fichier conditional_two.js et comparez le résultat à votre prédiction.
*/


//code-1-0 : no false , qty is greater than zero

let qty = 48;
if (qty > 30 && qty % 5 === 4) {
    console.log("ya true");
} else {
    console.log("no false");
}
if (qty > 0) {
    console.log("qty is greater than zero");
}


//code-1-1 : beta

let a = "apple";
let b = "MANGUE";
if (a === a.toUpperCase()) {
    console.log("alpha");
}
if (b === b.toUpperCase()) {
    console.log("beta");
}


//code-1-2 : ding 

let nombre = 12;
if (nombre > 4) {
    console.log("ding");
} else if (number % 3 === 0) {
    console.log("dong");
}


//code-1-3 : Condition vraie 

let z = 14;
if (z > 10) {
    console.log("Condition vraie");
}
if (z % 3 === 0) {
    console.log("skrrt");
}