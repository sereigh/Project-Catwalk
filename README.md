# Project-Catwalk

> An e-commerce API, redesigned and modernized to increase traffic and sales.

#### Table of Contents

- [Project-Catwalk](#Project-Catwalk)
  - [Technologies](#Technologies)
  - [Development](#Development)
  - [Installation](#Installation)
  - [Operation](#Operation)
  - [Preview](#Preview)
    - [Screenshots](#Screenshots)
  - [Testing](#Testing)
  - [Team Members](#Team_Members)
  - [License](#License)

### Technologies

| Stack      | Dependencies | Dev Dependencies |
| ---------- | ------------ | ---------------- |
| CSS        | Axios        | Jest             |
| HTML       | ReactJS      | axe-core         |
| ReactJS    | ExpressJS    | webpack/babel    |
| JavaScript | Cloudinary   | eslint -airbnb   |

### Development

> My role in the remote team that developed Project-Catwalk was re-designing and implementing the client-facing features of the Questions & Answers Service.

There was a unique need to display multiple pieces of relational data in a clean and user friendly way. I chose to display these data points in an accordion style UI to reduce scrolling and support user control.

The panel functionality is controlled with a queue-like function I implemented with **_JavaScript_**, and supported by pure **_CSS_** properties and ternary operators that switch element classnames to show or hide information based on user interaction.

> Check out [Operation](#Operation) for an overview of the services' functionality or the [Preview](#Preview) below for a demonstration of all Q & A features.

### Installation

1. Clone repository.
2. From within the root directory:

`npm install`

3. From within the root directory:

`npm start`

4. View in browser:

`http://localhost:3000`

### Operation

-Type any phrase to search the product's questions and answers for related information. This will highlight the keywords and filter the results.

-Clicking any question will expand the panel to reveal it's corresponding answers list.

-Vote for the helpfulness of an answer or question by clicking the `Helpful` button. Each vote increases the helpful rating by 1. A user can only vote once.

-Click `Report` to notify site admins of an inappropriate answer.

-Want to submit your own question or answer? Click `Add` and fill out the required fields in the pop up modal to submit and see it appear in the widget.

-Cant find what you're looking for? Click `More` for answers or questions to expand the accordion. When you're finished, tap `Collapse` to close the panel.

### Preview

![Preview](demo/qa-demo.gif)

### Screenshots

![Questions&Answers Widget](demo/qaOverview.png "Questions & Answers Widget")
![Search Highlight Feature](demo/qaSearchHighlight.png "Search Highlight Feature")
![Pop-up Modal](demo/qaModalForm.png "Pop-up Modal")

### Testing

This application was tested using snapshots in **_Jest_**.

From within the root directory:

`npm test`

### Team Members

- [Krista Brock](https://github.com/sereigh) [Questions & Answers Service]
- [Samuel Cho](https://github.com/SamuelCho-ubf) [Related Products Service]
- [Laura Nielsen](https://github.com/VioletGlen) [Overview & Cart Service]
- [Kyle Johnson](https://github.com/KyleJohnson42) [Ratings & Reviews Service]

### License

[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]
