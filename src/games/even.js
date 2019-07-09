import gameEngine from '..';
import getRandomNumber from '../generator';

console.log('Answer "yes" if number even otherwise answer "no".');
const isEven = int => int % 2 === 0;
const startGame = () => {
  const number = getRandomNumber(1, 1000);

  let output = [];
  if (isEven(number)) {
    output = [`${number}`, 'yes'];
  } else {
    output = [`${number}`, 'no'];
  }
  return output;
};

gameEngine(startGame);

export default startGame;
