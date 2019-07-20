import readlineSync from 'readline-sync';

const gameEngine = (condition, func) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(condition);

  const attemptsNumber = 3;
  for (let i = 1; i <= attemptsNumber; i += 1) {
    const [question, correctAnswer] = func();
    const answer = readlineSync.question(`Question: ${question}\nYour answer:`);
    if (answer === correctAnswer) {
      console.log('Correct!');
      if (attemptsNumber === 3) {
        console.log(`Congratulations, ${name}!`);
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was ${correctAnswer}. \nLet's try again, ${name}!`);
      break;
    }
  }
};

export default gameEngine;
