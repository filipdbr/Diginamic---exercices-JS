// definicion of my array
var array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

//Combiner une boucle et un test de manière à n’afficher que les entiers supérieurs à 3
console.log("les entiers supérieurs à 3");
for (num in array) {
    if (array[num] > 3) {
        console.log(array[num]);
    }
}

//les entiers pairs
console.log("les entiers pairs");
for (num in array) {
    if (array[num] % 2 == 0) {
        console.log(array[num]);
    }
}

//les valeurs correspondant aux index pairs
console.log("les valeurs correspondant aux index pairs");
for (num in array) {
    if (num % 2 == 0) {
        console.log(array[num]);
    }
}

//les entiers impairs
console.log("les entiers impairs");
for (num in array) {
    if (array[num] % 2 !== 0) {
        console.log(array[num]);
    }
}