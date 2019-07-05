import gameEngine from '..';

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
const askQuestions = () => {
  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const random = getRandomInt(2, 100);

  const isPrime = (number) => {
    if (number < 2) {
      return false;
    }

    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  };

  let output = [];
  if (isPrime(random)) {
    output = [`${random}`, 'yes'];
  } else {
    output = [`${random}`, 'no'];
  }
  return output;
};

gameEngine(askQuestions);

export default askQuestions;
