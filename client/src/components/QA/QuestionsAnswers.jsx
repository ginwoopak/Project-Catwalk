import React, { useContext, useEffect, useState } from 'react';
import SearchBarQA from './SearchBarQA.jsx';
import IndividualQA from './IndividualQA.jsx';
import LoadMoreQA from './LoadMoreQA.jsx';
import MoreAnsweredQuestionsQA from './MoreAnsweredQuestionsQA.jsx';
import ListQA from './ListQA.jsx';
import { AppContext } from '../app.jsx';
import axios from 'axios';
import { API_KEY } from '../../../../config/config.js';

const QuestionsAnswers = () => {
  const { currentItem } = useContext(AppContext);

  return (
    <div>
      <h3>Questions & Answers</h3>
      <div>
        <SearchBarQA />
        <ListQA className='align_left' />
        {/* <IndividualQA />
        <br></br>
        <IndividualQA /> */}
      </div>
      <div>
        <LoadMoreQA />
      </div>
      <div>
        <MoreAnsweredQuestionsQA />
      </div>
    </div>
  );
};

export default QuestionsAnswers;
