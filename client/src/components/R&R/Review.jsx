import React from 'react';
import HalfRating from './Stars.jsx';

/*
{props.rev.date.toLocaleDateString()}
*/

const Review = (props) => {
  var yearMonthDay = props.rev.date.split('-');

  return (
    <li>
      <div className='re'>
        <HalfRating num={props.rev.rating} />
        <div>
          {props.rev.reviewer_name} ,{' '}
          {new Date(
            `${yearMonthDay[0]},${yearMonthDay[1]},${yearMonthDay[2].substring(
              0,
              2
            )}`
          ).toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </div>
      </div>
      <div className=''>
        <b>{props.rev.summary}</b>
        {props.rev.body}
      </div>
      <div>Recommended? True/False{props.rev.recommend}</div>
      <div>Response Pending?{props.rev.response}</div>
      <div>Helpful?{props.rev.helpfulness}</div>
    </li>
  );
};

export default Review;
