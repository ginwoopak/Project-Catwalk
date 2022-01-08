import React from 'react';
import Username from './Username.jsx';
import Helpful from './Helpful.jsx';
import Report from './Report.jsx';

const UserHelpfulReport = (props) => {
  return (
    <span className='left-header small_font'>
      <Username answer={props.answer} /> |{' '}
      <Helpful helpful={props.answer.helpfulness} /> | <Report />
    </span>
  );
};

export default UserHelpfulReport;
