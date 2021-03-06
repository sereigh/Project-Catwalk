import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import QuestionsList from './QuestionsList.jsx';
// import QuestionsMenu from './QuestionsMenu.jsx';

class QAList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuView: false,
      questionsView: false,
      answersView: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleView = this.toggleView.bind(this);
    this.handleFeedback = this.handleFeedback.bind(this);
  }

  handleFeedback() {
    // const { postFeedback } = this.props;
    console.log('feedback handled on top-level');
  }

  handleSubmit() {
    console.log('handle submit triggered');
  }

  toggleView(e) {
    const { menuView, questionsView, answersView } = this.state;
    const { questions } = this.props;

    if (questions) {
      this.setState({ menuView: !menuView });
    } else {
      if (e.target.name === 'questions') {
        this.setState({questionsView: !questionsView});
      }
      if (e.target.name === 'answers') {
        this.setState({answersView: !answersView});
      }
    }
  }

  render() {
    const { questions } = this.props
    const { menuView, questionsView, answersView } = this.state;

    return (
      <>
        {
        questions
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
        {/* <QuestionsMenu handleSubmit={this.handleSubmit} toggleView={this.toggleView} /> */}
      </>
    );
  }
};

QAList.propTypes = {
  questions: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool, PropTypes.object, PropTypes.array]).isRequired,
}

// QAList.showDefault = {
//   buttonView: false,
//   questionsView: false,
//   answersView: false,
// }

export default QAList;