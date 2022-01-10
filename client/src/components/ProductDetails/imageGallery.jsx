import React, { useContext } from 'react';
import ImageGallery from 'react-image-gallery';
import { OverviewContext } from './expandedInfo.jsx';

import './productInfo.css';

const ImgGallery = () => {
  const { images } = useContext(OverviewContext);

  return (
    <ImageGallery
      items={images || null}
      infinite={false}
      showBullets={true}
      showFullscreenButton={true}
      showThumbnails={true}
      showIndex={false}
      showNav={true}
      isRTL={false}
      thumbnailPosition={'left'}
      slideOnThumbnailOver={false}
      additionalClass='image-gallery'
      useWindowKeyDown={true}
    />
  );
};

export default ImgGallery;
