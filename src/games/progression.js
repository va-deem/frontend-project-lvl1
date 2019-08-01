import engine from '..';
import getRandomNumber from '../generator';

const gameCondition = 'What number is missing in the progression?';
const progressionLength = 10;
const generateRound = () => {
  const start = getRandomNumber(1, 100);
  const step = getRandomNumber(3, 7);
  const hiddenElementIndex = getRandomNumber(0, progressionLength - 1);

  let question = '';
  let missingElement;
  for (let i = 0; i < progressionLength; i += 1) {
    const element = start + step * i;
    if (i === hiddenElementIndex) {
      question += '.. ';
      missingElement = element;
    } else {
      question += `${element} `;
    }
  }

  return [question, String(missingElement)];
};

export default () => engine(gameCondition, generateRound);
