import gameEngine from '..';

console.log('What is the result of the expression?');
const startGame = () => {
  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const firstOperand = getRandomInt(1, 10);
  const secondOperand = getRandomInt(1, 10);
  const operatorChoice = getRandomInt(0, 3);

  let output = [];
  if (operatorChoice === 0) {
    output = [`${firstOperand} - ${secondOperand}`, String(firstOperand - secondOperand)];
  } else if (operatorChoice === 1) {
    output = [`${firstOperand} + ${secondOperand}`, String(firstOperand + secondOperand)];
  } else {
    output = [`${firstOperand} * ${secondOperand}`, String(firstOperand * secondOperand)];
  }
  return output;
};

gameEngine(startGame);

export default startGame;
