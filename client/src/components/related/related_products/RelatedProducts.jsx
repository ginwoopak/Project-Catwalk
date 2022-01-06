import React, { useState, useContext, useEffect, useMemo } from 'react';
import Modal from '../modal/Modal.jsx';
import './RelatedProducts.css';
import ProductCard from './ProductCard.jsx';
import { AppContext } from '../../app.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faArrowLeft,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

const RelatedProducts = () => {
  const { currentItem, callAPI } = useContext(AppContext);
  const [relatedIds, setRelatedIds] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [currentDisplayItem, setCurrentDisplayItem] = useState({});
  const [firstShowIndex, setFirstShowIndex] = useState(0);

  const prevClick = () => {
    setFirstShowIndex(firstShowIndex - 1);
  };

  const nextClick = () => {
    setFirstShowIndex(firstShowIndex + 1);
  };

  useEffect(() => {
    callAPI(`products/${currentItem.id}/related`, (response) => {
      setRelatedIds(Array.from(new Set(response.data)));
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
      <h2 className='riocTitle'>Related Products</h2>
      <div className='productsCardContainer'>
        {firstShowIndex !== 0 && (
          <span
            className='prevArrow'
            onClick={() => {
              prevClick();
            }}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </span>
        )}
        <div className='gridContainer'>
          {relatedIds.slice(firstShowIndex, firstShowIndex + 3).map((id) => (
            <div className='card' key={id}>
              <span
                className='icon-tag'
                onClick={() => {
                  setModalOpen(true);
                  setSelectedId(id);
                }}
              >
                <FontAwesomeIcon icon={faStar} className='starIcon' />
              </span>
              <ProductCard productId={id} />
            </div>
          ))}
        </div>
        {firstShowIndex !== relatedIds.length - 3 &&
        relatedIds.length - firstShowIndex > 3 ? (
          <span
            className='nextArrow'
            onClick={() => {
              nextClick();
            }}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};

export default RelatedProducts;
