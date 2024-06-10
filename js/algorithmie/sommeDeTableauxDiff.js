//defining variables
var tab1 = [1,15,-3,0,8,7,4,-2,28,7,-1,17,2,3,0,14,-4];
var tab3 = [-1, 12, 17, 14, 5, -9, 0, 18];

// check which table is longer
console.log(tab1.length > tab3.length) // true donc le tab1 est plus long

// new tab for the sum
var tabSommeDiff = new Array();

// 2 boucles pour calculer des sommes

//première boucle pour calculer la somme des valeurs avec des index dans les deux tables
for (i = 0; i < tab3.length; i++) {
    tabSommeDiff[i] = tab1[i] + tab3[i];
}

// la deuxième boucle ajoute les éléments restants d'une boucle plus longue
for(i = tab3.length; i < tab1.length; i++) {
    tabSommeDiff[i] = tab1[i];
}

// afficher un nouveau tableau
console.log("Tableau de somme des tableaux diff")
for (num in tabSommeDiff) {
    console.log(tabSommeDiff[num]);
}