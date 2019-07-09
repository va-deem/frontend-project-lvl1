import gameEngine from '..';
import getRandomNumber from '../generator';

console.log('Answer "yes" if number even otherwise answer "no".');
const isEven = int => int % 2 === 0;
const startGame = () => {
  const question = getRandomNumber(1, 1000);

  let output = '';
  if (isEven(question)) {
    output = 'yes';
  } else {
    output = 'no';
  }
  return [`${question}`, output];
};

gameEngine(startGame);

export default startGame;
