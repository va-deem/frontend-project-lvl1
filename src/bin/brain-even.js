#!/usr/bin/env node
import { gameEngine } from '..';
import askQuestions from '../games/even';

gameEngine(askQuestions);
