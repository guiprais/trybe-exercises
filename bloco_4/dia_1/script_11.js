let salario = 2300;
let aliquota = null;
let ir = null;

if (salario <= 1556.94) {
  aliquota = salario * 0.08;
} else if (1556.95 <= salario && salario <= 2594.92) {
  aliquota = salario * 0.09;
} else if (2594.93 <= salario && salario <= 5189.82) {
  aliquota = salario * 0.11;
} else if (5189.82 < salario) {
  aliquota = 570.88;
} else {
  console.log('erro');
}

let salarioBase = salario - aliquota;

if (salarioBase < 1903.98) {
  ir = 0;
} else if (1903.99 <= salarioBase && salarioBase <= 2826.65) {
  ir = salarioBase * 0.075 - 142.8;
} else if (2826.66 <= salarioBase && salarioBase <= 3751.05) {
  ir = salarioBase * 0.15 - 354.8;
} else if (3751.06 <= salarioBase && salarioBase <= 4664.68) {
  ir = salarioBase * 0.225 - 636.13;
} else if (4664.68 < salarioBase) {
  ir = salarioBase * 0.275 - 869.36;
}

let salarioTotal = salarioBase - ir;
console.log(salarioTotal);
