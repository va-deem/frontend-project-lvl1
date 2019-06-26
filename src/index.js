/* eslint consistent-return: "off" */
/* swithed the rule off when found in the ESLint guide:
"If you want to allow functions to have different return behavior depending on code branching,
then it is safe to disable this rule." */
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
export const name = readlineSync.question('May I have your name? ');
export const greet = (str) => {
  console.log(`Hello, ${str}!`);
};

export const askQuestions = () => {
  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const isEven = int => int % 2 === 0;
  const isYes = str => str === 'yes';
  const isNo = str => str === 'no';
  const askQuestion = () => {
    const number = getRandomInt(1, 1000);
    const answer = readlineSync.question(`Question: ${number}\nYour answer:`);

    // answer is not "no" and number is odd
    if (!isNo(answer) && !isEven(number)) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'. \nLet's try again, ${name}!`);
      return false;
    }

    // answer is not "yes" and number is even
    if (!isYes(answer) && isEven(number)) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'. \nLet's try again, ${name}!`);
      return false;
    }

    // answer is "yes" and number is even OR answer is "no" and number is odd
    if ((isYes(answer) && isEven(number)) || (isNo(answer) && !isEven(number))) {
      console.log('Correct!');
      return true;
    }
  };

  let answersCount = 0;
  for (let i = 0; i < 3; i += 1) {
    if (askQuestion()) {
      answersCount += 1;
    } else break;
  }

  if (answersCount === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
