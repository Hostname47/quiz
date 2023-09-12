import {QuizItem} from '../utils/types';

/**
 * examples of quiz types
 */

export const quizzes: QuizItem[] = [
  {
    level: 1,
    type: 'text',
    question: 'Who won the 2023 Champions League finals ?',
    options: ['Real Madrid', 'Liverpool', 'Manchester City', 'Inter Milan'],
    answer: 'Manchester City',
  },
  {
    level: 2,
    type: 'text',
    question: 'When did Lionel Messi leave Barcelona FC ?',
    options: [2019, 2020, 2021, 2022],
    answer: 2021,
  },
  {
    level: 3,
    type: 'image',
    question: 'Who is this player ?',
    image: require('./quizzes-images/roberto.png'),
    options: [
      'Paolo Maldini',
      'Daniele Massaro',
      'Roberto Baggio',
      'Nicola Berti',
    ],
    answer: 'Roberto Baggio',
  },
  {
    level: 4,
    type: 'image-with-segments',
    image: require('./quizzes-images/roberto.png'),
    options: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
    segments: [
      {
        type: 'text',
        value: 'segment',
      },
      {
        type: 'image',
        value: require('./quizzes-images/roberto.png'),
      },
      {
        type: 'text',
        value: 'segment',
      },
      {
        type: 'image',
        value: require('./quizzes-images/roberto.png'),
      },
    ],
    answer: 'Answer 4',
  },
  {
    level: 5,
    type: 'image',
    question: 'Who is this player ?',
    image: require('./quizzes-images/roberto.png'),
    options: [
      'Paolo Maldini',
      'Daniele Massaro',
      'Roberto Baggio',
      'Nicola Berti',
    ],
    answer: 'Roberto Baggio',
  },
  {
    level: 6,
    type: 'image',
    question: 'Who is this player ?',
    image: require('./quizzes-images/roberto.png'),
    options: [
      'Paolo Maldini',
      'Daniele Massaro',
      'Roberto Baggio',
      'Nicola Berti',
    ],
    answer: 'Roberto Baggio',
  },
  {
    level: 7,
    type: 'image',
    question: 'Who is this player ?',
    image: require('./quizzes-images/roberto.png'),
    options: [
      'Paolo Maldini',
      'Daniele Massaro',
      'Roberto Baggio',
      'Nicola Berti',
    ],
    answer: 'Roberto Baggio',
  },
  {
    level: 8,
    type: 'image',
    question: 'Who is this player ?',
    image: require('./quizzes-images/roberto.png'),
    options: [
      'Paolo Maldini',
      'Daniele Massaro',
      'Roberto Baggio',
      'Nicola Berti',
    ],
    answer: 'Roberto Baggio',
  },
  {
    level: 9,
    type: 'image',
    question: 'Who is this player ?',
    image: require('./quizzes-images/roberto.png'),
    options: [
      'Paolo Maldini',
      'Daniele Massaro',
      'Roberto Baggio',
      'Nicola Berti',
    ],
    answer: 'Roberto Baggio',
  },
  {
    level: 10,
    type: 'image',
    question: 'Who is this player ?',
    image: require('./quizzes-images/roberto.png'),
    options: [
      'Paolo Maldini',
      'Daniele Massaro',
      'Roberto Baggio',
      'Nicola Berti',
    ],
    answer: 'Roberto Baggio',
  },
  {
    level: 11,
    type: 'image-with-segments',
    image: require('./quizzes-images/roberto.png'),
    options: ['Answer1', 'Answer 2', 'Answer 3', 'Answer 4'],
    segments: [
      {
        type: 'text',
        value: 'hint 1',
      },
      {
        type: 'text',
        value: 'hint 2',
      },
      {
        type: 'text',
        value: 'hint 3',
      },
      {
        type: 'text',
        value: 'hint 4',
      },
    ],
    answer: 'hint 3',
  },
];
