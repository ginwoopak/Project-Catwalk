import React, { useState, useContext, useEffect, useMemo } from 'react';
import Modal from '../modal/Modal.jsx';
import './RelatedProducts.css';
import ProductCard from './ProductCard.jsx';
import { AppContext } from '../../app.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const RelatedProducts = () => {
  const { currentItem, callAPI } = useContext(AppContext);
  const [relatedIds, setRelatedIds] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [currentDisplayItem, setCurrentDisplayItem] = useState({});

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
  };

  useEffect(() => {
    callAPI(`products/${currentItem.id}/related`, (response) => {
      setRelatedIds(response.data);
    });
    callAPI(`products/${currentItem.id}`, (response) => {
      setCurrentDisplayItem(response.data);
    });
  }, [currentItem]);

  return (
    <>
      {modalOpen ? (
        <Modal
          openModal={modalOpen}
          setOpenModal={setModalOpen}
          selectedId={selectedId}
          currentItem={currentDisplayItem}
        />
      ) : null}
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
          {relatedIds.map((id) => {
            return (
              <div className='card' key={id}>
                <button
                  className='icon-tag'
                  onClick={() => {
                    setModalOpen(true);
                    setSelectedId(id);
                  }}
                >
                  <FontAwesomeIcon icon={faStar} className='starIcon' />
                </button>
                <ProductCard productId={id} />
              </div>
            );
          })}
        </Carousel>
        {/* {modalOpen ? (
          <Modal
            openModal={modalOpen}
            setOpenModal={setModalOpen}
            selectedId={selectedId}
            currentItem={currentDisplayItem}
          />
        ) : null} */}
      </div>
    </>
  );
};

export default RelatedProducts;
