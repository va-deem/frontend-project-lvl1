import gameEngine from '..';

console.log('Answer "yes" if number even otherwise answer "no".');
const startGame = () => {
  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const isEven = int => int % 2 === 0;
  const number = getRandomInt(1, 1000);

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
