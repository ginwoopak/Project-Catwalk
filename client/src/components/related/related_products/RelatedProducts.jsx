import React, { useState, useContext, useEffect, useMemo } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { API_KEY } from '../../../../../config/config.js';

import sampleData from '../sampleData.js';
import Modal from '../modal/Modal.jsx';
import './RelatedProducts.css';
import ProductCard from './ProductCard.jsx';
import { AppContext } from '../../app.jsx';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const RelatedProducts = () => {
  const { currentItem } = useContext(AppContext);
  const [relatedProducts, setRelatedProducts] = useState(sampleData);
  const [relatedIds, setRelatedIds] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [currentId, setCurrentId] = useState(currentItem.id);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
  };

  useEffect(() => {
    axios
      .get(
        `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${currentItem.id}/related`,
        {
          headers: {
            Authorization: API_KEY,
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => {
        setRelatedIds(response.data);
      });
  }, [currentItem]);

  return (
    <>
      <h1>Related Products</h1>
      <div className='gridContainer'>
        <Carousel
          arrows={true}
          swipeable={false}
          draggable={false}
          showDots={false}
          responsive={responsive}
          ssr={true}
        >
          {relatedIds.map((id) => (
            <div className='card' key={id}>
              <button
                className='icon-tag'
                onClick={(e) => {
                  setModalOpen(true);
                  setSelectedId(id);
                  e.stopPropagation();
                }}
              >
                <FontAwesomeIcon icon={faStar} className='starIcon' />
              </button>
              <ProductCard productId={id} />
            </div>
          ))}
        </Carousel>
        {modalOpen && (
          <Modal
            openModal={modalOpen}
            setOpenModal={setModalOpen}
            selectedId={selectedId}
            currentId={currentId}
          />
        )}
      </div>
    </>
  );
};

export default RelatedProducts;
