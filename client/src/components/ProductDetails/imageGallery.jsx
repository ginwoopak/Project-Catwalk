import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../app.jsx';

const ImageGallery = function () {
  const { currentItem } = useContext(AppContext);

  const [images, setImages] = useState();

  // useEffect(() => console.log('Image Gallery: ', currentItem), [currentItem]);

  // const [images, setImages] = useState();
  // const [selected, setSelected] = useState();
  // const [index, setIndex] = useState();

  // setImages(currentItem.styles[0].photos);
  // setSelected(images[0].url);
  // setIndex(0);
  // componentDidMount() {
  //   this.setState({ selected: this.state.images[0], index: 0 });
  // }

  // clickHandler(event) {
  //   this.setState({
  //     selected: event.target.src,
  //     index: this.state.images.indexOf(event.target.src),
  //   });
  // }

  // imgChange(event) {
  //   let index = this.state.index;
  //   if (event.target.id === 'prev') {
  //     if (index === 0) {
  //       index = this.state.images.length;
  //     }
  //     this.setState({
  //       selected: this.state.images[index - 1],
  //       index: index - 1,
  //     });
  //   } else {
  //     if (index === this.state.images.length - 1) {
  //       index = -1;
  //     }
  //     this.setState({
  //       selected: this.state.images[index + 1],
  //       index: index + 1,
  //     });
  //   }
  //   // this.setState()
  // }

  return (
    <>
      {/* <img id='big_image' value={index} src={selected}></img>
      {images.map((item) => {
        return (
          <img
            // onClick={() => this.clickHandler(event)}
            src={item.thumbnail_url}
            key={item.thumbnail_url}
            className='thumbnail'
          ></img>
        );
      })} */}
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
