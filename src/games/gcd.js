import readlineSync from 'readline-sync';
import { name } from '..';

const askQuestions = () => {
  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const random1 = getRandomInt(1, 21);
  const random2 = getRandomInt(1, 21);
  const findGcd = (a, b) => {
    if (b === 0) {
      return a;
    }
    return findGcd(b, a % b);
  };

  const gcd = findGcd(random1, random2);
  const answer = readlineSync.question(`Question: ${random1} ${random2}\nYour answer:`);
  let result = '';
  if (Number(answer) === gcd) {
    console.log('Correct!');
    result = true;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was ${gcd}. \nLet's try again, ${name}!`);
    result = false;
  }
  return result;
};

export default askQuestions;
