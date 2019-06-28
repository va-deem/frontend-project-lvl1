#!/usr/bin/env node
import { gameEngine } from '..';
import askQuestions from '../games/prime';

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
gameEngine(askQuestions);
