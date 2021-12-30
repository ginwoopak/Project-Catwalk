<<<<<<< HEAD
import React from "react";
import RelatedProducts from "./related/related_products/RelatedProducts.jsx";
import Outfits from "./related/outfits/Outfits.jsx";
import apiCall from "./apiCall.js";
=======
import React, { useState, createContext, useEffect } from "react";
import { API_KEY } from "../../../config/config.js";
// import apiCall from './apiCall.js';
>>>>>>> main

import {
  AddToCart,
  ProductInfo,
  ImageGallery,
} from "./ProductDetails/expandedInfo.js";
<<<<<<< HEAD
// import { startSession } from "mongoose";
=======
>>>>>>> main

import axios from "axios";

export const AppContext = createContext(null);

const App = function () {
  const [currentItem, setCurrentItem] = useState({ id: 0 });
  const [allProducts, setAllProducts] = useState([]);
  // const [currentStyle, setCurrentStyle] = useState([]);
  // const [reviews, setReviews] = useState([]);
  // const [related, setRelated] = useState([]);
  // const [QA, setQA] = useState([]);

<<<<<<< HEAD
  clickHandler() {
    this.setState({ currentItem: "new_ID_here" });
  }

  render() {
    return (
      <>
        {/* AddContext
        <div>
          <ImageGallery />
          <AddToCart />
        </div>
        <ProductInfo /> */}
        <div>
          <RelatedProducts />
          <Outfits />
        </div>
      </>
    );
  }
}
=======
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
        console.log("allProducts updated");
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
            console.log("currentItem updated");
          });
      });
  }, []);

  return (
    <AppContext.Provider
      value={{ currentItem, setCurrentItem, allProducts, setAllProducts }}
    >
      <div>
        {console.log(currentItem)}
        <ImageGallery />
        <AddToCart />
      </div>
      <ProductInfo />
    </AppContext.Provider>
  );
};
>>>>>>> main

export default App;
