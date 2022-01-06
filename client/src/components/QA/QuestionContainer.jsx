import React, { useContext, useEffect, useState, createContext } from 'react';
import SearchBar from './SearchBar.jsx';
// import LoadAnswers from './LoadAnswers.jsx';
import MoreQuestions from './MoreQuestions.jsx';
import QuestionList from './QuestionList.jsx';
import { AppContext } from '../app.jsx';
import './QA.css';

export const QuestionContext = createContext(null);

const QuestionContainer = () => {
  const { currentItem, callAPI } = useContext(AppContext);

  const [questionData, setQuestionData] = useState([]);
  const [questionLimit, setQuestionLimit] = useState(2);

  useEffect(() => {
    try {
      callAPI(`qa/questions?product_id=${currentItem.id}`, (response) => {
        setQuestionData(response.data.results);
      });
    } catch (error) {
      console.log(error);
    }
  }, [currentItem]);

  // let handleChange = (e) => {
  //   e.preventDefault();

  //   const searchResult = questionData.filter((question) => {question.})
  // };

  console.log(questionData);

  return (
    <div>
      <QuestionContext.Provider value={{ questionData, questionLimit }}>
        <h2>Questions & Answers</h2>
        <div>
          <SearchBar />
          {questionData.length > 0 ? <QuestionList className='align_left' /> : null}
        </div>
        <div
          onClick={() => {
            setQuestionLimit(questionLimit + 2);
          }}
        >
          {questionData.length > 2 && <MoreQuestions />}
        </div>
      </QuestionContext.Provider>
    </div>
  );
};

export default QuestionContainer;
