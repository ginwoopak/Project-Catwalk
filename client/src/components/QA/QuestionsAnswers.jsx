import React from 'react';
import SearchBarQA from './SearchBarQA.jsx';
import IndividualQA from './IndividualQA.jsx';
import LoadMoreQA from './LoadMoreQA.jsx';
import MoreAnsweredQuestionsQA from './MoreAnsweredQuestionsQA.jsx';

const QuestionsAnswers = ({ allProducts }) => {

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
      <div className='rowQuestion'>
        <MoreAnsweredQuestionsQA />
      </div>
    </div>
  );
};

export default QuestionsAnswers;