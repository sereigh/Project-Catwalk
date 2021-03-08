// import React, { useState } from 'react';
// import PropTypes from 'prop-types';

// import Feedback from './UserFeedback.jsx';
// import AnswersList from './AnswersList.jsx';
// import { sortAnswers } from './Utility.jsx'

// function QuestionsList(props) {

//   const { questions, postFeedback, active, toggleActive } = props;

//   // const [panel, setPanel] = useState(false);

//   // const togglePanel = (i) => {
//   //   if (panel === i) {
//   //     return setPanel(null);
//   //   }
//   //   return setPanel(i);
//   // };


//   // const view = ((questionsView) ? "question-all" : "question-default");

//   return (
//     <div className={view}>
//       <div>
//         {questions.map((question, i) => (
//           <div
//             className="view-question"
//             key={question.question_id}
//           >
//             <div
//               className="questionText"
//               onClick={() => toggleActive(i)}
//               role="button"
//               tabIndex={0}
//               onKeyPress={() => toggleActive(i)}
//             >
//               <strong>Q:  </strong>
//               {question.question_body}
//             </div>
//             <div className="questionFeedback">
//               <Feedback option={2} helpfulness={question.question_helpfulness} handler={() => postFeedback('questions', question.question_id, 'helpful')} />
//             </div>
//             {active.contains(i) && (
//             <AnswersList
//               answers={sortAnswers(questions[i].answers)}
//               // answersView={answersView}
//               postFeedback={postFeedback}
//               active={active}
//             />
// )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// QuestionsList.propTypes = {
//   questions: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool, PropTypes.object, PropTypes.array]).isRequired,
//   toggleActive: PropTypes.func.isRequired,
//   active: PropTypes.oneOfType([PropTypes.number]).isRequired,
//   // questionsView: PropTypes.bool.isRequired,
//   // answersView: PropTypes.bool.isRequired,
//   // toggleAccordian: PropTypes.func.isRequired,
//   postFeedback: PropTypes.func.isRequired
// }

// export default QuestionsList;
