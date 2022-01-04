import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../app.jsx';
import HalfRating from './Stars.jsx';
import { ReviewContext } from './Reviews.jsx';

const RatingBreakdown = function () {
  const { currentItem } = useContext(AppContext);
  const { reviews, reviewBreak } = useContext(ReviewContext);
  const { average, setAverage } = useContext(ReviewContext);

  return (
    <div className='break'>
      <strong>Ratings & Reviews</strong>
      <div className='avg'>
        <div className='num'>{average || 0}</div>
        <HalfRating num={average || 0} />
      </div>
      <div>Percentages</div>
      <div>Graphs</div>
      <div>Size/Comfort</div>
    </div>
  );
};

export default RatingBreakdown;
