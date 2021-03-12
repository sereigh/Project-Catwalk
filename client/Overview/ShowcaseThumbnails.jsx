import React from 'react';
import PropTypes from 'prop-types';

function ShowcaseThumbnails(props) {
  // selectStyleOptions={selectStyleOptions} viaShowcaseImage
  // selectStyleIndex={selectStyleIndex} viaShowcaseImage
  // setSelectStyleIndex={this.setSelectStyleIndex} viaShowcaseImage
  const { selectStyleOptions, selectStyleIndex } = props;
  let thumbnailArray = [];
  thumbnailArray = thumbnailArray.concat(
    selectStyleOptions[selectStyleIndex].photos.map((styleThumbnailGallery, index) => (
      <div
        key={styleThumbnailGallery.thumbnail_url}
        name={index}
        className="styleThumbnailGalleryImage"
      >
        <img
          id="miniThumbnail"
          src={styleThumbnailGallery.url}
          name={index}
          alt={styleThumbnailGallery.url}
        />
      </div>
    ))
  )
  return (
    <div className="showcaseThumbnails">
      <span id="upCarrot">
        ^
      </span>
      <span id="thumbnailGalleryHolder">
        {thumbnailArray}
      </span>
      <span id="downCarrot">
        v
      </span>
    </div>
  );
}

ShowcaseThumbnails.propTypes = {
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

export default ShowcaseThumbnails;
