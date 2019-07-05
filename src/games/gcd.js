import gameEngine from '..';

console.log('Find the greatest common divisor of given numbers.');
const askQuestions = () => {
  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;
  const random1 = getRandomInt(1, 21);
  const random2 = getRandomInt(1, 21);
  const findGcd = (a, b) => {
    if (b === 0) {
      return a;
    }
    return findGcd(b, a % b);
  };
  const gcd = findGcd(random1, random2);

  return [`${random1} ${random2}`, String(gcd)];
};

gameEngine(askQuestions);

export default askQuestions;
