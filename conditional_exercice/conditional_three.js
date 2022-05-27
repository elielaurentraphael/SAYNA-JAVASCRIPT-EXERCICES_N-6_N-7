/*
Durée de l’exercice : 10min 
Conditions

Les instructions conditionnelles sont utilisées pour effectuer différentes actions en fonction de différentes conditions.

Objectif de l'exercice : connaître et comprendre ce que sont les instructions conditionnelles en javascript, 
comment utiliser les instructions conditionnelles (if, else if, else, switch) de manière effective et efficacement

Énoncé : Suivez les étapes ci-dessous pour réaliser votre exercice.

Créez un nouveau dossier nommé conditional_exercise. A l'intérieur, créez un fichier nommé conditional_three.js. 
Prédisez ce que chacun des extraits de code ci-dessous va imprimer.

Tapez le code ci-dessous dans votre fichier conditional_three.js et comparez le résultat à votre prédiction.
*/


// code 2-1 : yeet , nope

let blogging = "Quand la vie vous donne des citrons, faites de la limonade";
let hasOk = blogging.indexOf("ok") > -1;
if (hasOk) {
    console.log("yeet");
} else if (blogging.length > 10) {
    console.log("yes");
} else {
    console.log("no");
}

let hasYou = blogging.indexOf("you") > -1;
let hasFun = blogging.indexOf("fun") > -1;
if (hasYou && hasOk) {
    console.log("cool");
} else if (hasOk) {
    console.log("rad");
} else if (hasFun) {
    console.log("dope");
} else {
    console.log("nope");
}


// code 2-2 : either , either , both

let q = 25;
if (q % 3 === 0 && q % 5 === 0) {
    console.log("both");
} else if (q % 3 === 0 || q % 5 == 0) {
    console.log("either");
} else {
    console.log("neither");
}

let r = 9;
if (r % 3 === 0 && r % 5 === 0) {
    console.log("both");
} else if (r % 3 === 0 || r % 5 == 0) {
    console.log("either");
} else {
    console.log("neither");
}

let s = 15;
if (s % 3 === 0 && s % 5 === 0) {
    console.log("both");
} else if (s % 3 === 0 || s % 5 == 0) {
    console.log("either");
} else {
    console.log("neither");
}