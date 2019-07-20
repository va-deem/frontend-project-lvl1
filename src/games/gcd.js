import gameEngine from '..';
import getRandomNumber from '../generator';

const gameCondition = 'Find the greatest common divisor of given numbers.';
const findGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return findGcd(b, a % b);
};

const generateGame = () => {
  const random1 = getRandomNumber(1, 20);
  const random2 = getRandomNumber(1, 20);

  const correctAnswer = findGcd(random1, random2);

  return [`${random1} ${random2}`, String(correctAnswer)];
};

export default () => gameEngine(gameCondition, generateGame);
