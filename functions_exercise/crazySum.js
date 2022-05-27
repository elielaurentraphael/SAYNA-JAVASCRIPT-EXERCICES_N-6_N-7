// crazySum.js
// Ecrivez une fonction "crazySum" qui reçoit deux entiers donnés.
// Si les deux valeurs sont identiques, elle renvoie le triple de leur somme.

let crazySum = function(x, y) {
    if (x == y) {
        return (x + y) * 3;
    } else {
        return null;
    }
};

console.log(crazySum(5, 5)); // 30
console.log(crazySum(5, 3)); // null