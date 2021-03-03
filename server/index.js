const path = require('path');

const express = require('express');

const helpers = require('./helpers');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());

// Products GET /products Retrieves the list of products
app.get('/products', (req,res) => {
  helpers.getProductsList()
    .then((response) => {
      res.send(response.data)
    })
    .catch((error) => {
      console.log(error.data);
    })
});

// Products GET /products/:product_id Returns all product level information for a specified product id
app.get('/products/:product_id', (req, res) => {
  helpers.getProductsList()
  .then((response) => {
    res.send(response.data)
  })
  .catch((error) => {
    console.log(error.data);
  })
});

// Products GET /products/:product_id/styles Returns all styles available for the given product
app.get('/products/:product_id/styles', (req, res) => {
  helpers.getStylesById()
  .then((response) => {
    res.send(response.data)
  })
  .catch((error) => {
    console.log(error.data);
  })
});

// Products GET /products/:product_id/related Returns the id's of products related to the product specified
app.get('/products/:product_id/related', (req, res) => {
  helpers.getRelatedProducts()
  .then((response) => {
    res.send(response.data)
  })
  .catch((error) => {
    console.log(error.data);
  })

// Reviews GET /reviewdata/:product_id Returns all review metadata for a specified product id
app.get('/reviewdata/:product_id', (req, res) => {
  helpers.getReviewData(req.params.product_id)
    .then((response) => {
      res.send(response.data)
    })
    .catch((error) => {
      console.log(error.data);
    })
});

// Reviews GET /reviews/:product_id/:sort/:count Returns all reviews for a specified product id
app.get('/reviews/:product_id/:sort/:count', (req, res) => {
  helpers.getAllReviews(req.params.product_id, req.params.sort, req.params.count)
    .then((response) => {
      res.send(response.data)
    })
    .catch((error) => {
      console.log(error.data);
    })
});

// Reviews PUT /reviews/:review_id/helpful Increases helpfulness by one for a specified review id
app.put('/reviews/:review_id/helpful', (req, res) => {
  helpers.voteHelpful(req.params.review_id)
    .then((response) => {
      res.send(response.data)
    })
    .catch((error) => {
      console.log(error.data);
    })
});

// Reviews PUT /reviews/:review_id/report Reports a specified review id
app.put('/reviews/:review_id/report', (req, res) => {
  helpers.reportReview(req.params.review_id)
    .then((response) => {
      res.send(response.data)
    })
    .catch((error) => {
      console.log(error.data);
    })
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});


/* gLearn notes */
/*
//[https://learn-2.galvanize.com/cohorts/2474/blocks/94/content_files/Front%20End%20Capstone/project-atelier-catwalk/products.md]
//Atelier API can currently be found at https://app-hrsei-api.herokuapp.com/api/fec2/:CAMPUS_CODE/
//In an HTTP GET request, parameters are sent as a query string: http://example.com/page?parameter=value&also=another
//In an HTTP POST or PUT request, the parameters are not sent along with the URI, but in the request body.
//...
//  Products[https://learn-2.galvanize.com/cohorts/2474/blocks/94/content_files/Front%20End%20Capstone/project-atelier-catwalk/products.md]
//  Reviews[https://learn-2.galvanize.com/cohorts/2474/blocks/94/content_files/Front%20End%20Capstone/project-atelier-catwalk/reviews.md]
//  Questions&Answers[https://learn-2.galvanize.com/cohorts/2474/blocks/94/content_files/Front%20End%20Capstone/project-atelier-catwalk/qa.md]
//  Cart[https://learn-2.galvanize.com/cohorts/2474/blocks/94/content_files/Front%20End%20Capstone/project-atelier-catwalk/cart.md]
//  Interations[https://learn-2.galvanize.com/cohorts/2474/blocks/94/content_files/Front%20End%20Capstone/project-atelier-catwalk/interactions.md]
*/
