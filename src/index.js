
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
export const name = readlineSync.question('May I have your name? ');
export const greet = (str) => {
  console.log(`Hello, ${str}!`);
};
greet(name);


export const gameEngine = (func) => {
  let answersCount = 0;
  for (let i = 0; i < 3; i += 1) {
    if (func()) {
      answersCount += 1;
    } else break;
  }

  if (answersCount === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
