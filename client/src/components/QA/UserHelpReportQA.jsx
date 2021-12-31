import React from 'react';
import UsernameQA from './UsernameQA.jsx';
import HelpfulQA from './HelpfulQA.jsx';
import ReportQA from './ReportQA.jsx';

const UserHelpReportQA = () => {
  return (
    <span className='float_left small_font'>
      <UsernameQA />    |    <HelpfulQA />    |    <ReportQA />
    </span>

  )
}

export default UserHelpReportQA;