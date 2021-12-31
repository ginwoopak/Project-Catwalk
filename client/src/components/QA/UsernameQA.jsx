import React, {useState} from 'react';

const UsernameQA = () => {

  const [username, setUsername] = useState('Ginwoo Pak');

  const [date, setDate] = useState('December 31, 2021')

  return (
    <span>
      by {`${username}, ${date}`}
    </span>
  );
};

export default UsernameQA;