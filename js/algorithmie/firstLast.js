// la declaration de tableau
var array = [22,6,2,3,5,10,15,21];

//2 conditions, la 1ère pour la langeur, la deuxième pour le meme nombre au début ou à la fin
if (array.length < 1) {
    console.log(false);
} console.log(array[0] == array[array.length-1]);