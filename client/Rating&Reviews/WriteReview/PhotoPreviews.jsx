import React from "react";
import PropTypes from "prop-types";

import Photo from "../ReviewsList/Photo.jsx";

const PhotoPreviews = ({ photos, handleRemove }) => {
  let id = -1;

  return (
    <span className="photo-previews">
      {photos.map((photo) => {
        id += 1;
        return (
          <Photo
            key={id}
            photo={{ id, url: photo }}
            uploaded
            handleRemove={handleRemove}
          />
        );
      })}
    </span>
  );
};

PhotoPreviews.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.string),
  handleRemove: PropTypes.func.isRequired,
};

PhotoPreviews.defaultProps = {
  photos: [],
};

export default PhotoPreviews;
