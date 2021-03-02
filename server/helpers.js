const axios = require('axios');
const config = require('../config.js');

//Products GET /products Retrieves the list of products
let getProductsList = () => {
  let options = {
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products?page=1&count=5`,
    //param: page (integer) Selects the page of results to return. Default 1.
    //param: count (integer) Specifies how many results per page to return. Default 5
    headers: {
      Authorization: `${config.TOKEN}`
    }
  }
  return (
    axios(options)
      .then((data) => {
        return (data);
      })
      .catch((error) => {
        console.log('this is an error,', error);
      })
  )
  //alt: axios.get(url[, config])
  //return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products?page=1&count=5`, options)
}

//Products GET /products/:product_id Returns all product level information for a specified product id
let getProductById = (id) => {
  let options = {
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}?product_id=${id}`,
    //param: product_id (integer) Required ID of the Product requested
    headers: {
      Authorization: `${config.TOKEN}`
    }
  }
  return (
    axios(options)
      .then((data) => {
        return (data);
      })
      .catch((error) => {
        console.log(error);
      })
  )
}

//Products GET /products/:product_id/styles Returns all styles available for the given product
let getStylesById = (id) => {
  let options = {
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}/styles?product_id=${id}`,
    //param: product_id (integer) Required ID of the Product requested
    headers: {
      Authorization: `${config.TOKEN}`
    }
  }
  return (
    axios(options)
      .then((data) => {
        return (data);
      })
      .catch((error) => {
        console.log(error);
      })
  )
}

//Products GET /products/:product_id/related Returns the id's of products related to the product specified
let getRelatedProducts = (id) => {
  let options = {
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}/related?product_id=${id}`,
    //param: product_id (integer) Required ID of the Product requested
    headers: {
      Authorization: `${config.TOKEN}`
    }
  }
  return (
    axios(options)
      .then((data) => {
        return (data);
      })
      .catch((error) => {
        console.log(error);
      })
  )
}

//Reviews

//Questions&Answers

//Cart GET /cart Retrieves list of products added to the cart by a user
// let getCartContents = (id) => {
//   let options = {
//     method: 'get',
//     url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/cart`,
//     //param: sku_id (integer) ID for the product being added to the cart
//     headers: {
//       Authorization: `${config.TOKEN}`
//     }
//   }
//   return (
//     axios(options)
//       .then((data) => {
//         return (data);
//       })
//       .catch((error) => {
//         console.log(error);
//       })
//   )
// }

//Cart POST /cart Adds a product to the cart
// let postCartContents = (id) => {
//   let options = {
//     method: 'post',
//     url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/cart`,
//     headers: {
//       Authorization: `${config.TOKEN}`
//     }
//   }
//
// }

//Interactions

module.exports = {
  //Products[https://learn-2.galvanize.com/cohorts/2474/blocks/94/content_files/Front%20End%20Capstone/project-atelier-catwalk/products.md]
  getProductsList,
  getProductById,
  getStylesById,
  getRelatedProducts
  //Reviews[https://learn-2.galvanize.com/cohorts/2474/blocks/94/content_files/Front%20End%20Capstone/project-atelier-catwalk/reviews.md]

  //Questions&Answers[https://learn-2.galvanize.com/cohorts/2474/blocks/94/content_files/Front%20End%20Capstone/project-atelier-catwalk/qa.md]

  //Cart[https://learn-2.galvanize.com/cohorts/2474/blocks/94/content_files/Front%20End%20Capstone/project-atelier-catwalk/cart.md]
  //getCartContents,
  //postCartContents,
  //Interations[https://learn-2.galvanize.com/cohorts/2474/blocks/94/content_files/Front%20End%20Capstone/project-atelier-catwalk/interactions.md]
}


/* gLearn notes */
/*
//[https://learn-2.galvanize.com/cohorts/2474/blocks/94/content_files/Front%20End%20Capstone/project-atelier-catwalk/products.md]
//Atelier API can currently be found at https://app-hrsei-api.herokuapp.com/api/fec2/:CAMPUS_CODE/
//In an HTTP GET request, parameters are sent as a query string: http://example.com/page?parameter=value&also=another
//In an HTTP POST or PUT request, the parameters are not sent along with the URI, but in the request body.
*/
