import React/*, {useState}*/ from 'react';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: ['https://upload.wikimedia.org/wikipedia/commons/b/bc/Juvenile_Ragdoll.jpg',
        'https://www.petmd.com/sites/default/files/styles/article_image/public/small-kitten-walking-towards_127900829_0.jpg?itok=ah_gTtbS',
        'https://ichef.bbci.co.uk/news/976/cpsprodpb/1852E/production/_121203699_2.63235180.jpg',
        'https://www.comfortzone.com/-/media/Images/ComfortZone-NA/US/Blog/bringing-new-kitten-home.jpg',
        'https://spca.bc.ca/wp-content/uploads/news-kittens.jpg',
        'https://icatcare.org/app/uploads/2019/09/The-Kitten-Checklist-1.png'],
      selected: null,
      index: null
    };
  }

  componentDidMount() {
    this.setState({selected: this.state.images[0], index: 0});
  }

  clickHandler(event) {
    this.setState({selected: event.target.src, index: this.state.images.indexOf(event.target.src)});
  }

  imgChange(event) {
    let index = this.state.index;
    if (event.target.id === 'prev') {
      if (index === 0) {
        index = this.state.images.length;
      }
      this.setState({selected: this.state.images[index - 1], index: index - 1});
    } else {
      if (index === this.state.images.length - 1) {
        index = -1;
      }
      this.setState({selected: this.state.images[index + 1], index: index + 1});
    }
    // this.setState()
  }

  render() {
    return (
      <>
        <img id="big_image" value={this.state.index} src={this.state.selected}></img>
        {this.state.images.map(item => {
          return (
            <img onClick={() => this.clickHandler(event)} src={item} key={item} className="thumbnail"></img>
          );
        })}
        <button id="prev" onClick={() => this.imgChange(event)}>Prev</button><button id="next" onClick={() => this.imgChange(event)}>Next</button>
      </>
    );
  }
}

export default ImageGallery;



