import readlineSync from 'readline-sync';
import { name } from '..';

const askQuestions = () => {
  const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

  const firstOperand = getRandomInt(1, 10);
  const secondOperand = getRandomInt(1, 10);
  const operatorChoice = getRandomInt(0, 3);

  const randomExpression = () => {
    let resArray = [];
    if (operatorChoice === 0) {
      resArray = [`${firstOperand} - ${secondOperand}`, firstOperand - secondOperand];
    } else if (operatorChoice === 1) {
      resArray = [`${firstOperand} + ${secondOperand}`, firstOperand + secondOperand];
    } else {
      resArray = [`${firstOperand} * ${secondOperand}`, firstOperand * secondOperand];
    }
    return resArray;
  };

  const expression = (randomExpression());
  const answer = readlineSync.question(`Question: ${expression[0]}\nYour answer:`);
  let result = '';
  if (Number(answer) === expression[1]) {
    console.log('Correct!');
    result = true;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was ${expression[1]}. \nLet's try again, ${name}!`);
    result = false;
  }
  return result;
};

export default askQuestions;
