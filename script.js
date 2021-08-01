//var
var altura = 5;
var comprimento = 7;

area = altura * comprimento;
console.log(area);
var area;

//let
let forma = 'retângulo'
let alturaLet = 5;
let comprimentoLet = 7;
let areaLet = null;

if(forma === 'retângulo') {
  areaLet = alturaLet * comprimentoLet;
} else {
  areaLet = (alturaLet * comprimentoLet) / 2;
}

console.log(areaLet);

const formaConst = 'quadrado';
const alturaConst = 5;
const comprimentoConst = 7;
let areaConst;

if(formaConst === 'triângulo') {
  areaConst = alturaConst * comprimentoConst;
} else {
  areaConst = (alturaConst * comprimentoConst) / 2;
}

console.log(areaConst);
