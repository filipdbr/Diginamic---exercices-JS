//defining variables
var tab1 = [1,15,-3,0,8,7,4,-2,28,7,-1,17,2,3,0,14,-4];
var tab2 = [-1,12,17,14,5,-9,0,18,-6,0,4,-13,5,7,-2,8,-1];

var tabSomme = new Array();

//somme des elements 
for (i = 0; i < tab1.length; i++) {
    tabSomme[i] = tab1[i] + tab2[i];
}

//print
console.log("Somme des elements:")
for (i = 0; i < tab1.length; i++) {
    console.log(tabSomme[i]);
}

