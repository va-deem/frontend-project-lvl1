#!/usr/bin/env node
import { gameEngine } from '..';
import askQuestions from '../games/gcd';

console.log('Find the greatest common divisor of given numbers.');
gameEngine(askQuestions);
