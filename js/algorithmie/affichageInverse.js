var array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

//affichage de la table
console.log("Affichage d'array")
for (i = 0; i < array.length; i++) {
    console.log(array[i]);
}

//affichage inverse
console.log("Affichage inverse")
for (i = array.length-1; i >= 0; i--) {
    console.log(array[i]);
}

//arrayCopy
let arrayCopy = new Array();

for (i  = 0; i < array.length; i++) {
    arrayCopy[i] = array[i];
}

console.log("Copy d'array")
for (i = 0; i < arrayCopy.length; i++) {
    console.log(arrayCopy[i]);
}

//verification si les tables sont la 
console.log(arrayCopy == array);