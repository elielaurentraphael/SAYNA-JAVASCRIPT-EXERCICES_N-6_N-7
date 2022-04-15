// Ecrivez une fonction `stringSize` qui accepte une chaîne de caractères en tant qu’argument. 
// La fonction doit retourner la chaîne 'small' si l'argument est plus court que 5 caractères, 
// 'medium' si elle fait exactement 5 caractères, et 'large' si elle est supérieure à 5 caractères.

let stringSize = function(chaine) {
    if (chaine.length > 5) {
        return 'large';
    } else if (chaine.length < 5) {
        return 'small';
    } else {
        return 'medium';
    }
};

console.log(stringSize("cat")); // 'small' (petit)
console.log(stringSize("bell")); // 'small' (petit)
console.log(stringSize("ready")); // 'medium' (moyen)
console.log(stringSize("shirt")); // 'medium' (moyen)
console.log(stringSize("shallow")); // 'large' (grand)
console.log(stringSize("intelligence")); // 'large' (grand)