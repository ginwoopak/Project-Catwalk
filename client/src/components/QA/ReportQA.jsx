import React, { useState } from 'react';

const ReportQA = () => {
  const [reported, setReported] = useState(false);

  return (
    <span
      onClick={() => {
        setReported(true);
      }}
    >
      <u>{reported ? 'Reported' : 'Report'}</u>
    </span>
  );
};

export default ReportQA;
