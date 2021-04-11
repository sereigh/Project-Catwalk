import React from "react";
import PropTypes from "prop-types";

import QuestionsList from "./QuestionsList.jsx";
import Modal from "./Modal.jsx";

class QAview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idList: [],
      openIndex: [0, 1, 2, 3],
      panelIndex: [0, 1, 2, 3],
      clickedId: [],
    };
    this.handleInput = this.handleInput.bind(this);
    this.canClick = this.canClick.bind(this);
    this.toggleQuestions = this.toggleQuestions.bind(this);
    this.toggleAnswers = this.toggleAnswers.bind(this);
    this.togglePanel = this.togglePanel.bind(this);
  }

  handleInput(type, id, input) {
    const { postInput } = this.props;

    postInput(type, id, "add", input);
  }

  canClick(type, id, option) {
    const { idList } = this.state;
    const { postFeedback } = this.props;

    if (idList.includes(id)) {
      return console.error("Invalid action");
    }
    idList.push(id);
    return postFeedback(type, id, option);
  }

  togglePanel(i) {
    const { panelIndex } = this.state;
    const newIndex = panelIndex.slice();

    if (panelIndex.includes(i)) {
      newIndex.splice(newIndex.indexOf(i), 1);
    } else {
      newIndex.push(i);
    }
    if (panelIndex.length > 4) {
      newIndex.unshift();
    }
    this.setState(() => {
      return { panelIndex: newIndex };
    });
  }

  toggleQuestions() {
    const { questions } = this.props;
    const { openIndex } = this.state;
    if (openIndex.length >= questions.length) {
      this.setState(() => {
        return { openIndex: [...Array(4).keys()] };
      });
    } else
      this.setState(() => {
        return { openIndex: [...Array(openIndex.length + 2).keys()] };
      });
  }

  toggleAnswers(qId) {
    const { clickedId } = this.state;
    const newIndex = clickedId.slice();

    if (clickedId.includes(qId)) {
      newIndex.splice(newIndex.indexOf(qId), 1);
    } else {
      newIndex.push(qId);
    }
    this.setState(() => {
      return { clickedId: newIndex };
    });
  }

  render() {
    const {
      questions,
      productName,
      productId,
      postFeedback,
      query,
    } = this.props;
    const { openIndex, panelIndex, clickedId } = this.state;
    const questionText =
      openIndex.length < questions.length
        ? "MORE ANSWERED QUESTIONS"
        : "COLLAPSE QUESTIONS";

    return (
      <div className="qa-view">
        {questions && (
          <QuestionsList
            questions={questions}
            toggleAnswers={this.toggleAnswers}
            handleInput={this.handleInput}
            postFeedback={postFeedback}
            productName={productName}
            canClick={this.canClick}
            openIndex={openIndex}
            togglePanel={this.togglePanel}
            panelIndex={panelIndex}
            clickedId={clickedId}
            query={query}
          />
        )}
        <div className="q-navigation">
          {questions.length > 4 && (
            <span
              className="q-buttons"
              name={name}
              onClick={this.toggleQuestions}
              role="button"
              tabIndex={0}
              onKeyPress={this.toggleQuestions}
            >
              {questionText}
            </span>
          )}
          <span className="q-buttons">
            <Modal
              handleInput={this.handleInput}
              productName={productName}
              id={productId}
              buttonText="ADD A QUESTION +"
              qText="About the Product: "
              type="question"
            />
          </span>
        </div>
      </div>
    );
  }
}

QAview.propTypes = {
  questions: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.object,
    PropTypes.array,
  ]).isRequired,
  postInput: PropTypes.func.isRequired,
  productName: PropTypes.string.isRequired,
  productId: PropTypes.number.isRequired,
  postFeedback: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired,
};

QAview.showDefault = {
  questionsView: false,
  modalView: false,
  openIndex: [0, 1, 2, 3],
  panelIndex: [0, 1, 2, 3],
  clickedId: [],
};

export default QAview;
