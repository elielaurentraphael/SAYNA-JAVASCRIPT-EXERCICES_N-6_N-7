// Écrivez une fonction `isLong` qui accepte une chaîne de caractères comme argument. 
// La fonction doit retourner un booléen indiquant si la chaîne est plus longue que 5 caractères.

function isLong(chaine) {
    if (chaine.length > 5) {
        return true;
    } else { return false; }
};

console.log(isLong("pie")); // false
console.log(isLong("kite")); // false
console.log(isLong("kitty")); // false
console.log(isLong("telescope")); // true
console.log(isLong("thermomètre")); // true
console.log(isLong("restaurant")); // true