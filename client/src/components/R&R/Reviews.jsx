import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../app.jsx";
import axios from "axios";
import { API_KEY } from "../../../../config/config.js";
import Review from "./Review.jsx";

const Reviews = function () {
  const { currentItem } = useContext(AppContext);

  const [reviews, setReviews] = useState([
    {
      rating: 5,
    },
  ]);

  useEffect(() => {
    axios
      .get(
        `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews?product_id=${currentItem.id}`,
        {
          headers: {
            Authorization: API_KEY,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        setReviews(response.data.results);
      });
  }, [currentItem]);

  return (
    <div>
      <div>Reviews Section will go here!</div>
      <div>Sorting</div>
      <div>List of Reviews</div>
      <Review list={reviews} />
    </div>
  );
};

export default Reviews;
