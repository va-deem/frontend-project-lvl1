import gameEngine from '..';
import getRandomNumber from '../generator';

const gameCondition = 'What is the result of the expression?';
const generateGame = () => {
  const firstOperand = getRandomNumber(1, 10);
  const secondOperand = getRandomNumber(1, 10);
  const operators = ['-', '+', '*'];
  const randomOperator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${firstOperand} ${randomOperator} ${secondOperand}`;
  let result = '';

  switch (randomOperator) {
    case '-':
      result = firstOperand - secondOperand;
      break;
    case '+':
      result = firstOperand + secondOperand;
      break;
    case '*':
      result = firstOperand * secondOperand;
      break;
    default:
      result = [];
  }
  return [question, String(result)];
};

export default () => gameEngine(gameCondition, generateGame);
