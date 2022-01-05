import React, { useState } from 'react';

const UsernameQA = (props) => {

  console.log(props.answer)
  const [username, setUsername] = useState(props.answer.answerer_name);

  const [date, setDate] = useState(props.answer.date);

  let answerDate = new Date(date);
  const [month, day, year] = [answerDate.toLocaleString('default', {month: 'long'}), answerDate.getDate(), answerDate.getFullYear()];

  return <span>by {`${username}, ${month + ' ' + day + ', ' + year}`}</span>;
};

export default UsernameQA;
