// Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function palindromo(word) {
  for (i = 0; i < word.length; i += 1) {
    if (word[i] !== word[word.length - 1 - i]) {
      return false;
    } else {
      return true;
    }
  }
}

let a = palindromo('arara');
console.log(a);
