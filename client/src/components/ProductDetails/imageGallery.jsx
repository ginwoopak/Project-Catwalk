import React, { useContext } from 'react';
import ImageGallery from 'react-image-gallery';
import { OverviewContext } from './expandedInfo.jsx';

import './productInfo.css';

const ImgGallery = () => {
  const { images } = useContext(OverviewContext);

  // const slide = (event) => {
  //   event.target.style.transform = `translateX(${-100}%)`;
  // };
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

{
  /* <div className='parent'>
  <div className='slide-reel'>
    {images.map((pic) => (
      <img
        onClick={() => slide(event)}
        className='image-gallery'
        key={pic.original}
        src={pic.original}
      ></img>
    ))}
    {console.log(pic);}
  </div>
</div>;
images[0] = {
  original:
    'https://images.unsplash.com/photo-1501088430049-71…hcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
  thumbnail:
    'https://images.unsplash.com/photo-1501088430049-71…hcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
}; */
}

export default ImgGallery;
