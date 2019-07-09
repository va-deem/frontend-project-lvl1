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

  let output = '';
  if (isPrime(question)) {
    output = 'yes';
  } else {
    output = 'no';
  }
  return [`${question}`, output];
};

gameEngine(gameCondition, startGame);

export default startGame;
