#!/usr/bin/env node
import { gameEngine } from '..';
import askQuestions from '../games/progression';

console.log('What number is missing in the progression?');
gameEngine(askQuestions);
