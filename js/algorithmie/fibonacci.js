// je déclare un nombre
let n = 10;

// 2 premières valeurs sont constantes
const fib = [0, 1];

for (i = 2; i < n; i++) {
    fib[i] = fib[i-2] + fib[i-1]; // somme de n-1 et n-2
}

// le resultat
result = fib[n-1];

//print
console.log(result);