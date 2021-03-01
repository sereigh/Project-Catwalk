const express = require('express');
const helpers = require('./helpers');
const path = require('path');
const app = express();
const port = 3000;

app.use('/static', express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

//Products GET /products Retrieves the list of products
app.get('/products', (req,res) => {
  helpers.getProductsList( (err, results) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(results);
    }
  })
});

//Products GET /products/:product_id Returns all product level information for a specified product id
app.get('/products/:product_id', (req, res) => {
  helpers.getProductById( (err, results) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(results);
    }
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
