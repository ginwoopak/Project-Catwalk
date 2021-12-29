import React from 'react';
import SearchBarQA from './SearchBarQA.jsx';
import IndividualQA from './IndividualQA.jsx';
import LoadMoreQA from './LoadMoreQA.jsx';

const QuestionsAnswers = () => {
  return (
    <div>
      <h3>Questions & Answers</h3>
      <div>
        <SearchBarQA />
      </div>
      <br></br>
      <div>
        <IndividualQA />
        <br></br>
        <IndividualQA />
      </div>
      <br></br>
      <div>
        <LoadMoreQA />
      </div>
    </div>
  );
};

export default QuestionsAnswers;