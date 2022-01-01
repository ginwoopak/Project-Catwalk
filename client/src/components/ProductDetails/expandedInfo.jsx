import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../app.jsx';
import axios from 'axios';
import { API_KEY } from '../../../../config/config.js';
import ImageGallery from 'react-image-gallery';
import './productInfo.css';

const ProductInfo = function () {
  const { currentItem } = useContext(AppContext);

  //===================
  const [images, setImages] = useState([{}]); //set Images from styles
  const [styles, setStyles] = useState([
    {
      style_id: 240500,
      name: 'Forest Green & Black',
      original_price: '140.00',
      sale_price: null,
      'default?': true,
      photos: [
        {
          thumbnail_url:
            'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        },
        {
          thumbnail_url:
            'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80',
        },
        {
          thumbnail_url:
            'https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80',
        },
        {
          thumbnail_url:
            'https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
        },
        {
          thumbnail_url:
            'https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        },
        {
          thumbnail_url:
            'https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
          url: 'https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        },
      ],
      skus: {
        1394769: {
          quantity: 8,
          size: 'XS',
        },
        1394770: {
          quantity: 16,
          size: 'S',
        },
        1394771: {
          quantity: 17,
          size: 'M',
        },
        1394772: {
          quantity: 10,
          size: 'L',
        },
        1394773: {
          quantity: 15,
          size: 'XL',
        },
        1394774: {
          quantity: 4,
          size: 'XL',
        },
      },
    },
  ]); //store all styles data
  const [selected, setSelected] = useState({}); //select one style to populate

  const selectStyle = (styleId) => {
    let n = 0;
    if (styleId) {
      for (let i in styles) {
        if (styles[i].style_id === styleId) {
          n = i;
          break;
        }
      }
    }
    let gallery = [];
    for (let i in styles[n].photos) {
      gallery.push({
        original: styles[n].photos[i].url,
        thumbnail: styles[n].photos[i].thumbnail_url,
      });
    }
    setSelected(styles[n]);
    setImages(gallery);
  };

  useEffect(() => {
    axios
      .get(
        `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${currentItem.id}/styles`,
        {
          headers: {
            Authorization: API_KEY,
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => {
        setStyles(response.data.results);
        setSelected(response.data.results[0]);
        selectStyle();
      });
  }, [currentItem]);

  return (
    <>
      <div className='gallery-container'>
        <ImageGallery
          items={images || null}
          infinite={true}
          showBullets={true}
          showFullscreenButton={true}
          showThumbnails={true}
          showIndex={false}
          showNav={true}
          isRTL={false}
          thumbnailPosition={'left'}
          slideOnThumbnailOver={false}
          additionalClass='app-image-gallery'
          useWindowKeyDown={true}
        />
      </div>
      <>
        <span>STARS </span>
        <span href='#'> Read All Reviews</span>
        <h6>{currentItem.category}</h6>
        <h2>{currentItem.name}</h2>
        <a>{currentItem.default_price}</a>
        <h6>
          Style {'>'} {selected && selected.name ? selected.name : ''}
        </h6>
        <div>
          {styles.map((style) => {
            return (
              <img
                className='thumbnail'
                value={style.style_id}
                onClick={() => selectStyle(style.style_id)}
                src={style.photos[0].thumbnail_url}
                key={style.style_id}
              ></img>
            );
          })}
          <img></img>
        </div>
        <select name='size'>
          {selected && selected.skus
            ? Object.values(selected.skus).map((skus, index) => (
                <option key={index} value={skus}>
                  {skus.size}
                </option>
              ))
            : ''}
        </select>
        <select>
          {/* {selected && selected.skus
            ? Object.values(selected.skus).map((skus) => {
                return <option value={skus.size}>{skus.size}</option>;
              })
            : ''} */}
          <option value='amt'>1</option>
        </select>
        <button>Add to Cart</button>
        <button>Favorite</button>
      </>
      <>
        <h5>{currentItem.slogan}</h5>
        <a>{currentItem.description}</a>
      </>
    </>
  );
};

export default ProductInfo;
