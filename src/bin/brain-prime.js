#!/usr/bin/env node
import { gameEngine } from '..';
import askQuestions from '../games/prime';

gameEngine(askQuestions);
