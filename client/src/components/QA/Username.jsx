import React, { useState } from 'react';

const Username = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [username, setUsername] = useState(props.answer.answerer_name);

  // eslint-disable-next-line no-unused-vars
  const [date, setDate] = useState(props.answer.date);

  let answerDate = new Date(date);
  const [month, day, year] = [
    answerDate.toLocaleString('default', { month: 'long' }),
    answerDate.getDate(),
    answerDate.getFullYear(),
  ];

  return (
    <span>
      by
      {username === 'Seller' ? <b>{` ${username}`}</b> : <span>{` ${username}`}</span>}
      {/* <b>{` ${username}`}</b> */}
      {`, ${month + ' ' + day + ', ' + year}`}
    </span>
  );
};

export default Username;
