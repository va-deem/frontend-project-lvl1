import gameEngine from '..';
import getRandomNumber from '../generator';

const gameCondition = 'What is the result of the expression?';
const generateGame = () => {
  const firstOperand = getRandomNumber(1, 10);
  const secondOperand = getRandomNumber(1, 10);

  const operators = {
    0: '-',
    1: '+',
    2: '*',
  };
  const randomOperator = operators[getRandomNumber(0, 2)];

  const operations = {
    '-': [`${firstOperand} - ${secondOperand}`, String(firstOperand - secondOperand)],
    '+': [`${firstOperand} + ${secondOperand}`, String(firstOperand + secondOperand)],
    '*': [`${firstOperand} * ${secondOperand}`, String(firstOperand * secondOperand)],
  };

  switch (randomOperator) {
    case '-':
      return operations['-'];
    case '+':
      return operations['+'];
    case '*':
      return operations['*'];
    default:
      return [];
  }
};

export default () => gameEngine(gameCondition, generateGame);
