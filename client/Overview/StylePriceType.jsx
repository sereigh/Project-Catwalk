import React from 'react';
// import PropTypes from 'prop-types';
// import axios from 'axios';

import StyleSelector from './StyleSelector.jsx';

class StylePriceType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectStyleOptions: [],
      selectStyleIndex: 0
    };
    this.setSelectStyleIndex = this.setSelectStyleIndex.bind(this);
    this.retrieveSelectStyleOptions = this.retrieveSelectStyleOptions.bind(this);
  }

  componentDidMount() {
    // this.retrieveSelectStyleOptions();
  }

  setSelectStyleIndex() {
    // const { selectProductId } = this.props;
    // const { selectStyleIndex } = this.state;
  }

  retrieveSelectStyleOptions() {
    // const { selectProductId } = this.props;
    // console.log('=================================retrieveStyles selectProductId========================', { selectProductId });
    // // const { selectStyleOptions } = this.state;
    // axios
    //   .get(`/products/${selectProductId}/styles`)
    //   .then((response) => {
    //     this.setState({
    //       selectStyleOptions: response.data
    //     })
    //   })
    //   .catch((error) => {
    //     console.log('Get product style options failed...', error);
    //   })
  }

  render() {
    // const { ___ } = this.props;
    const { selectStyleOptions, selectStyleIndex } = this.state;
    // Price $360
    // STYLE > SELECTED STYLE
    // [] [] [] []
    // [] [] [] []
    return (
      <div>
        <div id="stylePrice">
          $360
        </div>
        <div id="styleAnnouncement">
          <h3>
            STYLE
            { selectStyleOptions[selectStyleIndex] }
          </h3>
        </div>
        <div id="styleSelector">
          <StyleSelector
            selectStyleOptions={selectStyleOptions}
            selectStyleIndex={selectStyleIndex}
            setSelectStyleIndex={this.setSelectStyleIndex}
          />
        </div>
      </div>
    );
  }

}

// StylePriceType.propTypes = {
//   selectProductId: PropTypes.number.isRequired
// }

export default StylePriceType;