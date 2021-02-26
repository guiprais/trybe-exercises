// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

// n = 5

// *
// **
// ***
// ****
// *****

let n = 5;
let n2 = '';
let asteristico = '*';

for (i = 1; i <= n; i += 1) {
  n2 = asteristico.repeat(i);
  console.log(n2);
