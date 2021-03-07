import React, { useState } from 'react';
import PropTypes from 'prop-types';

// import StylePriceCategory from './StylePriceCategory.jsx';

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
    // [] [] [] []
    // [] [] [] []
    return(
      {selectStyleOptions.map(styleIndex => (
        <div key={styleIndex.name} className="styleIndexThumbnail">
          <img src={styleIndex.photos[0].thumbnail_url} alt="style index thumbnail_url" />
        </div>
      ))}
      </div>

    let styleWindowArray = [];
    selectStyleOptions.map(styleIndex => (
      if ( styleIndex.photos[0].thumbnail_url !== null ) {
        styleWindowArray.push(styleIndex.photos[0].thumbnail_url);
      }
    ))
    return (
      <div id="styleSelector">
        <ul>
          <li>
            {styleWindowArray[0], styleWindowArray[1], styleWindowArray[2], styleWindowArray[3]}
          </li>
          <li>
            {styleWindowArray[4], styleWindowArray[5], styleWindowArray[6], styleWindowArray[7]}
          </li>
        </ul>
      </div>
    //     {selectStyleOptions.map(styleIndex => (
    //       <div key={styleIndex.name} className="styleIndexThumbnail">
    //         <img src={styleIndex.photos[0].thumbnail_url} alt="style index thumbnail_url" />
    //       </div>
    //     ))}
    //   </div>
    // );
    //   <div key={styleIndex.name} className="styleIndexThumbnail">
    //           <img src={styleIndex.photos[0].thumbnail_url} alt="style index thumbnail_url" />
    //         </div>
    // if ( selectStyleOptions[0].photos[0] !== null && styleSelectionHasLoaded ) {
    //   return (
    //     <div id="styleSelector">
    //   );
    // }
    // return (
    //   <div id="styleSelector" />
    // );
  }

}

StyleSelector.propTypes = {
  // selectProductId: PropTypes.number.isRequired
  selectStyleOptions: PropTypes.arrayOf(PropTypes.shape({
    "style_id": PropTypes.number,
    "name": PropTypes.string,
    "original_price": PropTypes.string,
    // "sale_price":null, // PropTypes.number but X.isRequired.X
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
