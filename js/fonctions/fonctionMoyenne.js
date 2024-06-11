/*
Créer une fonction qui calcule et retourne la moyenne d’un tableau passé en paramètre.
• Cette fonction doit retourner un message d’erreur dans le cas où un élément du tableau n’est pas un nombre
• Réalisez 3 appels à cette fonction avec :
o Un tableau contenant des éléments
o Un tableau vide. Que se passe-t-il dans ce second cas ? Faites-en sorte que
votre fonction retourne 0 dans le cas où le tableau est vide.
o Une chaine de caractères. Que se passe-t-il dans ce troisième cas ?
*/

function moyenne(array) {
    
    // variables temporaires accessibles uniquement dans la fonction
    let total = 0;
    let count = 0;  
    
    for (i = 0; i < array.length; i++) {
        if (typeof array[i] !== 'number') {
            console.log("erreur, ou moins un élément du tableau n’est pas un nombre");
            return; // si au moins un élément du tableau n'est pas un nombre, la fonction renvoie un message d'erreur
        }
        total += array[i];
        count++;
    }

    return (count === 0) ? NaN : total / count; // condition, pour la fonction division par 0 renvoie NaN, sinon elle renvoie la moyenne
}

// la declaration d'un tableau
let tab4 = [2, 2, 4, 15];

// printing 
console.log(`Avg = ${moyenne(tab4)}`);



