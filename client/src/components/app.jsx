import React, { useState, createContext, useEffect } from "react";
import { API_KEY } from "../../../config/config.js";
import Reviews from "./R&R/Reviews.jsx";
import RatingBreakdown from "./R&R/RatingBreakdown.jsx";

import {
  AddToCart,
  ProductInfo,
  ImageGallery,
} from "./ProductDetails/expandedInfo.js";

import axios from "axios";

export const AppContext = createContext(null);

const App = function () {
  const [currentItem, setCurrentItem] = useState({ id: 40345 });
  const [allProducts, setAllProducts] = useState([]);

  // const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get("https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/", {
        headers: {
          Authorization: API_KEY,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setAllProducts(response.data);
        return response.data[0].id;
      })
      .then((id) => {
        axios
          .get(
            `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}`,
            {
              headers: {
                Authorization: API_KEY,
                "Content-Type": "application/json",
              },
            }
          )
          .then((response) => {
            setCurrentItem(response.data);
          });
      });
  }, []);

  return (
    <AppContext.Provider
      value={{ currentItem, setCurrentItem, allProducts, setAllProducts }}
    >
      <div>
        <ImageGallery />
        <AddToCart />
      </div>
      <ProductInfo />

      <RatingBreakdown />
      <Reviews />
    </AppContext.Provider>
  );
};

export default App;
