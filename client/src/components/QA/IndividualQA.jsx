import React from 'react';
import QuestionQA from './QuestionQA.jsx';
import AnswerQA from './AnswerQA.jsx';
import HelpfulQA from './HelpfulQA.jsx';

const IndividualQA = () => {
  return (
    <div>
      <span className="rowQuestion">
        <QuestionQA />
        <HelpfulQA />
      </span>
      <span>
        <AnswerQA />
      </span>
    </div>
  );
};

export default IndividualQA;