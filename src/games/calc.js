import gameEngine from '..';
import getRandomNumber from '../generator';

const gameCondition = 'What is the result of the expression?';
const startGame = () => {
  const firstOperand = getRandomNumber(1, 10);
  const secondOperand = getRandomNumber(1, 10);
  const questions = [String(firstOperand - secondOperand), String(firstOperand + secondOperand),
    String(firstOperand * secondOperand)];
  const operatorsCount = questions.length;
  const [minus, plus, multiple] = questions;
  const operatorChoice = getRandomNumber(0, operatorsCount);

  switch (operatorChoice) {
    case 0:
      return [`${firstOperand} - ${secondOperand}`, minus];
    case 1:
      return [`${firstOperand} + ${secondOperand}`, plus];
    case 2:
      return [`${firstOperand} * ${secondOperand}`, multiple];
    default:
      return [];
  }
};

gameEngine(gameCondition, startGame);

export default startGame;
