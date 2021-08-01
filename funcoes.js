// let x = "";
// console.log(x);
// x = "oi";

//Declaração de função
function imprimeTexto(texto) {
  console.log(texto);
}

imprimeTexto(soma(2, 5));

//três formas de escrever funções
function soma(num1 = 0, num2 = 0) {
  return num1 + num2;
}

function multiplica(num1 = 1, num2 = 1) {
  return num1 * num2;
}

function nomeIdade(nome, idade) {
  return `meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeIdade(40, "Juliana"));
console.log(multiplica(soma(4,5), soma(3,3)));