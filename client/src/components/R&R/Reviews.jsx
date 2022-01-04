import React, { createContext, useContext, useEffect, useState } from 'react';
import { AppContext } from '../app.jsx';
import Review from './Review.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';

export const ReviewContext = createContext(null);

const Reviews = function () {
  const { currentItem, callAPI } = useContext(AppContext);
  const [reviews, setReviews] = useState([]);
  const [reviewBreak, setReviewBreak] = useState({
    ratings: {
      5: '5',
    },
  });
  const [average, setAverage] = useState(0);

  //helper function
  const getAverage = () => {
    var avgArray = Object.values(reviewBreak.ratings);
    var indArray = Object.keys(reviewBreak.ratings);
    var totalNumOfValues = 0;
    var sumOfNumbers = 0;
    var bigOne = 0;

    avgArray.forEach((element, index) => {
      totalNumOfValues = totalNumOfValues + Number(element);
      sumOfNumbers = indArray[index] * Number(element);
      bigOne = bigOne + sumOfNumbers;
    });

    return bigOne / totalNumOfValues;
  };

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
      <div>
        Review Breakdown is here. Should be left corner.
        <RatingBreakdown />
        Reviews Section will go here!
        <div>Sorting</div>
        <div>List of Reviews</div>
        <ul>
          {reviews.map((item) => {
            return <Review key={item.review_id} rev={item} />;
          })}
        </ul>
      </div>
    </ReviewContext.Provider>
  );
};

export default Reviews;
