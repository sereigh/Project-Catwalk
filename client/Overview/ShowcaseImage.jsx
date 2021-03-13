import React from 'react';
import PropTypes from 'prop-types';

import ShowcaseThumbnails from './ShowcaseThumbnails.jsx';

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
    const { galleryBrowsingIndex } = this.state
    const { selectStyleOptions, selectStyleIndex } = this.props;
    if ( !selectStyleOptions[selectStyleIndex].photos[galleryBrowsingIndex+1] ) {
      this.setState({
        galleryBrowsingIndex: 0
      })
    }
    if ( selectStyleOptions[selectStyleIndex].photos[galleryBrowsingIndex+1] ) {
      this.setState({
        galleryBrowsingIndex: galleryBrowsingIndex+1
      })
    }
  }

  // onClickRight() {
  //   const { galleryBrowsingIndex } = this.state
  //   const { selectStyleOptions, selectStyleIndex } = this.props;
  //   if ( selectStyleOptions[selectStyleIndex].photos[galleryBrowsingIndex+1] === undefined ) {
  //     this.setState({
  //       galleryBrowsingIndex: 0
  //     })
  //   }
  //   if ( selectStyleOptions[selectStyleIndex].photos[galleryBrowsingIndex+1] !== undefined ) {
  //     this.setState({
  //       galleryBrowsingIndex: galleryBrowsingIndex+1
  //     })
  //   }
  //   console.log('ShowcaseImage_onClickRight error');
  // }

  onClickLeft() {
    const { galleryBrowsingIndex } = this.state
    const { selectStyleOptions, selectStyleIndex } = this.props;
    if ( !selectStyleOptions[selectStyleIndex].photos[galleryBrowsingIndex-1] ) {
      this.setState({
        galleryBrowsingIndex: selectStyleOptions[selectStyleIndex].photos.length-1
      })
    }
    if ( selectStyleOptions[selectStyleIndex].photos[galleryBrowsingIndex-1] ) {
      this.setState({
        galleryBrowsingIndex: galleryBrowsingIndex-1
      })
    }
  }

  // onClickLeft() {
  //   const { galleryBrowsingIndex } = this.state
  //   const { selectStyleOptions, selectStyleIndex } = this.props;
  //   if ( selectStyleOptions[selectStyleIndex].photos[galleryBrowsingIndex-1] === undefined ) {
  //     this.setState({
  //       galleryBrowsingIndex: selectStyleOptions[selectStyleIndex].photos.length-1
  //     })
  //   }
  //   if ( selectStyleOptions[selectStyleIndex].photos[galleryBrowsingIndex-1] !== undefined ) {
  //     this.setState({
  //       galleryBrowsingIndex: galleryBrowsingIndex-1
  //     })
  //   }
  //   console.log('ShowcaseImage_onClickLeft error');
  // }

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
    // console.log('ShowcaseImage_render galleryBrowsingIndex:', galleryBrowsingIndex);
    // console.log('ShowcaseImage_render galleryArray:', galleryArray);
    // console.log('ShowcaseImage_render photos.length-1', selectStyleOptions[selectStyleIndex].photos.length-1);
    // [0] >   OR   < [#] >
    galleryArray = galleryArray.concat(
      selectStyleOptions[selectStyleIndex].photos.map((styleGallery, index) => (
        <div
          key={styleGallery.url}
          name={index}
          className="styleGalleryImage"
        >
          <img
            id="mainImage"
            src={styleGallery.url}
            name={index}
            alt={styleGallery.url}
          />
        </div>
      ))
    )
    if ( galleryBrowsingIndex === 0 && galleryArray.length === 1 ) {
      return (
        <div className="showcaseGallery">
          <ShowcaseThumbnails
            selectStyleOptions={selectStyleOptions}
            selectStyleIndex={selectStyleIndex}
            setSelectStyleIndex={this.setSelectStyleIndex}
            galleryBrowsingIndex={galleryBrowsingIndex}
            onClickLeft={this.onClickLeft}
            onClickRight={this.onClickRight}
          />
          {galleryArray[galleryBrowsingIndex]}
        </div>
      );
    }
    if ( galleryBrowsingIndex === 0 && galleryArray.length > 1 ) {
      return (
        <div className="showcaseGallery">
          <ShowcaseThumbnails
            selectStyleOptions={selectStyleOptions}
            selectStyleIndex={selectStyleIndex}
            setSelectStyleIndex={this.setSelectStyleIndex}
            galleryBrowsingIndex={galleryBrowsingIndex}
            onClickLeft={this.onClickLeft}
            onClickRight={this.onClickRight}
          />
          {galleryArray[galleryBrowsingIndex]}
          <button
            type="submit"
            id="arrowRight"
            onClick={this.onClickRight}
          >
            {/* {"[  > ]"} */}
            <img src="./img/iconfinder_arrow-right.png" alt="iconArrowRight" id="iconArrowRight" />
          </button>
        </div>
      );
    }
    if ( galleryBrowsingIndex !== 0 && galleryBrowsingIndex === galleryArray.length ) {
      return (
        <div className="showcaseGallery">
          <ShowcaseThumbnails
            selectStyleOptions={selectStyleOptions}
            selectStyleIndex={selectStyleIndex}
            setSelectStyleIndex={this.setSelectStyleIndex}
            galleryBrowsingIndex={galleryBrowsingIndex}
            onClickLeft={this.onClickLeft}
            onClickRight={this.onClickRight}
          />
          {galleryArray[galleryBrowsingIndex]}
          <button
            type="submit"
            id="arrowLeft"
            onClick={this.onClickLeft}
          >
            {/* {"[ <  ]"} */}
            <img src="./img/iconfinder_arrow-left.png" alt="iconArrowLeft" id="iconArrowLeft" />
          </button>
        </div>
      );
    }
    if ( galleryBrowsingIndex !== 0 && galleryBrowsingIndex < galleryArray.length ) {
      return (
        <div className="showcaseGallery">
          <ShowcaseThumbnails
            selectStyleOptions={selectStyleOptions}
            selectStyleIndex={selectStyleIndex}
            setSelectStyleIndex={this.setSelectStyleIndex}
            galleryBrowsingIndex={galleryBrowsingIndex}
            onClickLeft={this.onClickLeft}
            onClickRight={this.onClickRight}
          />
          {galleryArray[galleryBrowsingIndex]}
          <button
            type="submit"
            id="arrowLeft"
            onClick={this.onClickLeft}
          >
            {/* {"[ <  ]"} */}
            <img src="./img/iconfinder_arrow-left.png" alt="iconArrowLeft" id="iconArrowLeft" />
          </button>
          <button
            type="submit"
            id="arrowRight"
            onClick={this.onClickRight}
          >
            {/* {"[  > ]"} */}
            <img src="./img/iconfinder_arrow-right.png" alt="iconArrowRight" id="iconArrowRight" />
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
      // "547962": PropTypes.objectOf(PropTypes.shape({
      "quantity": PropTypes.number,
      "size": PropTypes.string
      // }))
    }))
  })).isRequired,
  selectStyleIndex: PropTypes.number.isRequired,
}

export default ShowcaseImage;
