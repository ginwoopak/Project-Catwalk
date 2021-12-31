import React, { createContext, useContext, useEffect, useState } from 'react';
import { AppContext } from '../app.jsx';
import axios from 'axios';
import { API_KEY } from '../../../../config/config.js';
import Review from './Review.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';

export const ReviewContext = createContext(null);

const Reviews = function () {
  const { currentItem } = useContext(AppContext);
  const [reviews, setReviews] = useState([]);
  const [reviewBreak, setReviewBreak] = useState({ ratings: '' });

  useEffect(() => {
    axios
      .get(
        `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews?product_id=${currentItem.id}`,
        {
          headers: {
            Authorization: API_KEY,
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => {
        setReviews(response.data.results);
      })
      .then(() => {
        axios
          .get(
            `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta?product_id=${currentItem.id}`,
            {
              headers: {
                Authorization: API_KEY,
                'Content-Type': 'application/json',
              },
            }
          )
          .then((response) => {
            setReviewBreak(response.data);
          });
      });
  }, [currentItem]);

  // let display = [];
  // reviews.forEach((revObj) => {
  //   display.push(<Review key={revObj.review_id} rev={revObj} />);
  // });

  return (
    <ReviewContext.Provider value={{ reviews, reviewBreak }}>
      <div>
        <RatingBreakdown />
        Reviews Section will go here!
        <div>Sorting</div>
        <div>List of Reviews</div>
        <ul>
          {reviews.map((item) => {
            return <Review key={item.review_id} rev={item} />;
          }) || null}
        </ul>
      </div>
    </ReviewContext.Provider>
  );
};

export default Reviews;
