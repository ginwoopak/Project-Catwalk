import React from 'react';
import HalfRating from './Stars.jsx';

/*
{props.rev.date.toLocaleDateString()}
*/

const Review = (props) => {
  var yearMonthDay = props.rev.date.split('-');

  return (
    <li className='reviewCard'>
      <div className='starDate'>
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
      <div className='summary'>
        <b>{props.rev.summary}</b>
        {props.rev.body}
      </div>
      <div>{props.rev.recommend ? 'I recommend this product' : null}</div>
      <div>{props.rev.response}</div>
      <div>Was this review helpful? Yes: {props.rev.helpfulness} | Report</div>
    </li>
  );
};

export default Review;
