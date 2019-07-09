import gameEngine from '..';
import getRandomNumber from '../generator';

console.log('What number is missing in the progression?');
const startGame = () => {
  const randomStart = getRandomNumber(1, 100);
  const randomStep = getRandomNumber(3, 7);
  const randomNumber = getRandomNumber(1, 9);
  const progressionLength = 10;

  let element = randomStart;
  let i = 0;
  let sequence = '';
  let missedElement = 0;
  while (i < progressionLength) {
    element += randomStep;
    if (i === randomNumber) {
      sequence = `${sequence} ..`;
      missedElement = element;
    } else {
      sequence = `${sequence} ${element}`;
    }
    i += 1;
  }
  return [sequence, String(missedElement)];
};

gameEngine(startGame);

export default startGame;
