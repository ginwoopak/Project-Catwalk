import React, { useContext } from 'react';
import { QuestionContext } from './QuestionContainer.jsx';
import QuestionItem from './QuestionItem.jsx';

const QuestionList = () => {

  const { questionData, questionLimit } = useContext(QuestionContext);

  let list = questionData.slice(0, questionLimit).map((question) => {
    return <QuestionItem question={question} key={`${question.question_id}`} />;
  });

  return <div className='accordion'>{list}</div>;
};

export default QuestionList;
