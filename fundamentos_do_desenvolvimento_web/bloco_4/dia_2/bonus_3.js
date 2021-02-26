// Agora você irá criar um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo:

// [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let array = [];

for (let i = 1; i <= numbers.length; i += 1) {
  let multiplicacao = numbers[i] * numbers[i - 1];

  if (i === 10) {
    multiplicacao = 2 * numbers[i - 1];
    array.push(multiplicacao);
  } else {
    array.push(multiplicacao);
  }
}

console.log(array);



for (let k = 1; k <= numbers.length; k++) { if ((k - 1) < numbers.length) {  swap (trocamos) aux3 = numbers[k] * numbers[k - 1]; numbers[k -1] = aux3; } else if(k = numbers.length) { aux3 = 0; aux3 = numbers[k] * 2; numbers[k] = aux3; } } console.log(numbers); 