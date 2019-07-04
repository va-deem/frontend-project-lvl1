import readlineSync from 'readline-sync';
import { name } from '..';

console.log('What number is missing in the progression?');
const askQuestions = () => {
  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const randomStart = getRandomInt(1, 100);
  const randomStep = getRandomInt(3, 7);
  const randomNumber = getRandomInt(1, 9);

  const randomSequence = () => {
    let element = randomStart;
    let i = 0;
    let sequence = '';
    let missedElement = 0;
    while (i < 10) {
      element += randomStep;
      if (i === randomNumber) {
        sequence += '.. ';
        missedElement = element;
      } else {
        sequence += `${element} `;
      }
      i += 1;
    }
    return [sequence, missedElement];
  };

  const sequence = randomSequence();
  const answer = readlineSync.question(`Question: ${sequence[0]}\nYour answer:`);
  let result = '';
  if (Number(answer) === sequence[1]) {
    console.log('Correct!');
    result = true;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was ${sequence[1]}. \nLet's try again, ${name}!`);
    result = false;
  }
  return result;
};

export default askQuestions;
