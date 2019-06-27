#!/usr/bin/env node
import { gameEngine } from '..';
import askQuestions from '../games/calc';

console.log('What is the result of the expression?');
gameEngine(askQuestions);
