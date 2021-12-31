import React, { useState, useContext, useEffect } from "react";
import QuestionQA from "./QuestionQA.jsx";
import AnswerQA from "./AnswerQA.jsx";
import HelpfulQA from "./HelpfulQA.jsx";
import AddAnswerQA from "./AddAnswerQA.jsx";
import UsernameQA from "./UsernameQA.jsx";
import ReportQA from "./ReportQA.jsx";
import { QuestionContext } from "./ListQA.jsx";
import HelpAddAnswerQA from "./HelpAddAnswerQA.jsx";
import UserHelpReportQA from "./UserHelpReportQA.jsx";

const IndividualQA = (props) => {
  const { questionData } = useContext(QuestionContext);

  return (
    // <div>
    //   Q: {`${props.question.question_body}`}
    // </div>

    <div className='individual_container border'>
      {/* {console.log("from individual QA", question)} */}
      <div>
        <QuestionQA question={props.question.question_body}/>
        <HelpAddAnswerQA />
      </div>
      <div className='float_left'>
        <AnswerQA />
      </div>
      <div>
        <UserHelpReportQA />
      </div>
    </div>
  );
};

export default IndividualQA;
