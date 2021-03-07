import React from 'react';
import PropTypes from 'prop-types';

class StyleSelector extends React.Component {
  // selectStyleOptions={selectStyleOptions} viaOvC
  // retrieveSelectStyleOptions={this.retrieveSelectStyleOptions} viaOvC
  // selectStyleIndex={selectStyleIndex} viaOvC
  // setSelectStyleIndex={this.setSelectStyleIndex} viaOvC
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // const { selectStyleOptions, retrieveSelectStyleOptions, selectStyleIndex, setSelectStyleIndex } = this.props;
    const { selectStyleOptions, selectStyleIndex } = this.props;
    console.log('StyleSelector_render selectStyleOptions:', selectStyleOptions);
    console.log('StyleSelector_render selectStyleIndex:', selectStyleIndex);
    // <StylePrice />
    // <StyleCategory />
    // [] [] [] []
    // [] [] [] []
    return(
      <div id="styleSelector">
        {selectStyleOptions.map((styleEntry) => (
          <span key={styleEntry.style_id} className="styleEntryThumbnail">
            <img src={styleEntry.photos[0].thumbnail_url} alt="style entry thumbnail_url" />
          </span>
        ))}
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
      "547962": PropTypes.objectOf(PropTypes.shape({
        "quantity": PropTypes.number,
        "size": PropTypes.string
      }))
    }))
  })).isRequired,
  // retrieveSelectStyleOptions: PropTypes.func.isRequired,
  selectStyleIndex: PropTypes.number.isRequired
  // setSelectStyleIndex: PropTypes.func.isRequired
}

export default StyleSelector;
