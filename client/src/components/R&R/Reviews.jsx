import React, { createContext, useContext, useEffect, useState } from 'react';
import { AppContext } from '../app.jsx';
import Review from './Review.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';
import './Reviews.css';
import { async } from 'regenerator-runtime';
import Modal from './Modal.jsx';

export const ReviewContext = createContext(null);

const Reviews = function () {
  const { currentItem, callAPI } = useContext(AppContext);
  const [reviews, setReviews] = useState([]);
  const { reviewBreak, setReviewBreak } = useContext(AppContext);
  const { average, setAverage, getAverage } = useContext(AppContext);

  useEffect(() => {
    if (currentItem.id) {
      callAPI(`reviews?product_id=${currentItem.id}`, (response) => {
        setReviews(response.data.results);
      });
      callAPI(`reviews/meta?product_id=${currentItem.id}`, (response) => {
        setReviewBreak(response.data);
        setAverage(getAverage());
      });
    }
  }, [currentItem]);

  return (
    <ReviewContext.Provider
      value={{ reviews, reviewBreak, average, setAverage }}
    >
      <div className='ratingsReviews'>
        <RatingBreakdown />
        <div>
          Sorting Section
          <ul className='list'>
            {reviews.map((item) => {
              return <Review key={item.review_id} rev={item} />;
            })}
          </ul>
          <button>More Reviews</button>
          <button className='revModal'>Add a Review</button>
          <Modal />
        </div>
      </div>
    </ReviewContext.Provider>
  );
};

export default Reviews;
