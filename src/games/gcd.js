import gameEngine from '..';
import getRandomNumber from '../generator';

const gameCondition = 'Find the greatest common divisor of given numbers.';
const findGcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return findGcd(b, a % b);
};

const startGame = () => {
  const random1 = getRandomNumber(1, 21);
  const random2 = getRandomNumber(1, 21);

  const gcd = findGcd(random1, random2);

  return [`${random1} ${random2}`, String(gcd)];
};

gameEngine(gameCondition, startGame);

export default startGame;
