import React, { useContext, useEffect, useState, createContext } from 'react';
import SearchBar from './SearchBar.jsx';
import MoreQuestions from './MoreQuestions.jsx';
import QuestionList from './QuestionList.jsx';
import AddQuestion from './AddQuestion.jsx';
import ModalQuestion from './ModalQuestion.jsx';
import ModalAnswer from './ModalAnswer.jsx';
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
  const [answerModalOpen, setAnswerModalOpen] = useState(false);

  const [question, setQuestion] = useState(0);

  useEffect(() => {
    try {
      callAPI(
        `qa/questions?product_id=${currentItem.id}&count=1000`,
        (response) => {
          setQuestionData(response.data.results);
          setDisplayData(response.data.results);
        }
      );
    } catch (error) {
      console.log(error);
    }
  }, [currentItem]);

  let handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    if (searchInput.length < 3) {
      setDisplayData(questionData);
    } else {
      const searchResult = questionData.filter((question) => {
        return question.question_body
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });

      setDisplayData(searchResult);
    }
  }, [searchInput]);

  useEffect(() => {
    setQuestionLimit(2);
  }, [currentItem]);

  return (
    <div className='QAspace'>
      <QuestionContext.Provider
        value={{
          questionData,
          questionLimit,
          handleChange,
          displayData,
          setAnswerModalOpen,
          question,
          setQuestion,
        }}
      >
        {questionModalOpen ? (
          <ModalQuestion
            questionModalOpen={questionModalOpen}
            setQuestionModalOpen={setQuestionModalOpen}
          />
        ) : null}
        {answerModalOpen ? (
          <ModalAnswer
            answerModalOpen={answerModalOpen}
            setAnswerModalOpen={setAnswerModalOpen}
          />
        ) : null}
        <h2 className='QAtitle'>{'Questions & Answers'}</h2>
        <div className='QAtitle'>
          <SearchBar />
          {displayData.length > 0 ? (
            <QuestionList className='align_left' />
          ) : null}
        </div>
        <span className='QAtitle'>
          <AddQuestion setQuestionModalOpen={setQuestionModalOpen} />
        </span>
        <span
          className='QAtitle'
          onClick={() => {
            setQuestionLimit(questionLimit + 2);
          }}
        >
          {displayData.length > 2 && <MoreQuestions />}
        </span>
      </QuestionContext.Provider>
    </div>
  );
};

export default QuestionContainer;
