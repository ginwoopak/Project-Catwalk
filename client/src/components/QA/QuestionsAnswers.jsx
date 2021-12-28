import React from 'react';
import SearchBarQA from './SearchBarQA.jsx';
import IndividualQA from './IndividualQA.jsx';

const QuestionsAnswers = () => {
  return (
    <div>
      <h3>Questions & Answers</h3>
      <div>
        <SearchBarQA />
      </div>
      <div>
        <IndividualQA />
      </div>
    </div>
  );
};

export default QuestionsAnswers;