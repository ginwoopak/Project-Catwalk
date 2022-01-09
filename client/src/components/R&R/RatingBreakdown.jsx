import React, { useContext } from 'react';
import HalfRating from './Stars.jsx';
import { ReviewContext } from './Reviews.jsx';

const RatingBreakdown = function () {
  const { average } = useContext(ReviewContext);

  return (
    <div className='breakDown'>
      <strong>{`Ratings ${'&'} Reviews`}</strong>
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
