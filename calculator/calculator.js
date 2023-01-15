var readlineSync = require('readline-sync') //requerimentos de módulos devem estar no topo do projeto!!!

console.log("Hello, I am your JS Calculator !");
console.log("Choose an operation.");

console.log("Addition, Subtraction, Multiplication, Division");
var operation = readlineSync.question('');

console.log('Now, choose the first number in the operation.');
var firstNumber = readlineSync.question('')

console.log('And the second number...');
var secondNumber = readlineSync.question('')

// Funções que carregam a lógica das operações matemáticas.
function Addition() {
  return Math.floor(firstNumber + secondNumber)
}

function Subtraction() {
  return Math.floor(firstNumber - secondNumber)
}

function Multiplication() {
  return Math.floor(firstNumber * secondNumber)
}

function Division() {
  return Math.floor(firstNumber / secondNumber)
}

// Switch statements que lêem o input no console na variavel 'operation' e realizam a operação requerida 
// pelo usuário.

switch (operation) {
  case 'Addition':
    console.log(Addition());
    break;
  case 'Subtraction':
    console.log(Subtraction());
    break;
  case 'Multiplication':
    console.log(Multiplication());
    break;
  case 'Division':
    console.log(Division());
    break;
  default: console.log('This is not an operation, your foolish piece of flesh.');
}
