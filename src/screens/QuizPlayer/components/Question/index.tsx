import React from 'react';
import {
  ImageQuiz,
  ImageWithSegments,
  QuizItem,
  TextQuiz,
} from '../../../../utils/types';
import TextQuestion from './TextQuestion';
import ImageQuestion from './ImageQuestion';
import ImageWithSegmentsQuestion from './ImageWithSegmentsQuestion';

const Question = ({quiz}: {quiz: QuizItem}) => {
  switch (quiz.type) {
    case 'text':
      return <TextQuestion quiz={quiz as TextQuiz} />;
    case 'image':
      return <ImageQuestion quiz={quiz as ImageQuiz} />;
    case 'image-with-segments':
      return <ImageWithSegmentsQuestion quiz={quiz as ImageWithSegments} />;
  }
};

export default Question;
