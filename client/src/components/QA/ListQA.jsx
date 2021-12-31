import React, { useContext, useEffect, useState, createContext } from 'react';
import { AppContext } from '../app.jsx';
import axios from 'axios';
import { API_KEY } from '../../../../config/config.js';
import IndividualQA from './IndividualQA.jsx';

export const QuestionContext = createContext(null);

const ListQA = () => {

  const { currentItem } = useContext(AppContext);

  const [questionData, setQuestionData] = useState([]);

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions?product_id=${currentItem.id}`,
        {
          headers: {
            Authorization: API_KEY,
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => {
        setQuestionData(response.data.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, [currentItem]);

  let list = questionData.map((question, index) => {
    console.log("Questions list: ", question);
    return <IndividualQA question={question} key={`${question.question_id}`}/>;
  });

  return (
    <div>
      {/* {console.log('QuestionData: ', questionData)} */}
      {/* {console.log('List:', questions)} */}
      {console.log('currentItem:', currentItem)}
      <QuestionContext.Provider value={{questionData}}>
        {list}
      </QuestionContext.Provider>
    </div>
  );
};

export default ListQA;