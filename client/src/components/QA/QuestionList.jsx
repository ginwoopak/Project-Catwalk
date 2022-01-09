import React, { useContext } from 'react';
import { QuestionContext } from './QuestionContainer.jsx';
import QuestionItem from './QuestionItem.jsx';

const QuestionList = () => {
  const { questionLimit, displayData } = useContext(QuestionContext);

  let list = displayData.slice(0, questionLimit).map((question) => {
    return (
      <QuestionItem
        question={question}
        questionId={question.question_id}
        key={question.question_id}
      />
    );
  });

  return <div className='accordion'>{list}</div>;
};

export default QuestionList;
