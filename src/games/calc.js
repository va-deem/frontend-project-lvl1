import gameEngine from '..';
import getRandomNumber from '../generator';

console.log('What is the result of the expression?');
const startGame = () => {
  const firstOperand = getRandomNumber(1, 10);
  const secondOperand = getRandomNumber(1, 10);
  const operatorChoice = getRandomNumber(0, 3);

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
