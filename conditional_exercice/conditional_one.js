/*
Durée de l’exercice : 10min 
Conditions

Les instructions conditionnelles sont utilisées pour effectuer différentes actions en fonction de différentes conditions.

Objectif de l'exercice : connaître et comprendre ce que sont les instructions conditionnelles en javascript, 
comment utiliser les instructions conditionnelles (if, else if, else, switch) de manière effective et efficacement

Énoncé : Suivez les étapes ci-dessous pour réaliser votre exercice.

Créez un nouveau dossier nommé conditional_exercise. A l'intérieur, créez un fichier nommé conditional_one.js. 
Prédisez ce que chacun des extraits de code ci-dessous va imprimer.

Tapez le code ci-dessous dans votre fichier conditional_one.js et comparez le résultat à votre prédiction.
*/

//code-0-1 : foo

if (true) {
    console.log("foo");
}
if (false) {
    console.log("bar");
}


//code-0-2 : beep

if (false || false) {
    console.log("boop");
}
if (true || false) {
    console.log("beep");
}


//code-0-3 : zip et zoop

let num = 30;
if (num > 0) {
    console.log("zip");
}
if (num % 2 === 0) {
    console.log("zoop");
}


//code-0-4 : Pas correct

let word = "jeep";
if (word[0] === "d") {
    console.log("Correct");
} else {
    console.log("Pas correct");
}


//code-0-5 : se termine par t , long

let phrase = "roger that";
if (phrase[phrase.length - 1] === "t") {
    console.log("se termine par t");
} else {
    console.log("ne se termine pas par t");
}
if (phrase.length <= 4) {
    console.log("court");
} else {
    console.log("long");
}