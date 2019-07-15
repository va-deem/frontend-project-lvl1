import gameEngine from '..';
import getRandomNumber from '../generator';

const gameCondition = 'Answer "yes" if number even otherwise answer "no".';
const isEven = int => int % 2 === 0;
const initGame = () => {
  const question = getRandomNumber(1, 1000);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => gameEngine(gameCondition, initGame);
