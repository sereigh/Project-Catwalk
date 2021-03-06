import React from 'react';
import PropTypes from 'prop-types';

function QuestionsMenu({ handleSubmit, toggleView, buttonView }) {

  if (buttonView) {
    return (
      <div className="questionsMenu">
        <span
          name="questions"
          className="toggleQuestions"
          onClick={toggleView()}
          role="button"
          tabIndex={0}
          onKeyPress={toggleView()}
        >
          MORE ANSWERED QUESTIONS
        </span>
        <span
          className="addQuestion"
          onClick={handleSubmit()}
          role="button"
          tabIndex={0}
          onKeyPress={handleSubmit()}
        >
          ADD A QUESTION +
        </span>
      </div>
    );
  }
  return (
    <div className="questionsMenu">
      <span
        className="addQuestion"
        onClick={handleSubmit()}
        role="button"
        tabIndex={0}
        onKeyPress={handleSubmit()}
      >
        ADD A QUESTION +
      </span>
    </div>
    );

}

QuestionsMenu.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  buttonView: PropTypes.bool.isRequired,
  toggleView: PropTypes.func.isRequired,
}

export default QuestionsMenu;