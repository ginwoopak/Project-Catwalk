import React, { useState } from 'react';

const Username = (props) => {
  const [username] = useState(props.answer.answerer_name);

  const [date] = useState(props.answer.date);

  let answerDate = new Date(date);
  const [month, day, year] = [
    answerDate.toLocaleString('default', { month: 'long' }),
    answerDate.getDate(),
    answerDate.getFullYear(),
  ];

  return (
    <span>
      by
      {username === 'Seller' ? (
        <b>{` ${username}`}</b>
      ) : (
        <span>{` ${username}`}</span>
      )}
      {`, ${month + ' ' + day + ', ' + year}`}
    </span>
  );
};

export default Username;
