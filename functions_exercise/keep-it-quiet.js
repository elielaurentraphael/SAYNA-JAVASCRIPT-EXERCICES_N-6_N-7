// Ecrivez une fonction `keepItQuiet` qui accepte une chaîne de caractères en tant qu'argument.
// La fonction doit retourner les minuscules de la chaîne avec 3 points de suspension ajoutés 
// à la fin.

let keepItQuiet = function(chaine) {
    return chaine.toLowerCase() + "...";
};

console.log(keepItQuiet("HOORAY")); // 'hooray...' (en anglais)
console.log(keepItQuiet("Doggo")); // 'doggo...' (en anglais)
console.log(keepItQuiet("WHAT ?!?!")); // 'what ?!?!...' (quoi ?!!...)