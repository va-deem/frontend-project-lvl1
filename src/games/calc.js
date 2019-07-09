import gameEngine from '..';
import getRandomNumber from '../generator';

console.log('What is the result of the expression?');
const startGame = () => {  
  const firstOperand = getRandomNumber(1, 10);
  const secondOperand = getRandomNumber(1, 10);
  const operatorsCount = 3;
  const operatorChoice = getRandomNumber(0, operatorsCount);

  switch (operatorChoice) {
    case 0:
      return [`${firstOperand} - ${secondOperand}`, String(firstOperand - secondOperand)];
    case 1:
      return [`${firstOperand} + ${secondOperand}`, String(firstOperand + secondOperand)];
    case 2:
      return [`${firstOperand} * ${secondOperand}`, String(firstOperand * secondOperand)];
    default:
      return [];
  }
};

gameEngine(startGame);

export default startGame;
