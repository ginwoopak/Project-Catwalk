import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../app.jsx';
import HalfRating from './Stars.jsx';
import { ReviewContext } from './Reviews.jsx';

const RatingBreakdown = function () {
  const { currentItem } = useContext(AppContext);
  const { reviews, reviewBreak } = useContext(ReviewContext);
  const { average, setAverage } = useContext(ReviewContext);

  const getAverage = () => {
    console.log('checkone');
    var avgArray = Object.values(reviewBreak.ratings);
    var totalNumOfValues = 0;
    var sumOfNumbers = 0;
    var bigOne = 0;

    avgArray.forEach((element, index) => {
      totalNumOfValues = totalNumOfValues + Number(element);
      sumOfNumbers = (index + 1) * Number(element);
      bigOne = bigOne + sumOfNumbers;
    });

    return bigOne / totalNumOfValues;
  };

  useEffect(() => {
    setAverage(getAverage());
  }, [currentItem]);

  return (
    <div>
      <div>Ratings will go here</div>
      <div>{average || 0}</div>
      <HalfRating num={average || 0} />
      <div>Percentages</div>
      <div>Graphs</div>
      <div>Size/Comfort</div>
    </div>
  );
};

export default RatingBreakdown;
