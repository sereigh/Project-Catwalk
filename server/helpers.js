const axios = require('axios'); //[https://github.com/axios/axios]
const config = require('../config.js'); //provides API token for insertion into Authorization header

//Products GET /products Retrieves the list of products
//param: page (integer) Selects the page of results to return. Default 1.
//param: count (integer) Specifies how many results per page to return. Default 5
let getProductsList = () => {
  let options = {
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products?page=1&count=5`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  }
  axios(options)
    .then((data) => {
      //console.log(data);
      //format: [{},{},{}] array of nested objs
      return (data);
    })
    .catch((error) => {
      console.log(error);
    })
  //alt: axios.get(url[, config])
  //return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products?page=1&count=5`, options)
}

//Products GET /products/:product_id Returns all product level information for a specified product id
//param: product_id (integer) Required ID of the Product requested
let getProductById = (id) => {
  let options = {
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}?product_id=${id}`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  }
  axios(options)
    .then((data) => {
      //console.log(data);
      //format: {...} object w nested collections
      return (data);
    })
    .catch((error) => {
      console.log(error);
    })
  //alt: axios.get(url[, config])
  //return axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}?product_id=${id}`, options)
}

module.exports = {
  //Products[https://learn-2.galvanize.com/cohorts/2474/blocks/94/content_files/Front%20End%20Capstone/project-atelier-catwalk/products.md]
  getProductsList,
  getProductById
  //Reviews[https://learn-2.galvanize.com/cohorts/2474/blocks/94/content_files/Front%20End%20Capstone/project-atelier-catwalk/reviews.md]

  //Questions&Answers[https://learn-2.galvanize.com/cohorts/2474/blocks/94/content_files/Front%20End%20Capstone/project-atelier-catwalk/qa.md]

  //Cart[https://learn-2.galvanize.com/cohorts/2474/blocks/94/content_files/Front%20End%20Capstone/project-atelier-catwalk/cart.md]

  //Interations[https://learn-2.galvanize.com/cohorts/2474/blocks/94/content_files/Front%20End%20Capstone/project-atelier-catwalk/interactions.md]
}


/* gLearn notes */
/*
//[https://learn-2.galvanize.com/cohorts/2474/blocks/94/content_files/Front%20End%20Capstone/project-atelier-catwalk/products.md]
//Atelier API can currently be found at https://app-hrsei-api.herokuapp.com/api/fec2/:CAMPUS_CODE/
//In an HTTP GET request, parameters are sent as a query string: http://example.com/page?parameter=value&also=another
//In an HTTP POST or PUT request, the parameters are not sent along with the URI, but in the request body.
*/
