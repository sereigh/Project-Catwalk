import React from "react";
import PropTypes from "prop-types";
import axios from "axios";

import withClickTracker from "../SharedComponents/withClickTracker.jsx";

import QAview from "./QAview.jsx";
import sortQuestions, { filterSearch, findPath } from "./Utility.jsx";

class QuestionsAndAnswers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      inputValue: "",
      filtered: false,
      filteredQuestions: [],
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchClear = this.handleSearchClear.bind(this);
    this.postFeedback = this.postFeedback.bind(this);
    this.postInput = this.postInput.bind(this);
  }

  componentDidMount() {
    this.getAllQuestions();
  }

  componentDidUpdate(prevProps) {
    const { productId, productName } = this.props;
    if (
      productId !== prevProps.productId ||
      productName !== prevProps.productName
    ) {
      this.getAllQuestions();
    }
  }

  handleSearchChange(e) {
    e.preventDefault();
    const { inputValue, questions } = this.state;
    this.setState({
      inputValue: e.target.value,
    });

    if (inputValue.length > 2) {
      this.setState({
        filteredQuestions: filterSearch(questions, e.target.value),
        filtered: true,
      });
    } else {
      this.setState({
        filtered: false,
      });
    }
  }

  handleSearchClear(e) {
    const { inputValue } = this.state;

    e.preventDefault();
    if (!inputValue) {
      this.setState({
        filtered: false,
      });
    }
  }

  getAllQuestions() {
    const { productId } = this.props;

    axios
      .get(`/qa/questions/${productId}`)
      .then((response) => sortQuestions(response))
      .then((response) => {
        console.log(response[1].length, response[1]);
        this.setState({
          questions: response[1],
        });
      })
      .catch((err) => err);
  }

  postInput(type, id, option, input) {
    const endPoint = findPath(type, id, option);

    axios
      .post(endPoint, input)
      // remove when add question is troubleshot
      .then((response) => console.log(response))
      .then(() => this.getAllQuestions())
      .catch((err) => err);
  }

  postFeedback(type, id, option) {
    const endPoint = findPath(type, id, option);

    if (type === "reported") {
      this.getAllQuestions();
    }
    axios
      .put(endPoint)
      .then(() => this.getAllQuestions())
      .catch((err) => err);
  }

  render() {
    const { questions, inputValue, filtered, filteredQuestions } = this.state;
    const { productName, productId, handleClickTrack } = this.props;

    return (
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      <div
        className="qa-container"
        onClick={handleClickTrack}
        onKeyPress={handleClickTrack}
      >
        <span className="qa-header">QUESTIONS AND ANSWERS</span>
        <span className="qa-search">
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="search"
              className="qa-search-bar"
              onChange={this.handleSearchChange}
              onClick={this.handleSearchClear}
              value={inputValue}
              placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
            />
          </form>
        </span>
        {filtered ? (
          <QAview
            questions={filteredQuestions}
            postFeedback={this.postFeedback}
            postInput={this.postInput}
            productName={productName}
            productId={productId}
            query={inputValue}
          />
        ) : (
          <QAview
            questions={questions}
            postFeedback={this.postFeedback}
            postInput={this.postInput}
            productName={productName}
            productId={productId}
            query=""
          />
        )}
      </div>
    );
  }
}

QuestionsAndAnswers.propTypes = {
  productId: PropTypes.number.isRequired,
  productName: PropTypes.string.isRequired,
  handleClickTrack: PropTypes.func.isRequired,
};

export default withClickTracker(QuestionsAndAnswers);
