import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

const gameEngine = (condition, func) => {
  console.log(condition);
  const check = () => {
    const [question, correctAnswer] = func();
    const answer = readlineSync.question(`Question: ${question}\nYour answer:`);
    let result = '';
    if (answer === correctAnswer) {
      console.log('Correct!');
      result = true;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was ${correctAnswer}. \nLet's try again, ${name}!`);
      result = false;
    }
    return result;
  };

  let answersCount = 0;
  const attemptsNumber = 3;
  for (let i = 0; i < 3; i += 1) {
    if (check()) {
      answersCount += 1;
    } else break;
  }
  if (answersCount === attemptsNumber) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default gameEngine;
