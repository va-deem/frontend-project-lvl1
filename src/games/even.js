import engine from '..';
import getRandomNumber from '../generator';

const gameCondition = 'Answer "yes" if number even otherwise answer "no".';
const isEven = int => int % 2 === 0;
const generateGame = () => {
  const question = getRandomNumber(1, 1000);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => engine(gameCondition, generateGame);
