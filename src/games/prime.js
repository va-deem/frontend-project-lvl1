import readlineSync from 'readline-sync';
import { name } from '..';

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
const askQuestions = () => {
  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const random = getRandomInt(2, 300);

  const isPrime = (number) => {
    if (number < 2) {
      return 'no';
    }
    for (let i = 2; i < number; i += 1) {
      if (number % i === 0) {
        return 'no';
      }
    }
    return 'yes';
  };

  const rightAnswer = isPrime(random);

  const answer = readlineSync.question(`Question: ${random}\nYour answer:`);
  let result = '';
  if (answer === rightAnswer) {
    console.log('Correct!');
    result = true;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was ${rightAnswer}. \nLet's try again, ${name}!`);
    result = false;
  }
  return result;
};

export default askQuestions;
