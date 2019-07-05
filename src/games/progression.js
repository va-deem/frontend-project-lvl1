import gameEngine from '..';

console.log('What number is missing in the progression?');
const askQuestions = () => {
  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const randomStart = getRandomInt(1, 100);
  const randomStep = getRandomInt(3, 7);
  const randomNumber = getRandomInt(1, 9);
  const progressionLength = 10;

  let element = randomStart;
  let i = 0;
  let sequence = '';
  let missedElement = 0;
  while (i < progressionLength) {
    element += randomStep;
    if (i === randomNumber) {
      sequence += '.. ';
      missedElement = element;
    } else {
      sequence += `${element} `;
    }
    i += 1;
  }
  return [sequence, String(missedElement)];
};

gameEngine(askQuestions);

export default askQuestions;
