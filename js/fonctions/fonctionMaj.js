/*
• Créer une fonction qui prend en paramètre une chaine de caractères.
• Cette fonction retourne la chaine de caractères passée en paramètre avec la première
lettre en majuscule.
*/

function maj(mot) {
    if (typeof mot !== 'string') {
        console.log("ce n'est pas un texte");
        return null;
    } 
    
    if (mot === "") return "";
    
    if (typeof mot == 'string') return mot.charAt(0).toUpperCase() + mot.slice(1);
}

console.log(maj(12));