// Écrivez une fonction `contains(str1, str2)` qui accepte deux chaînes de caractères comme argument.
// La fonction doit renvoyer un booléen indiquant si oui ou non `str2` est contenue dans `str1`. 
// La fonction doit ignorer toute différence de capitalisation.

let contains = function(str1, str2) {
    if (str1.includes(str2.toUpperCase()) || str1.includes(str2.toLowerCase())) {
        return true;
    } else { return false; }
};

console.log(contains("caterpillar", "pill")); // true
console.log(contains("lion's share", "on")); // true
console.log(contains("SORRY", "or")); // true
console.log(contains("tangent", "gem")); // false
console.log(contains("clock", "ok")); // false