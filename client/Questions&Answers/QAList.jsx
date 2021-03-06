import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import QuestionsList from './QuestionsList.jsx';
import QAButton from './QAButton.jsx';

class QAList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questionsView: false,
      answersView: false,
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleView = this.toggleView.bind(this);
    this.handleFeedback = this.handleFeedback.bind(this);
  }

  handleFeedback() {
    // const { postFeedback } = this.props;
    console.log('feedback handled on top-level');
  }

  // handleSubmit() {
  //   console.log('handle submit triggered');
  // }

  toggleView(e) {
    const { questionsView, answersView } = this.state;

    if (e.target.name === 'answers') {
      this.setState(() => {return { answersView: !answersView}})
    }
    this.setState(() => {return {questionsView: !questionsView}})
  }

  render() {
    const { questions } = this.props
    const { questionsView, answersView } = this.state;

    return (
      <>
        {
          (questions)
          && (
            <QuestionsList
              questions={questions}
              questionsView={questionsView}
              // handleFeedback={this.handleFeedback}
              answersView={answersView}
              toggleView={this.toggleView}
            />
          )
        }
        {' '}
        <>
          {questions.length < 4 && <QAButton text="MORE ANSWERED QUESTIONS" handler={() => { this.toggleView() }} />}
          <QAButton text="ADD A QUESTION +" handler={() => { console.log('create a modal!') }} />
        </>
      </>
    );
  }
};

QAList.propTypes = {
  questions: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool, PropTypes.object, PropTypes.array]).isRequired,
}

QAList.showDefault = {
  questionsView: false,
  answersView: false,
}

export default QAList;