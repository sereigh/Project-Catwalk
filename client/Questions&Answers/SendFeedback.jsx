import React from 'react';
import PropTypes from 'prop-types';

const options = ['Yes', 'Report'];
const handleFeedback = () => { console.log('click') }

class SendFeedback extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    const { option } = this.props;
    return (
      <div
        onClick={handleFeedback}
        onKeyPress={handleFeedback}
        role="button"
        tabIndex={0}
      >
        Helpful?
        {' '}
        <u>{options[option]}</u>
        (0)
        |
      </div>
    )
  }
}
// function SendFeedback(Component) {
//   const { handleClick } = props;
//   return class extends React.Component {
//     render() {
//       return (
//         <Component
//           onClick={handleClick}
//         />
//       );
//     }
//   }
// }

// export const Test = SendFeeback(Hello);

// export const MarkHelpful = ({ text, onClick }) => (
//   <div
//     onClick={onClick}
//     onKeyPress={onClick}
//     role="button"
//     tabIndex={0}
//   >
//     {text}
//   </div>
// );

// export const MessageFeedback = SendFeedback(MarkHelpful('Yes', { handleFeedback: () => console.log('clicked') }));

SendFeedback.propTypes = {
  option: PropTypes.number.isRequired,
}

export default SendFeedback;
