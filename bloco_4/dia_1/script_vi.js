let peca = 'Torre';
let pecaLower = peca.toLowerCase();

if (pecaLower === 'peão') {
  console.log('Anda uma casa pra frente');
} else if (pecaLower === 'torre') {
  console.log(
    'Anda quantas casas quiser, mas apenas em horizontal ou vertical'
  );
} else if (pecaLower === cavalo) {
  console.log('Anda em L');
} else if (pecaLower === 'bispo') {
  console.log('Anda quantas casas quiser, mas apenas em diagonal');
} else if (pecaLower === rainha) {
  console.log('Anda quantas casas quiser, na direção que quiser');
} else if (pecaLower === 'rei') {
  console.log('Anda em qualquer direção, mas apenas uma casa');
}
