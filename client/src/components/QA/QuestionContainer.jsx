import React, { useContext, useEffect, useState, createContext } from 'react';
import SearchBar from './SearchBar.jsx';
// import LoadAnswers from './LoadAnswers.jsx';
import MoreQuestions from './MoreQuestions.jsx';
import QuestionList from './QuestionList.jsx';
import AddQuestion from './AddQuestion.jsx';
import ModalQuestion from './ModalQuestion.jsx';
import { AppContext } from '../app.jsx';
import './QA.css';

export const QuestionContext = createContext(null);

const QuestionContainer = () => {
  const { currentItem, callAPI } = useContext(AppContext);

  const [questionData, setQuestionData] = useState([]);
  const [questionLimit, setQuestionLimit] = useState(2);
  const [displayData, setDisplayData] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [questionModalOpen, setQuestionModalOpen] = useState(false);

  // console.log('currentItem', currentItem)

  useEffect(() => {
    try {
      callAPI(`qa/questions?product_id=${currentItem.id}&count=50`, (response) => {
        setQuestionData(response.data.results);
        setDisplayData(response.data.results);
      });
    } catch (error) {
      console.log(error);
    }
  }, [currentItem]);

  let handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  // console.log('searchResult:', searchData);

  useEffect(() => {
    if (searchInput.length < 3) {
      setDisplayData(questionData);
    } else {
      const searchResult = questionData.filter((question) => {
        return question.question_body.includes(searchInput);
      });

      setDisplayData(searchResult);
    }
  }, [searchInput]);

  return (
    <div>
      <QuestionContext.Provider
        value={{ questionData, questionLimit, handleChange, displayData }}
      >
        {questionModalOpen ? (<ModalQuestion
          questionModalOpen={questionModalOpen}
          setQuestionModalOpen={setQuestionModalOpen}
        />) : null}
        <h2>Questions & Answers</h2>
        <div>
          <SearchBar />
          {questionData.length > 0 ? (
            <QuestionList className='align_left' />
          ) : null}
        </div>
        <div
          onClick={() => {
            setQuestionLimit(questionLimit + 2);
          }}
        >
          {questionData.length > 2 && <MoreQuestions />}
        </div>
        <div>
          <AddQuestion setQuestionModalOpen={setQuestionModalOpen} />
        </div>
      </QuestionContext.Provider>
    </div>
  );
};

export default QuestionContainer;
