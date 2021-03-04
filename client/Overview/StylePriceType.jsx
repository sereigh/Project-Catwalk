// import React from 'react';
// import PropTypes from 'prop-types';
// import axios from 'axios';

// // import StyleSelector from './StyleSelector.jsx';

// // OverviewContainer.jsx provides props:
// //   selectProductId={selectProductId}

// class StylePriceType extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       selectStyleOptions: [
//         {
//           "product_id": "17763",
//           "results": [
//               {
//                   "style_id": 94747,
//                   "name": "Red",
//                   "original_price": "738.00",
//                   "sale_price": null,
//                   "default?": true,
//                   "photos": [
//                       {
//                           "thumbnail_url": "https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
//                           "url": "https://images.unsplash.com/photo-1560567546-4c6dbc16877b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
//                       }
//                   ],
//                   "skus": {
//                       "547962": {
//                           "quantity": 13,
//                           "size": "One Size"
//                       }
//                   }
//               },
//               {
//                   "style_id": 94748,
//                   "name": "Azure",
//                   "original_price": "738.00",
//                   "sale_price": null,
//                   "default?": false,
//                   "photos": [
//                       {
//                           "thumbnail_url": "https://images.unsplash.com/photo-1552904219-f4b87efe8792?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
//                           "url": "https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1511&q=80"
//                       }
//                   ],
//                   "skus": {
//                       "547963": {
//                           "quantity": 56,
//                           "size": "One Size"
//                       }
//                   }
//               },
//               {
//                   "style_id": 94749,
//                   "name": "Cyan",
//                   "original_price": "738.00",
//                   "sale_price": null,
//                   "default?": false,
//                   "photos": [
//                       {
//                           "thumbnail_url": "https://images.unsplash.com/photo-1465877783223-4eba513e27c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80",
//                           "url": "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=962&q=80"
//                       }
//                   ],
//                   "skus": {
//                       "547964": {
//                           "quantity": 43,
//                           "size": "One Size"
//                       }
//                   }
//               }
//           ]
//         }
//       ],
//       selectStyleIndex: 0
//     };
//     this.setSelectStyleIndex = this.setSelectStyleIndex.bind(this);
//     this.retrieveSelectStyleOptions = this.retrieveSelectStyleOptions.bind(this);
//   }

//   componentDidMount() {
//     this.retrieveSelectStyleOptions();
//   }

//   setSelectStyleIndex() {
//     // const { selectProductId } = this.props;
//     // const { selectStyleIndex } = this.state;
//   }

//   retrieveSelectStyleOptions() {
//     const { selectProductId } = this.props;
//     console.log('StylePriceType_retrieveSelectStyleOptions selectProductId', selectProductId);
//     axios
//       .get(`/products/${selectProductId}/styles`)
//       // .get(`/products/17763/styles`)
//       .then((response) => {
//         // console.log('StylePriceType_retrieveSelectStyleOptions response', response);
//         // console.log('StylePriceType_retrieveSelectStyleOptions response.data', response.data);
//         // console.log('StylePriceType_retrieveSelectStyleOptions response.data.results', response.data.results);
//         this.setState({
//           selectStyleOptions: response.data
//         })
//         this.componentDidMount()
//       })
//       .catch((error) => {
//         console.log('Get product style options failed...', error);
//       })
//   }

//   render() {
//     // const { selectProductId } = this.props;
//     // console.log('StylePriceType_render selectProductID', selectProductId);
//     const { selectStyleOptions, selectStyleIndex } = this.state;
//     console.log('StylePriceType_render selectStyleOptions', selectStyleOptions);
//     console.log('StylePriceType_render selectStyleIndex', selectStyleIndex);
//     // Price $360
//     // STYLE > SELECTED STYLE
//     // [] [] [] []
//     // [] [] [] []
//     return (
//       <div>
//         <div id="stylePrice">
//           $360
//         </div>
//         <div id="styleAnnouncement">
//           <h4>
//             {"STYLE >"}
//             {/* { selectStyleOptions[selectStyleIndex] } */}
//           </h4>
//         </div>
//         <div id="styleSelector">
//           {/* <StyleSelector
//             selectStyleOptions={selectStyleOptions}
//             selectStyleIndex={selectStyleIndex}
//             setSelectStyleIndex={this.setSelectStyleIndex}
//           /> */}
//         </div>
//       </div>
//     );
//   }

// }

// StylePriceType.propTypes = {
//   selectProductId: PropTypes.number.isRequired
// }

// export default StylePriceType;
