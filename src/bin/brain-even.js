#!/usr/bin/env node
import { gameEngine } from '..';
import askQuestions from '../games/even';

console.log('Answer "yes" if number even otherwise answer "no".');
gameEngine(askQuestions);
