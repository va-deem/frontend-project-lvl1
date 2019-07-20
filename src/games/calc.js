import gameEngine from '..';
import getRandomNumber from '../generator';

const gameCondition = 'What is the result of the expression?';
const generateGame = () => {
  const firstOperand = getRandomNumber(1, 10);
  const secondOperand = getRandomNumber(1, 10);


  const minus = [`${firstOperand} - ${secondOperand}`, String(firstOperand - secondOperand)];
  const plus = [`${firstOperand} + ${secondOperand}`, String(firstOperand + secondOperand)];
  const multiple = [`${firstOperand} * ${secondOperand}`, String(firstOperand * secondOperand)];
  const questions = [minus, plus, multiple];

  const operatorChoice = getRandomNumber(0, questions.length - 1);
  switch (operatorChoice) {
    case 0:
      return questions[0];
    case 1:
      return questions[1];
    case 2:
      return questions[2];
    default:
      return [];
  }
};

export default () => gameEngine(gameCondition, generateGame);
