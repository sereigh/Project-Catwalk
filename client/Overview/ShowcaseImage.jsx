import React from 'react';
import PropTypes from 'prop-types';

class ShowcaseImage extends React.Component {
  // selectStyleOptions={selectStyleOptions} viaOvC
  // selectStyleIndex={selectStyleIndex} viaOvC
  // setSelectStyleIndex={this.setSelectStyleIndex} viaOvC
  constructor() {
    super();
    this.state = {
      galleryBrowsingIndex: 0
    };
    this.onClickLeft = this.onClickLeft.bind(this);
    this.onClickRight = this.onClickRight.bind(this);
    this.uponStyleGalleryClick = this.uponStyleGalleryClick.bind(this);
  }

  onClickRight() {

  }

  onClickLeft() {

  }

  uponStyleGalleryClick() {
  // uponStyleGalleryClick(event) {
  //   const { setSelectStyleIndex } = this.props;
  //   console.log('ShowcaseImage_uponStyleGalleryClick event.target.name:', event.target.name);
  //   setSelectStyleIndex(event.target.name);
  }

  render() {
    // const { selectStyleOptions, selectStyleIndex, setSelectStyleIndex } = this.props;
    const { selectStyleOptions, selectStyleIndex } = this.props;
    // const { galleryBrowsingIndex, uponStyleGalleryClick } = this.state;
    const { galleryBrowsingIndex } = this.state;
    console.log('ShowcaseImage_render galleryBrowsingIndex:', galleryBrowsingIndex);
    // [0] >   OR   < [#] >
    const galleryArray = selectStyleOptions[selectStyleIndex].photos.map((styleGallery, index) => (
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
          >
            {"[ <  ]"}
          </button>
          <button
            type="submit"
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
