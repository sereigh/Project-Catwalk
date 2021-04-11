// [https://reactjs.org/docs/hooks-effect.html]
// import React, { useState, useEffect } from 'react';
import React from "react";
import PropTypes from "prop-types";

// import CartFormSize from './CartFormSize.jsx';
// import CartFormQuantity from './CartFormQuantity.jsx';

// function CartInserter(props) {
class CartInserter extends React.Component {
  // selectStyleOptions={selectStyleOptions} viaOvC
  // selectStyleIndex={selectStyleIndex} viaOvC
  constructor(props) {
    super(props);
    this.state = {
      // skusArray: [],
      // cartSize: null,
      // cartQuantity: null
      // cartSizeValue: "SELECT SIZE",
      // cartQuantityValue: 1
    };
    // this.postToApiCart = this.postToApiCart.bind(this);
    // this.handleSizeChange = this.handleSizeChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentDidUpdate(prevProps) {
  //   const { selectStyleOptions, selectStyleIndex } = this.props;
  //   if ( prevProps.selectStyleOptions[selectSTyleIndex] !== selectStyleOptions[selectStyleIndex] ) {
  //     this.setState({
  //       skuCurrent: null,
  //       cartQuantity: null
  //     })
  //   }
  // }

  // handleSizeChange(event) {
  //   console.log('CartInserter_handleSizeChange eventtargetvalue:', event.target.value);
  //   console.log('CartInserter_handleSizeChange quantityArr.indexOf(event.target.value)', quantityArr.indexOf(event.target.value))
  // this.setState({
  //   skuCurrent: null,
  //   cartQuantity: null
  // })
  // }

  // setCurrentSku() {
  //   // const { selectStyleOptions, selectStyleIndex } = this.props;
  //   // this.setState({
  //   //   cartCurrentSku: selectStyleOptions[selectStyleIndex].skus[0],
  //   //   cartSize: null,
  //   //   cartQuantity: null
  //   // })
  // }

  // postToApiCart() {
  //   console.log('Posting...');
  // }

  render() {
    const { selectStyleOptions, selectStyleIndex } = this.props;
    const { cartSizeValue, cartQuantityValue } = this.state;
    // let desiredTarget = 0;
    // console.log('CartInserter_render selectStyleOptions[selectStyleIndex].skus', selectStyleOptions[selectStyleIndex].skus);
    const skusAccessObject = selectStyleOptions[selectStyleIndex].skus;
    const skusArray = [];
    // if (skusAccessObject.hasOwnProperty(key)) {
    //   for (const key in skusAccessObject) {
    //       skusArray.push(key);
    //   }
    // }
    // for (const key in skusAccessObject) {
    //   if (skusAccessObject.hasOwnProperty(key)) {
    //     skusArray.push(key);
    //   }
    // }
    for (const key in skusAccessObject) {
      if (Object.prototype.hasOwnProperty.call(skusAccessObject, key)) {
        skusArray.push(key);
      }
    }
    // console.log('CartInserter_render skusArray', skusArray);
    // console.log('CartInserter_render skusAccessObject # quantity', skusAccessObject[skusArray[0]].quantity);
    // console.log('CartInserter_render skusAccessObject # size', skusAccessObject[skusArray[0]].size);
    const sizeArr = [];
    const quantityArr = [];
    for (let i = 0; i < skusArray.length; i++) {
      sizeArr.push(skusAccessObject[skusArray[i]].size);
      quantityArr.push(skusAccessObject[skusArray[i]].quantity);
    }
    // console.log('CartInserter_render sizeArray', sizeArr);
    // console.log('CartInserter_render quantityArray', quantityArr);
    const quantitySizes = sizeArr.map((size) => (
      <option key={size} value={size}>
        {size}
      </option>
    ));
    // const quantityFifteen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    // const quantityLimitFifteen = quantityFifteen.map((number) => <option key={number} value={number}>{number}</option> );
    // const quantityAvailable = []
    // let cacluclateLimit =
    // for (let j = 0; j < skusArray.length; i++) {

    // }
    // const quantityOptions = quantityArr.map((quantity) => <option key={quantity} value={quantity}>{quantity}</option> );

    // const[setCurrentSize] = useState("");
    // useEffect(() => {
    //   setCurrentSize("");
    // })

    return (
      <div className="cartCrates">
        <br />
        <div id="cartSelectorRow">
          <span id="cartSizeSelect">
            {/* <input type="submit" /> */}
            <select
              value={cartSizeValue}
              onBlur={this.handleSizeChange}
              // onBlur={(event) => {
              //   setCurrentSize(event.target.value)
              // }}
              id="cartSizeDropdown"
            >
              <option>&nbsp;&nbsp;SELECT SIZE</option>
              {quantitySizes}
              {/* {sizeArr.map((size) => {
                return (
                  <option key={size} value={size}>
                    {size}
                  </option>
                );
              })} */}
            </select>
          </span>
          <span id="cartQuantitySelect">
            <select
              value={cartQuantityValue}
              onBlur={this.handleQuantityChange}
              id="cartQuantityDropdown"
            >
              <option>&nbsp;&nbsp;-</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              {/* {quantityOptions} */}
            </select>
          </span>
        </div>
        <div id="cartSubmitRow">
          <span id="cartAddToCart">
            <button
              type="submit"
              id="buttonAddToCart"
              onClick={this.postToApiCart}
            >
              <span id="buttonAddToBag">ADD TO BAG</span>
              {/* <span id="buttonAddToPlus"> +</span> */}
            </button>
          </span>
          <span id="cartAddToPlus">
            <button
              type="submit"
              id="buttonAddToPlus"
              onClick={this.changeToHeart}
            >
              {/* <span id="buttonAddToBag">ADD TO BAG</span> */}
              <span id="buttonAddToPlus"> + </span>
            </button>
          </span>
        </div>
      </div>
    );
    //   // const { cartSku, cartSizeIndex, cartSize, cartQuantity } = this.state;
    //   let buttonAddToCart = null;
    //   // if ( cartSize !== '' && cartQuantity !== '' ) {
    //   buttonAddToCart = (
    //     <button
    //       type="submit"
    //       id="buttonAddToCart"
    //       onClick={this.postToApiCart}
    //     >
    //       <span>ADD TO BAG</span>
    //       <span id="buttonAddToCart+">+</span>
    //     </button>
    //   );
    //   // }
    //   return (
    //     <div id="cartCrates">
    //       {/* <CartFormSize /> */}
    //       {/* <CartFormQuantity /> */}
    //       <div className="cartAddToBag">
    //         {buttonAddToCart}
    //       </div>
    //     </div>
    //   );
  }
}

CartInserter.propTypes = {
  selectStyleOptions: PropTypes.arrayOf(
    PropTypes.shape({
      style_id: PropTypes.number,
      name: PropTypes.string,
      original_price: PropTypes.string,
      sale_price: PropTypes.string,
      "default?": PropTypes.bool,
      photos: PropTypes.arrayOf(
        PropTypes.shape({
          thumbnail_url: PropTypes.string,
          url: PropTypes.string,
        })
      ),
      skus: PropTypes.objectOf(
        PropTypes.shape({
          // "547962": PropTypes.objectOf(PropTypes.shape({
          quantity: PropTypes.number,
          size: PropTypes.string,
          // }))
        })
      ),
    })
  ).isRequired,
  selectStyleIndex: PropTypes.number.isRequired,
};

export default CartInserter;
