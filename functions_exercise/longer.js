// Ecrivez une fonction `longer` qui accepte deux chaînes de caractères comme argument. 
// La fonction doit retourner la chaîne la plus longue. Si les chaînes de caractères ont 
// la même longueur, alors la première chaîne est retournée.

function longer(chan1, chan2) {
    if (chan1.length > chan2.length) {
        return chan1;
    } else if (chan1.length < chan2.length) {
        return chan2;
    } else { return chan1; }
}

console.log(longer("drum", "piranha")); // 'piranha'.
console.log(longer("basket", "fork")); // 'basket' (panier)
console.log(longer("flanelle", "durable")); // "flanelle".
console.log(longer("disrupt", "ability")); // "disrupt".
console.log(longer("bird", "shoe")); // 'bird' (oiseau)