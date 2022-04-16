// crazySum.js
// Ecrivez une fonction "crazySum" qui reçoit deux entiers donnés.
// Si les deux valeurs sont identiques, elle renvoie le triple de leur somme.

let crazySum = function(x, y) {
    if (x == y) {
        return (x + y) * 3;
    }
};

console.log(crazySum(5, 5));