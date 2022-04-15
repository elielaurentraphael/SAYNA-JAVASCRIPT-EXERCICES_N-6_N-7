// Ecrivez une fonction `startsWithR` qui accepte une chaîne de caractères comme argument.
// La fonction doit retourner un booléen indiquant si oui ou non la chaîne commence 
// par 'r' ou 'R'.

let startsWithR = function(chaine) {
    if (chaine.startsWith("r") || chaine.startsWith("R")) {
        return true;
    } else { return false; }
};

console.log(startsWithR("roger that")); // true
console.log(startsWithR("Row, row, row your boat")); // true
console.log(startsWithR("slip")); // false
console.log(startsWithR("Taxicab")); // false