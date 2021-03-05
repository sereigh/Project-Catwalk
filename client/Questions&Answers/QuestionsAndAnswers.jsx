import React from 'react';

import QuestionsList from './QuestionsList.jsx';

// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/extensions
import questions from './questions.js';

class QuestionsAndAnswers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reportOption: 0,
    };
  }

  componentDidMount() {
    // GET questions
  }


  render() {

    const {reportOption} = this.state;

    return (
      <div className="qaContainer">

        <div className="qaHeader">
          QUESTIONS & ANSWERS
        </div>
        <div className="qaSearch" style={{ border: 'solid black thin' }}>
          <span className="searchText">
            HAVE A QUESTION? SEARCH FOR ANSWERS...
          </span>
        </div>
        {questions && <QuestionsList questions={questions} reportOption={reportOption} />}
        {/* <QuestionsMenu /> */}
      </div>
    );
  }
};

export default QuestionsAndAnswers;
