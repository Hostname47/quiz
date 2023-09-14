import {QuizItem} from '../utils/types';

/**
 * examples of quiz types supported by this app
 */

// 1. text question
/* 
  {
    level: 1,
    type: 'text',
    question: 'Who won the 2023 Champions League finals ?',
    options: ['Real Madrid', 'Liverpool', 'Manchester City', 'Inter Milan'],
    answer: 'Manchester City',
  }
*/
// 2. image question (the image should be present in quizzes-images folder under data directory)
/* 
  {
    level: 2,
    type: 'image',
    question: 'Who won the 2023 Champions League finals ?',
    image: require('./quizzes-images/image-name.png')
    options: ['Real Madrid', 'Liverpool', 'Manchester City', 'Inter Milan'],
    answer: 'Manchester City',
  }
*/
// 3. Image question with hints (hints can be a text or image in quizzes-images)
/* 
  {
    level: 4,
    type: 'image-with-hints',
    image: require('./quizzes-images/morocco.jpg'),
    options: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
    hints: [
      { type: 'text', value: 'hint 1'},
      { type: 'image', value: require('./quizzes-images/morocco.jpg')},
      { type: 'text', value: 'hint 3'},
      { type: 'image', value: require('./quizzes-images/morocco.jpg')},
    ],
    answer: 'Answer 4',
  }
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
    image: require('./quizzes-images/morocco.jpg'),
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
    type: 'image-with-hints',
    image: require('./quizzes-images/morocco.jpg'),
    options: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
    hints: [
      {
        type: 'text',
        value: 'hint 1',
      },
      {
        type: 'image',
        value: require('./quizzes-images/morocco.jpg'),
      },
      {
        type: 'text',
        value: 'hint 2',
      },
      {
        type: 'image',
        value: require('./quizzes-images/morocco.jpg'),
      },
    ],
    answer: 'Answer 4',
  },
  {
    level: 5,
    type: 'image',
    question: 'Who is this player ?',
    image: require('./quizzes-images/morocco.jpg'),
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
    image: require('./quizzes-images/morocco.jpg'),
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
    image: require('./quizzes-images/morocco.jpg'),
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
    image: require('./quizzes-images/morocco.jpg'),
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
    image: require('./quizzes-images/morocco.jpg'),
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
    image: require('./quizzes-images/morocco.jpg'),
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
    type: 'image-with-hints',
    image: require('./quizzes-images/morocco.jpg'),
    options: ['Answer1', 'Answer 2', 'Answer 3', 'Answer 4'],
    hints: [
      {
        type: 'text',
        value: 'hint 1 with long text in it',
      },
      {
        type: 'text',
        value: 'hint 2 wit medium text',
      },
      {
        type: 'text',
        value: 'hint 3 tiny and tidy at the same time',
      },
      {
        type: 'text',
        value: 'hint 4',
      },
    ],
    answer: 'Answer 2',
  },
];
