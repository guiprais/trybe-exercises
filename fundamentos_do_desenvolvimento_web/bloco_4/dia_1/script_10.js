let custo = 1000;
let valorVenda = 1500;
let imposto = custo * 1.2;
let lucro = valorVenda - imposto;

if (custo >= 0 && valorVenda >= 0) {
  console.log(lucro);
} else {
  console.log('Erro');
}
