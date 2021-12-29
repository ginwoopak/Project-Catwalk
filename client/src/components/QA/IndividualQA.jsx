import React from 'react';
import QuestionQA from './QuestionQA.jsx';
import AnswerQA from './AnswerQA.jsx';
import HelpfulQA from './HelpfulQA.jsx';
import AddAnswerQA from './AddAnswerQA.jsx';
import UsernameQA from './UsernameQA.jsx';
import ReportQA from './ReportQA.jsx';

const IndividualQA = () => {
  return (
    <div>
      <span className="rowQuestion">
        <QuestionQA />
        <HelpfulQA /> |
        <AddAnswerQA />
      </span>
      <div>
        <AnswerQA />
      </div>
      <span className="rowQuestion">
        <UsernameQA /> |
        <HelpfulQA /> |
        <ReportQA />
      </span>
    </div>
  );
};

export default IndividualQA;