#!/usr/bin/env node
import { gameEngine } from '..';
import askQuestions from '../games/progression';

gameEngine(askQuestions);
