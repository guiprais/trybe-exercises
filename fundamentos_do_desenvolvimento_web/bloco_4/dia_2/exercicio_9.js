// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
  numbers[index] /= 2;
  console.log(numbers[index]);
}
