import engine from '..';
import getRandomNumber from '../generator';

const gameCondition = 'What number is missing in the progression?';
const progressionLength = 10;
const generateRound = () => {
  const start = getRandomNumber(1, 100);
  const step = getRandomNumber(3, 7);
  const hiddenElementIndex = getRandomNumber(0, progressionLength - 1);
  const progression = [];
  const missingElementMarker = '..';
  const correctAnswer = start + step * hiddenElementIndex;
  for (let i = 0; i < progressionLength; i += 1) {
    const element = start + step * i;
    if (i === hiddenElementIndex) {
      progression.push(missingElementMarker);
    } else {
      progression.push(element);
    }
  }
  const question = progression.join(' ');
  return [question, String(correctAnswer)];
};

export default () => engine(gameCondition, generateRound);
