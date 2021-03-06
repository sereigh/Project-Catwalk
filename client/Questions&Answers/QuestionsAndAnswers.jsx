/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/extensions */
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import QAList from './QAList.jsx';
import QuestionsMenu from './QuestionsMenu.jsx';

class QuestionsAndAnswers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
    };
    this.getAllQuestions = this.getAllQuestions.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleFeedback = this.handleFeedback.bind(this);
  }

  componentDidMount() {
    this.getAllQuestions();
  }

  handleFeedback() {
    console.log('feedback handled');
  }

  handleSubmit() {
    console.log('handle submit triggered');
  }

  getAllQuestions() {
    const { productId} = this.props;
    axios.get(`/qa/questions/${productId}`)
    .then((response) => Object.values(response.data).sort((a, b) => b.question_helpfulness - a.question_helpfulness))
    .then((response) => this.setState({ questions: response[1] }))
    .catch((err) => err)
  }

  render() {

    const { questions } = this.state;

    return (
      <div className="qaHeader" style={{ border: 'solid black thin' }}>
        <div className="qaSearch" style={{ border: 'solid black thin' }}>
          Search
        </div>
        <QAList questions={questions} handleFeedback={this.handleFeedback} handleSubmit={this.handleSubmit} />
        {/* <QuestionsMenu handleSubmit={this.handleSubmit} toggleView={this.toggleView} /> */}
      </div>
    );
  }
};

QuestionsAndAnswers.propTypes = {
  productId: PropTypes.number.isRequired,
}
// QuestionsAndAnswers.showDefault = {
//   questions: [],
// }

export default QuestionsAndAnswers;