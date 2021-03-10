import React from 'react';
import PropTypes from 'prop-types';

import StylePrice from './StylePrice.jsx';
import StyleCategory from './StyleCategory.jsx';

class StyleSelector extends React.Component {
  // selectStyleOptions={selectStyleOptions} viaOvC
  // selectStyleIndex={selectStyleIndex} viaOvC
  // setSelectStyleIndex={this.setSelectStyleIndex} viaOvC
  constructor(props) {
    super(props);
    this.state = {};
    this.uponStyleThumbnailClick = this.uponStyleThumbnailClick.bind(this);
  }

  // uponStyleThumbnailClick() {
  uponStyleThumbnailClick(event) {
    const { setSelectStyleIndex } = this.props;
    // console.log('StyleSelector_uponStyleThumbnailClick event.target.id:', event.target.id);
    // console.log('StyleSelector_uponStyleThumbnailClick Number(event.target.id):', Number(event.target.id));
    setSelectStyleIndex(event.target.id);
  }

  render() {
    // const { selectStyleOptions, selectStyleIndex, setSelectStyleIndex } = this.props;
    const { selectStyleOptions, selectStyleIndex } = this.props;
    // const { uponStyleThumbnailClick } = this.state;
    // console.log('StyleSelector_render selectStyleOptions:', selectStyleOptions);
    // console.log('StyleSelector_render selectStyleIndex:', selectStyleIndex);
    // <StylePrice />
    // <StyleCategory />
    // [] [] [] []
    // [] [] [] []
    return(
      <div className="styleSelector">
        <StylePrice
          selectStyleOptions={selectStyleOptions}
          selectStyleIndex={selectStyleIndex}
        />
        <StyleCategory
          selectStyleOptions={selectStyleOptions}
          selectStyleIndex={selectStyleIndex}
        />
        {/* {selectStyleOptions.map((styleEntry, index) => (
          <div
            type="submit"
            onClick={this.uponStyleThumbnailClick}
            id={index}
            className="styleEntryThumbnail"
            key={styleEntry.name + styleEntry.style_id}
          >
            <img
              src={styleEntry.photos[0].thumbnail_url}
              // onClick={this.uponStyleThumbnailClick}
              id={index}
              alt={styleEntry.name + styleEntry.style_id}
            />
          </div>
        ))} */}
        <div id="styleThumbnails">
          {selectStyleOptions.map((styleEntry, index) => (
            <button
              type="submit"
              onClick={this.uponStyleThumbnailClick}
              id={index}
              // id="style-thumbnail-button"
              key={styleEntry.name + styleEntry.style_id}
              className="style-thumbnail-button"
              // class="style-thumbnail-button"
            >
              <img
                src={styleEntry.photos[0].thumbnail_url}
                // onClick={this.uponStyleThumbnailClick}
                id={index}
                // id="style-thumbnail"
                type="style-thumbnail"
                alt={styleEntry.name + styleEntry.style_id}
                className="style-thumbnail"
                // class="style-thumbnail"
              />
            </button>
          ))}
        </div>
      </div>
    );
  }

}

StyleSelector.propTypes = {
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
  setSelectStyleIndex: PropTypes.func.isRequired
}

export default StyleSelector;
