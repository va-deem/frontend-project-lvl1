import engine from '..';
import getRandomNumber from '../generator';

const gameCondition = 'What is the result of the expression?';
const operators = ['-', '+', '*'];
const generateRound = () => {
  const firstOperand = getRandomNumber(1, 10);
  const secondOperand = getRandomNumber(1, 10);
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
      result = null;
  }
  return [question, String(result)];
};

export default () => engine(gameCondition, generateRound);
