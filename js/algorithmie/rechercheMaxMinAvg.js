// definicion of my array
var array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

// il faut definir le premier element comme max initial
let max = array[0];

//maintenant il faut chercher le max par comparaison
for (num in array) {
    if (array[num] > max) {
        max = array[num];
    }
}

// printing max
console.log(`Max = ${max}`);

/* similaire avec min, nous devons d’abord définir 
le premier élément ou tableau comme min */
let min = array[0];

//maintenant il faut chercher le min par comparaison
for (num in array) {
    if (array[num] < min) {
        min = array[num];
    }
}

// printing min
console.log(`Min = ${min}`);

/* pour pouvoir calculer la moyenne, 
nous avons besoin d'un nombre d'éléments (nombre) 
et de la somme de tous les éléments (total) */
let total = 0;
let count = 0;

/* À chaque itération, nous augmentons 
le nombre de 1 et totalisons la valeur de l'élément */
for (num in array) {
    count++;
    total += array[num];
}

// le calcul de la moyenne
let avg = sum / count;

// printing max
console.log(`Avg = ${avg}`);
