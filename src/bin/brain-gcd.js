#!/usr/bin/env node
import { gameEngine } from '..';
import askQuestions from '../games/gcd';

gameEngine(askQuestions);
