var readlineSync = require('readline-sync') //requerimentos de módulos devem estar no topo do projeto!!!

console.log("Hello, I am your JS Calculator !");
console.log("Choose an operation.");

console.log("Addition, Subtraction, Multiplication, Division");
var operation = readlineSync.question();

console.log('Now, choose the first number in the operation.');
var firstNumber = readlineSync.question();

console.log('And the second number...');
var secondNumber = readlineSync.question();

// Funções que carregam a lógica das operações matemáticas.
// Math.floor arredonda os resultados para que eles fiquem o mais próximos possivel de um número inteiro
// Math.abs da o resultado absoluto da operação. Eu preferi usar Math.abs para que a aplicação seja mais 
// acessível.
function Addition() {
  return Math.abs(Number(firstNumber) + Number(secondNumber))
};

function Subtraction() {
  return Math.abs(Number(firstNumber) - Number(secondNumber))
};

function Multiplication() {
  return Math.abs(Number(firstNumber) * Number(secondNumber))
};

function Division() {
  return Math.abs(Number(firstNumber) / Number(secondNumber))
};

// Switch statements que lêem o input no console na variavel 'operation' e realizam a operação requerida 
// pelo usuário.

switch (operation) {
  case 'Addition':
    console.log('The result is:');
    console.log(Addition());
    break;
  case 'Subtraction':
    console.log('The result is:');
    console.log(Subtraction());
    break;
  case 'Multiplication':
    console.log('The result is:');
    console.log(Multiplication());
    break;
  case 'Division':
    console.log('The result is:');
    console.log(Division());
    break;
  default: console.log('This is not an operation, your foolish piece of flesh.');
};
console.log(';)');
