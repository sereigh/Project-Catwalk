// [https://github.com/axios/axios]
const axios = require('axios');

// provides API token for insertion into Authorization header
const config = require('../config.js');

// Products GET /products Retrieves the list of products
// param: page (integer) Selects the page of results to return. Default 1.
// param: count (integer) Specifies how many results per page to return. Default 5
const getProductsList = () => {
  const options = {
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products`,
    headers: {
      Authorization: `${config.TOKEN}`
    }
  }
  return (
    axios(options)
      .then(data => data)
      .catch((error) => {
        console.log(error);
      })
  )
}

// Products GET /products/:product_id Returns all product level information for a specified product id
// param: product_id (integer) Required ID of the Product requested
const getProductById = (id) => {
  const options = {
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}?product_id=${id}`,
    headers: {
      Authorization: `${config.TOKEN}`
    }
  }
  return (
    axios(options)
      .then(data => data)
      .catch((error) => {
        console.log(error);
      })
  )
}

// Reviews GET /reviewdata/:id Retrieves the review metadata for a product
// param: product_id (integer) Required ID of the product
const getReviewData = (id) => {
  const options = {
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta/?product_id=${id}`,
    headers: {
      Authorization: `${config.TOKEN}`
    }
  }
  return (
    axios(options)
      .then(data => data)
      .catch((error) => {
        console.log(error);
      })
  )
}

// Reviews GET /reviews/:id/:totalReviews Retrieves the review metadata
// param: product_id (integer) Required ID of the product
// param: page (integer) Selects the page of results to return. Default 1.
// param: count (integer) Specifies how many results per page to return. Default 5
const getAllReviews = (id, sort, totalReviews) => {
  const options = {
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/?product_id=${id}&sort=${sort}&count=${totalReviews}`,
    headers: {
      Authorization: `${config.TOKEN}`
    }
  }
  return (
    axios(options)
      .then(data => data)
      .catch((error) => {
        console.log(error);
      })
  )
}

const voteHelpful = (id) => {
  const options = {
    headers: {
      Authorization: `${config.TOKEN}`
    }
  }
  return (
    axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/${id}/helpful`, {}, options)
      .then(data => data)
      .catch((error) => {
        console.log(error);
      })
  )
}

module.exports = {
  // Products[https://learn-2.galvanize.com/cohorts/2474/blocks/94/content_files/Front%20End%20Capstone/project-atelier-catwalk/products.md]
  getProductsList,
  getProductById,
  // Reviews[https://learn-2.galvanize.com/cohorts/2474/blocks/94/content_files/Front%20End%20Capstone/project-atelier-catwalk/reviews.md]
  getReviewData,
  getAllReviews,
  voteHelpful
  // Questions&Answers[https://learn-2.galvanize.com/cohorts/2474/blocks/94/content_files/Front%20End%20Capstone/project-atelier-catwalk/qa.md]

  // Cart[https://learn-2.galvanize.com/cohorts/2474/blocks/94/content_files/Front%20End%20Capstone/project-atelier-catwalk/cart.md]

  // Interations[https://learn-2.galvanize.com/cohorts/2474/blocks/94/content_files/Front%20End%20Capstone/project-atelier-catwalk/interactions.md]
}


/* gLearn notes */
/*
//[https://learn-2.galvanize.com/cohorts/2474/blocks/94/content_files/Front%20End%20Capstone/project-atelier-catwalk/products.md]
//Atelier API can currently be found at https://app-hrsei-api.herokuapp.com/api/fec2/:CAMPUS_CODE/
//In an HTTP GET request, parameters are sent as a query string: http://example.com/page?parameter=value&also=another
//In an HTTP POST or PUT request, the parameters are not sent along with the URI, but in the request body.
*/
