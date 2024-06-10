/* 
• Ecrivez une fonction qui prend 2 nombres a et b en paramètres et retourne le résultat suivant : a * b + a + b
• Appelez cette méthode avec 2 nombres quelconques et affichez le résultat d’appel
• Que se passe t’il si vous appelez cette fonction non pas avec des nombres mais avec
des chaines de caractères ? Faites le test. */


// fonction
function calcul(a, b) {
    result = a * b + a + b;
    return result;
};

// l'affichage de résultat de calcul des nombres 5 et 13
console.log(calcul(5,13));

/* Que se passe t’il si vous appelez cette fonction non pas avec des nombres mais avec
des chaines de caractères ? 

Alors, le test: */

// console.log(calcul(filip, dabrowski)); // lerésultat: Uncaught ReferenceError: filip is not defined

console.log(calcul("Filip", "Dabrowski")); // le résultat: NaNFilipDabrowski

let prenom = "Filip", nom = "Dabrowski";
console.log(calcul(prenom, nom));  // le résultat: NaNFilipDabrowski