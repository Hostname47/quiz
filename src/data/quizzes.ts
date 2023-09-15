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
// 3. Image question with hints (hints can be a text or image)
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
    question: 'Who is the inventor of electricity ?',
    options: [
      'Benjamin Franklin',
      'Michael Faraday',
      'Thomas Edison',
      'Nikola Tesla',
    ],
    answer: 'Benjamin Franklin',
  },
  {
    level: 2,
    type: 'image',
    question: 'In which country this picture taken ?',
    image: require('./quizzes-images/morocco.jpg'),
    options: ['Egypt', 'Senegal', 'Spain', 'Morocco'],
    answer: 'Morocco',
  },
  {
    level: 3,
    type: 'image-with-hints',
    question: 'Who is this chess player ?',
    image: require('./quizzes-images/chess.jpg'),
    hints: [
      {
        type: 'text',
        value: 'American',
      },
      {
        type: 'text',
        value: '2895',
      },
      {
        type: 'text',
        value: 'Controversial figure',
      },
    ],
    options: [
      'Garry Kasparov',
      'Bobby Fischer',
      'Alexander Alekhine',
      'Anatoly Karpov',
    ],
    answer: 'Bobby Fischer',
  },
];
