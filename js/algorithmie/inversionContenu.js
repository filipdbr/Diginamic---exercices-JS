// definicion of my array
var array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

//defining a new array for the copy
var copyArray = new Array(array.length);

//filling it in
for (i = array.length-1; i >= 0; i--) {
    copyArray[array.length-i-1] = array[i];
}

//priting the result of the copy 
console.log("Copy of the array")
for (i = 0; i < copyArray.length; i++) {
    console.log(copyArray[i]);
}

//priting the result of the original 
console.log("Copy of the array")
for (i = 0; i < array.length; i++) {
    console.log(array[i]);
}