#!/usr/bin/env node
import { gameEngine } from '..';
import askQuestions from '../games/calc';

gameEngine(askQuestions);
