import React from 'react';
import PropTypes from 'prop-types';

class ShowcaseImage extends React.Component {
  // selectStyleOptions={selectStyleOptions} viaOvC
  // selectStyleIndex={selectStyleIndex} viaOvC
  // setSelectStyleIndex={this.setSelectStyleIndex} viaOvC
  constructor() {
    super();
    this.state = {
      galleryBrowsingIndex: 0,
      galleryArray: []
    };
    this.onClickLeft = this.onClickLeft.bind(this);
    this.onClickRight = this.onClickRight.bind(this);
    this.uponGalleryBrowsingClick = this.uponGalleryBrowsingClick.bind(this);
  }

  onClickRight() {
    const { galleryBrowsingIndex, galleryArray } = this.state
    if ( galleryBrowsingIndex < galleryArray.length ) {
      this.setState({
        galleryBrowsingIndex: galleryBrowsingIndex+1
      })
    }
    if ( galleryBrowsingIndex === galleryArray.length ) {
      this.setState({
        galleryBrowsingIndex: 0
      })
    }
    console.log('ShowcaseImage_onClickRight error');
  }

  onClickLeft() {
    const { galleryBrowsingIndex, galleryArray } = this.state
    if ( galleryBrowsingIndex <= galleryArray.length ) {
      this.setState({
        galleryBrowsingIndex: galleryBrowsingIndex-1
      })
    }
    if ( galleryBrowsingIndex === galleryArray.length ) {
      this.setState({
        galleryBrowsingIndex: galleryArray.length-1
      })
    }
    console.log('ShowcaseImage_onClickLeft error');
  }

  uponGalleryBrowsingClick() {
  // uponGalleryBrowsingClick(event) {
  //   console.log('ShowcaseImage_uponGalleryBrowsingClick event.target.name:', event.target.name);
  //   this.setState({
  //     galleryBrowsingIndex: ____
  //   })
  }

  render() {
    // const { selectStyleOptions, selectStyleIndex, setSelectStyleIndex } = this.props;
    const { selectStyleOptions, selectStyleIndex } = this.props;
    // const { galleryBrowsingIndex, uponGalleryBrowsingClick } = this.state;
    const { galleryBrowsingIndex } = this.state;
    let { galleryArray } = this.state;
    console.log('ShowcaseImage_render galleryBrowsingIndex:', galleryBrowsingIndex);
    console.log('ShowcaseImage_render galleryArray:', galleryArray);
    // [0] >   OR   < [#] >
    galleryArray = selectStyleOptions[selectStyleIndex].photos.map((styleGallery, index) => (
      <div
        key={styleGallery.url}
        name={index}
        className="styleGalleryImage"
      >
        <img
          src={styleGallery.url}
          name={index}
          alt={styleGallery.url}
        />
      </div>
    ));
    if ( galleryBrowsingIndex === 0 && galleryArray.length === 1 ) {
      return (
        <div id="showcaseGallery">
          {galleryArray[galleryBrowsingIndex]}
        </div>
      );
    }
    if ( galleryBrowsingIndex === 0 && galleryArray.length > 1 ) {
      return (
        <div id="showcaseGallery">
          {galleryArray[galleryBrowsingIndex]}
          <button
            type="submit"
            id="arrowRight"
            onClick={this.onClickRight}
          >
            {"[  > ]"}
          </button>
        </div>
      );
    }
    if ( galleryBrowsingIndex !== 0 && galleryBrowsingIndex === galleryArray.length ) {
      return (
        <div id="showcaseGallery">
          {galleryArray[galleryBrowsingIndex]}
          <button
            type="submit"
            id="arrowLeft"
            onClick={this.onClickLeft}
          >
            {"[ <  ]"}
          </button>
        </div>
      );
    }
    if ( galleryBrowsingIndex !== 0 && galleryBrowsingIndex < galleryArray.length ) {
      return (
        <div id="showcaseGallery">
          {galleryArray[galleryBrowsingIndex]}
          <button
            type="submit"
            id="arrowLeft"
            onClick={this.onClickLeft}
          >
            {"[ <  ]"}
          </button>
          <button
            type="submit"
            id="arrowRight"
            onClick={this.onClickRight}
          >
            {"[  > ]"}
          </button>
        </div>
      );
    }
    return (
      <div>LOADING</div>
    );
    // return (
    //   <div id="showcaseGallery">
    //     {selectStyleOptions[selectStyleIndex].photos.map((styleGallery, index) => (
    //       <div
    //         key={index}
    //         name={index}
    //         className="styleGalleryImage"
    //       >
    //         <img
    //           src={styleGallery.url}
    //           name={index}
    //           alt={styleGallery.url}
    //         />
    //       </div>
    //     ))}
    //   </div>
    // );
  }

}

ShowcaseImage.propTypes = {
  selectStyleOptions: PropTypes.arrayOf(PropTypes.shape({
    "style_id": PropTypes.number,
    "name": PropTypes.string,
    "original_price": PropTypes.string,
    "sale_price": PropTypes.string,
    "default?": PropTypes.bool,
    "photos": PropTypes.arrayOf(PropTypes.shape({
      "thumbnail_url": PropTypes.string,
      "url": PropTypes.string
    })),
    "skus": PropTypes.objectOf(PropTypes.shape({
      "547962": PropTypes.objectOf(PropTypes.shape({
        "quantity": PropTypes.number,
        "size": PropTypes.string
      }))
    }))
  })).isRequired,
  selectStyleIndex: PropTypes.number.isRequired,
}

export default ShowcaseImage;
