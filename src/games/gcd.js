import engine from '..';
import getRandomNumber from '../generator';

const gameCondition = 'Find the greatest common divisor of given numbers.';
const findGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return findGcd(b, a % b);
};
const generateRound = () => {
  const random1 = getRandomNumber(1, 20);
  const random2 = getRandomNumber(1, 20);
  const question = `${random1} ${random2}`;
  const correctAnswer = findGcd(random1, random2);
  return [question, String(correctAnswer)];
};

export default () => engine(gameCondition, generateRound);
