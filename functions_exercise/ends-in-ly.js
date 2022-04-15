// Écrivez une fonction `endsInLy` qui accepte une chaîne de caractères comme argument.
// La fonction renvoie un booléen indiquant si la chaîne se termine ou non par 
// la sous-chaîne 'ly'.

let endsInLy = function(chai) {
    if (chai.endsWith("ly")) {
        return true;
    } else { return false }
};

console.log(endsInLy("pretty")); // false
console.log(endsInLy("instant")); // false
console.log(endsInLy("analytic")); // false
console.log(endsInLy("timidement")); // false
console.log(endsInLy("fly")); // true
console.log(endsInLy("gallantly")); // true