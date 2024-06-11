/*
Créer une fonction qui prend en paramètre une chaine de caractères.
• Cette fonction retourne cette chaine de caractères dans laquelle chaque mot a sa
première lettre mis en majuscule
• Exemple :
o Si je passe à cette fonction la chaine de caractères "Bonjour tout le monde"
o La fonction retourne alors "Bonjour Tout Le Monde"
• Astuce : Cette fonction utilisera la fonction précédente pour la mise en majuscule de la première lettre de chaque mot.
*/


// tout d'abord j'ai besoin d'avoir la fonction que j'ai créée dans l'exercice précédent qui met en majuscule la première lettre du mot
function maj(mot) {
    if (typeof mot !== 'string') {
        console.log("ce n'est pas un texte");
        return null;
    } 
    
    if (mot === "") return "";
    
    if (typeof mot == 'string') return mot.charAt(0).toUpperCase() + mot.slice(1);
} // je l'utilise pas encore, c'est une helper function

// je définis une fonction finale
function phraseMaj(phrase) {
    if (typeof phrase !== 'string') {
        console.log("ce n'est pas un texte");
        return null;
    }

    if (phrase === "") return "";

    if (typeof phrase == 'string') {
        return phrase.split(" ").map(maj).join(" "); 
    }
}
/* 
1. split utilise " " comme séparateur et crée un tableau. 
2. le "map" cherche des elements du tableau et utilise la fonction "maj" pour mettre des mots en majuscule. 
3. la méthode join rejoint le tableau en utilisant " " comme élément de jointure. 
*/

console.log(phraseMaj("bonjour tous le monde"));