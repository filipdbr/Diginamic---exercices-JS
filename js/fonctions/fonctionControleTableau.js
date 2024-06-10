/* 
Créer une fonction qui vérifie le contenu d’un tableau
o Si le tableau ne contient que des nombres alors la fonction retourne true
o Sinon la fonction retourne false
• Réalisez 3 appels à cette fonction avec :
o Un tableau contenant des nombres
o Un tableau contenant des nombres et une chaine de caractères o Un tableau vide.
*/

// la declaration des tableaux
var numbers = [1, 2, 3, 4, 5];
var names = ["Filip", "Laura", "Peter", "Sonya"];
var tab = new Array();

// la fonction
function isNumber(array) {
    for (i = 0; i < array.length; i++) {
        if (typeof array[i] !== 'number') {
            return false; // si un seul élément n'est pas un nombre, la boucle break et renverra false
        }
    } return true; // sinon true
}

console.log(isNumber(numbers)); // verification du tableau "numbers" / true
console.log(isNumber(names)); // verification du tableau "names" / false
console.log(isNumber(tab)); // verification du tableau vide / true
