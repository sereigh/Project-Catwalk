const path = require('path');

const express = require('express');

const helpers = require('./helpers');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json({limit: '500kb'}));
app.use(express.urlencoded({limit: '500kb', extended: true}));

// Products GET /products Retrieves the list of products
app.get('/products', (req, res) => {
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
  helpers.getProductById(req.params.product_id)
  .then((response) => {
    res.send(response.data)
  })
  .catch((error) => {
    console.log(error.data);
  })
});

// Products GET /products/:product_id/styles Returns all styles available for the given product
app.get('/products/:product_id/styles', (req, res) => {
  helpers.getStylesById(req.params.product_id)
  .then((response) => {
    res.send(response.data)
  })
  .catch((error) => {
    console.log(error.data);
  })
});

// Products GET /products/:product_id/related Returns the id's of products related to the product specified
app.get('/products/:product_id/related', (req, res) => {
  helpers.getRelatedProducts(req.params.product_id)
    .then((response) => {
      res.send(response.data)
    })
    .catch((error) => {
      console.log(error.data);
    })
});

// Reviews GET /reviewdata/:product_id Returns all review metadata for a specified product id
app.get('/reviewdata/:product_id', (req, res) => {
  helpers.getReviewData(req.params.product_id)
    .then((response) => {
      res.status(200).send(response.data)
    })
    .catch((error) => {
      res.status(400).send(error);
    })
});

// Reviews GET /reviews/:product_id/:sort/:count Returns all reviews for a specified product id
app.get('/reviews/:product_id/:sort/:count', (req, res) => {
  helpers.getAllReviews(req.params.product_id, req.params.sort, req.params.count)
    .then((response) => {
      res.status(200).send(response.data)
    })
    .catch((error) => {
      res.status(400).send(error);
    })
});

// Reviews PUT /reviews/:review_id/helpful Increases helpfulness by one for a specified review id
app.put('/reviews/:review_id/helpful', (req, res) => {
  helpers.voteHelpful(req.params.review_id)
    .then((response) => {
      res.status(200).send(response.data)
    })
    .catch((error) => {
      res.status(400).send(error);
    })
});

// Reviews PUT /reviews/:review_id/report Reports a specified review id
app.put('/reviews/:review_id/report', (req, res) => {
  helpers.reportReview(req.params.review_id)
    .then((response) => {
      res.status(200).send(response.data)
    })
    .catch((error) => {
      res.status(400).send(error);
    })
});

// Reviews POST /upload/photo Uploads photo to cloudinary
app.post('/upload/photo', (req, res) => {
  helpers.uploadPhoto(req.body)
    .then((response) => {
      res.status(201).send(response.secure_url)
    })
    .catch((error) => {
      res.status(400).send(error);
    })
});

// Reviews POST /reviews Posts a new review to the database
app.post('/reviews', (req, res) => {
  helpers.submitReview(req.body)
    .then((response) => {
      res.status(201).send(response.data)
    })
    .catch((error) => {
      res.status(400).send(error);
    })
});

app.get('/qa/questions/:product_id', (req, res) => {
  const pId = req.params.product_id;
  helpers.getQuestions(pId)
  .then((response) => res.status(200).send(response.data))
  .catch((err) => res.status(404).send(err))
});

app.get('/qa/questions/:question_id/answers', (req, res) => {
  const pId = req.params.question_id;
  helpers.getQuestions(pId)
    .then((response) => res.status(200).send(response.data))
    .catch((err) => res.status(404).send(err))
});

app.post('/qa/questions/:product_id', (req, res) => {
  const pId = req.params.question_id;
  const info = req.body;
  helpers.addQuestion(pId, info)
    .then((response) => res.status(201).send(response.data))
    .catch((err) => res.status(404).send(err))
});

app.post('/qa/questions/:question_id/answers', (req, res) => {
  const pId = req.params.question_id;
  const info = req.body;
  helpers.addAnswer(pId, info)
    .then((response) => res.status(201).send(response.data))
    .catch((err) => res.status(404).send(err))
});

app.put('/qa/questions/:question_id/helpful', (req, res) => {
  const pId = req.params.question_id;
  helpers.markQuestionHelpful(pId)
    .then((response) => res.status(204).send(response.data))
    .catch((err) => res.status(404).send(err))
});

app.put('/qa/answers/:answer_id/helpful', (req, res) => {
  const pId = req.params.answer_id;
  helpers.markAnswerHelpful(pId)
    .then((response) => res.status(204).send(response.data))
    .catch((err) => res.status(404).send(err))
});

app.put('/qa/questions/:question_id/report', (req, res) => {
  const pId = req.params.question_id;
  helpers.reportQuestion(pId)
    .then((response) => res.status(204).send(response.data))
    .catch((err) => res.status(404).send(err))
});

app.put('/qa/answers/:answer_id/report', (req, res) => {
  const pId = req.params.answer_id;
  helpers.reportAnswer(pId)
    .then((response) => res.status(204).send(response.data))
    .catch((err) => res.status(404).send(err))
});

// Interactions POST Posts a click to the database
app.post('/interactions', (req, res) => {
  helpers.postClick(req.body)
    .then((response) => res.send(response.data))
    .catch((err) => res.status(404).send(err))
})

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
