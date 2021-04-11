# Project-Catwalk

>An e-commerce API, Redesigned and modernized to increase sales.

### Table of Contents

* [Project-Catwalk](#Project-Catwalk)
     * [Tech Stack](#Tech_Stack)
     * [Development](#Development)
     * [Requirements](#Requirements)
     * [Installation](#Installation)
     * [Operation](#Operation)
     * [Preview](#Preview)
          * [Screenshots](#Screenshots)
     * [Testing](#Testing)
     * [Team Members](#Team_Members)
     * [License](#License)

#### Tech-Stack

* CSS
* Jest
* HTML
* Reactjs
* Javascript

## Development

> My role in the remote team that developed Project-Catwalk was re-desiging an implementing the client-facing features of the Questions & Answers Service.
> 
There was a unique need to display multiple pieces of relational data in a clean and user friendly way. I chose to display these datapoints in an accordion style UI to reduce scrolling and support user control. 
 
 The panel functionality is controled with a queue-like function I implemented with Javascript, and supported by pure CSS properties and ternary operators that switch element classnames to show or hide information based on user interaction.
 
I used the airbnb plugin with eslint for readability, and integrated accessibility into the team workflow by using axe-core to maintain productivity and increase reach potential. 
 
>Check out the [Preview](#Preview) below for a demonstration of all Q & A features. 

## Requirements

* Axios
* ReactJS
* Expressjs
* Cloudinary

## Installation

1. Clone repository.
2. From within the root directory:
``
npm install
``
3. From within the root directory:
``
npm start
``
4. View in browser:
``
http://localhost:3000
``

## Operation

Type any phrase to search the product's questions and answers for more information. This will highlight the keywords and filter the results. 

Clicking any question will expand the panel to reveal it's corresponding answers list.

Vote for the helpfulness of an answer or question by clicking the ``Helpful`` button. Each vote increases the helpful rating by 1. A user can only vote once.

Click ``Report`` to notify site admins of an inappropriate answer. 

Want to submit your own question or answer? Click ``Add An Answer`` or ``Add A Question`` respectively. Fill out all required fields to submit and see your blurb appear in the widget. 

Cant find what you're looking for? Click ``More Answered Questions`` or ``More Answers`` to expand the accordion. When you're finished, tap ``Collapse`` to close the panel.  

## Preview

![Preview](https://www.dropbox.com/s/dt8fjpi9csv4t17/qa-demo.gif)


## Screenshots

![Questions&Answers Widget](https://www.dropbox.com/s/vzwutn8p4ly2zjc/qaSH.png "Questions&Answers Widget")
![Search Highlight Feature](https://www.dropbox.com/s/h194f86w3ka6g8e/qaHL.png "Search Highlight Feature")
![Pop-up Modal](https://www.dropbox.com/s/3h636in122vtxlq/qaM.png "Pop-up Modal")

## Testing

This application was tested using snapshots in *Jest*. Run all tests with a simple command. 

From within the root directory:
``
npm test
``

## Team Members

- [Krista Brock](https://github.com/sereigh) [Questions & Answers Service]
- [Samuel Cho](https://github.com/SamuelCho-ubf) [Related Products Service]
- [Laura Nielsen](https://github.com/VioletGlen) [Overview & Cart Service]
- [Kyle Johnson](https://github.com/KyleJohnson42) [Ratings & Reviews Service]

## License 

[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)]

