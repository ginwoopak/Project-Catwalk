import React from 'react';

const Username = (props) => {
  let answerDate = new Date(props.answer.date);
  const [month, day, year] = [
    answerDate.toLocaleString('default', { month: 'long' }),
    answerDate.getDate(),
    answerDate.getFullYear(),
  ];

  return (
    <span>
      by
      {props.answer.answerer_name === 'Seller' ? (
        <b>{` ${props.answer.answerer_name}`}</b>
      ) : (
        <span>{` ${props.answer.answerer_name}`}</span>
      )}
      {`, ${month} ${day}, ${year}`}
    </span>
  );
};

export default Username;
