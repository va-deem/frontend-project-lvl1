import engine from '..';
import getRandomNumber from '../generator';

const gameCondition = 'What number is missing in the progression?';
const progressionLength = 10;
const generateGame = () => {
  const randomStart = getRandomNumber(1, 100);
  const randomStep = getRandomNumber(3, 7);
  const randomElement = getRandomNumber(1, progressionLength - 1);

  let sequence = '';
  let missingElement = 0;
  for (let i = 0; i < progressionLength; i += 1) {
    const element = randomStart + randomStep * i;
    if (i === randomElement) {
      sequence = `${sequence} ..`;
      missingElement = element;
    } else {
      sequence = `${sequence} ${element}`;
    }
  }
  return [sequence, String(missingElement)];
};

export default () => engine(gameCondition, generateGame);
