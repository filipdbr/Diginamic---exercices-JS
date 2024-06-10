// defining the array 
var array = [6,2,3,5,10,15,22];

//2 conditions, la 1ère pour la langeur, la deuxième pour le nombre 6 au début ou à la fin
if (array.length <1) {
    console.log(false);
} console.log(array[0] == 6 || array[array.length-1] == 6);