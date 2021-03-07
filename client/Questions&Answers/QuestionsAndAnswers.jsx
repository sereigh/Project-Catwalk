import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import QAview from './QAview.jsx';
import sortQuestions, {filterQuestions} from './Utility.jsx'

class QuestionsAndAnswers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      inputValue: '',
      filtered: false,
      filteredQuestions: []
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchClear = this.handleSearchClear.bind(this);
    this.postFeedback = this.postFeedback.bind(this);
  }

  componentDidMount() {
    this.getAllQuestions();
  }

  handleSearchChange(e) {
    e.preventDefault();
    const { inputValue, questions } = this.state;

    this.setState({ inputValue: e.target.value });

    if (inputValue.length > 2) {
      this.setState({ filteredQuestions: filterQuestions(questions, e.target.value), filtered: true });
    } else {
      this.setState({ filtered: false });
    }
};

  handleSearchClear(e) {
    const { inputValue } = this.state;
    e.preventDefault();
    if (!inputValue) {
      this.setState({ filtered: false });
  }
  };

  getAllQuestions() {
    const { productId } = this.props;

    axios.get(`/qa/questions/${productId}`)
    .then((response) => sortQuestions(response))
    .then((response) => {this.setState({ questions: response[1] })})
    .catch((err) => err)
  }

  postFeedback() {
    console.log('create post route');
  }

  render() {

    const { questions, inputValue, filtered, filteredQuestions } = this.state;

    return (
      <div className="qaHeader" style={{ border: 'solid black thin' }}>
        <div className="qaSearch" style={{ border: 'solid black thin' }}>
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="search"
              className="searchBar"
              onChange={this.handleSearchChange}
              onClick={this.handleSearchClear}
              value={inputValue}
              placeholder='HAVE A QUESTION? SEARCH FOR ANSWERS...'
            />
          </form>
        </div>
        {filtered ? <QAview questions={filteredQuestions} postFeedback={this.postFeedback} /> : <QAview questions={questions} postFeedback={this.postFeedback} />}
      </div>
    );
  }
};

QuestionsAndAnswers.propTypes = {
  productId: PropTypes.number.isRequired,
}

export default QuestionsAndAnswers;
