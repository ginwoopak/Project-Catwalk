import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../app.jsx";
import axios from "axios";
import { API_KEY } from "../../../../config/config.js";

const ImageGallery = function () {
  const { currentItem } = useContext(AppContext);

  //===================
  const [images, setImages] = useState([
    {
      url: "",
    },
  ]);

  useEffect(() => {
    axios
      .get(
        `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${currentItem.id}/styles`,
        {
          headers: {
            Authorization: API_KEY,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        setImages(response.data.results[0].photos);
      });
  }, [currentItem]);
  //====================

  return (
    <>
      <img src={images[0].url}></img>
      {/* <button id='prev' onClick={() => this.imgChange(event)}>
        Prev
      </button>
      <button id='next' onClick={() => this.imgChange(event)}>
        Next
      </button> */}
    </>
  );
};

export default ImageGallery;
