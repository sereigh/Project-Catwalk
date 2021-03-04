import React from 'react';

class WriteReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }

    this.handleModal = this.handleModal.bind(this);
  }

  handleModal() {
    const {showModal} = this.state;

    if (!showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }

    this.setState({
      showModal: !showModal
    })
  }

  render() {
    const {showModal} = this.state;

    return (
      <>
        <button type='button' onClick={this.handleModal}>Add A Review +</button>
        {
          showModal && (
            <>
              <form className='modal submit-form'>
                <input type='text' />
              </form>
              <div
                role='button'
                tabIndex={0}
                className='overlay'
                onClick={this.handleModal}
                onKeyPress={this.handleModal}
              />
            </>
          )
        }
      </>
    )
  }
}

export default WriteReview;