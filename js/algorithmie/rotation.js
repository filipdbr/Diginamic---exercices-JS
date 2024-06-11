// je définis une tableau
let tab5 = [1, 2, 3, 4, 5, 6];

// je définis une nouvelle tableau pour le résultat
let rotated = new Array(tab5.length);

// le dernier élément du tab5 est toujours le premier élément de la nouvelle table
rotated[0] = tab5[tab5.length - 1]; 

// l'index des autres éléments est toujours l'index-1 de l'index d'origine
for (i = tab5.length - 1; i > 0; i--) {
    rotated[i] = tab5[i - 1];
}

// J'affiche le résultat à l'aide des méthodes Array, en joignant une virgule
console.log(rotated.join(", "));

