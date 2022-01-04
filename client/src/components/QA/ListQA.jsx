import React, { useContext, useEffect, useState, createContext } from 'react';
import { AppContext } from '../app.jsx';
import IndividualQA from './IndividualQA.jsx';

export const QuestionContext = createContext(null);

const ListQA = () => {
  const { currentItem, callAPI } = useContext(AppContext);

  const [questionData, setQuestionData] = useState([]);

  useEffect(() => {
    try {
      callAPI(`qa/questions?product_id=${currentItem.id}`, (response) => {
        setQuestionData(response.data.results);
      });
    } catch (error) {
      console.log(error);
    }
  }, [currentItem]);

  let list = questionData.map((question) => {
    return <IndividualQA question={question} key={`${question.question_id}`} />;
  });

  // console.log('questionData: ', questionData);

  return (
    <div className='accordion'>
      <QuestionContext.Provider value={{ questionData }}>
        {list}
      </QuestionContext.Provider>
    </div>
  );
};

export default ListQA;
