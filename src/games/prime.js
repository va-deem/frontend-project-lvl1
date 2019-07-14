import gameEngine from '..';
import getRandomNumber from '../generator';

const gameCondition = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const startGame = () => {
  const question = getRandomNumber(2, 100);

  const isPrime = (number) => {
    if (number < 2) {
      return false;
    }

    for (let i = 2; i < (number / 2); i += 1) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  };

  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

gameEngine(gameCondition, startGame);

export default startGame;
