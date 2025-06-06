import { easyQuestions } from './easyQuestions';
import { mediumQuestions } from './mediumQuestions';
import { hardQuestions } from './hardQuestions';
import { Question } from '../../types';

export const allQuestions: Question[] = [
  ...easyQuestions,
  ...mediumQuestions,
  ...hardQuestions
];