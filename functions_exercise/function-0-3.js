let average = function(num1, num2) {
    return "Calcul..." + (num1 + num2) / 2;
};

console.log(average(5, 10)); // calcul...7.5
console.log(average(20, 26)); // calcul...23
console.log(average(50, 100) + 2); // calcul...77  le mien affiche 752
let a = 21 + 3;
let b = 20;
let n = average(a, b);
console.log(average(n, 18)); // calcul...20  le mien affiche NaN

let averag = function(num1, num2) {
    console.log("calcul...");
    return (num1 + num2) / 2;
};

console.log(averag(5, 10)); // calcul...7.5
console.log(averag(20, 26)); // calcul...23
console.log(averag(50, 100) + 2); // calcul...77  
let c = 21 + 3;
let d = 20;
let k = average(c, d);
console.log(average(k, 18)); // calcul...20