import readlineSync from 'readline-sync';

const gameEngine = (condition, func) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(condition);

  let answersCount = 0;
  const attemptsNumber = 3;
  for (let i = 0; i < attemptsNumber; i += 1) {
    const [question, correctAnswer] = func();
    const answer = readlineSync.question(`Question: ${question}\nYour answer:`);
    if (answer === correctAnswer) {
      console.log('Correct!');
      answersCount += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was ${correctAnswer}. \nLet's try again, ${name}!`);
      break;
    }
  }

  if (answersCount === attemptsNumber) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default gameEngine;
