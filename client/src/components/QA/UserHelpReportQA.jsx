import React from 'react';
import UsernameQA from './UsernameQA.jsx';
import HelpfulQA from './HelpfulQA.jsx';
import ReportQA from './ReportQA.jsx';

const UserHelpReportQA = (props) => {
  return (
    <span className='float_left small_font'>
      <UsernameQA answer={props.answer}/> | <HelpfulQA helpful={props.answer.helpfulness}/> | <ReportQA />
    </span>
  );
};

export default UserHelpReportQA;
