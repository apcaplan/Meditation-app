import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'

class SetTimer extends Component {
  adjustTimer = input => {
    const { timerTime } = this.props.state
    if (input === 'incHours' && timerTime + 3600000 < 216000000) {
      this.setState({ timerTime: timerTime + 3600000 })
    } else if (input === 'decHours' && timerTime - 3600000 >= 0) {
      this.setState({ timerTime: timerTime - 3600000 })
    } else if (input === 'incMinutes' && timerTime + 60000 >= 0) {
      this.setState({ timerTime: timerTime + 60000 })
    } else if (input === 'decMinutes' && timerTime - 60000 >= 0) {
      this.setState({ timerTime: timerTime - 60000 })
    } else if (input === 'incSeconds' && timerTime + 1000 >= 0) {
      this.setState({ timerTime: timerTime + 1000 })
    } else if (input === 'decSeconds' && timerTime - 1000 >= 0) {
      this.setState({ timerTime: timerTime - 1000 })
    }
  }

  render () {
    const { onHide, onSubmitSetTimer } = this.props
    const { timerTime } = this.props.state
    const seconds = ('0' + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2)
    const minutes = ('0' + Math.floor((timerTime / 60000) % 60)).slice(-2)
    const hours = ('0' + Math.floor((timerTime / 3600000) % 60)).slice(-2)

    return (
      <Modal
        {...this.props}
        size='md'
        area-labelledby='contained-modal-title-vcenter'
        centered
        onHide={ onHide }
      >
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>
          Set timer
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='Countdown-header'>Countdown Timer</div>
          <div className='Countdown-label'>Hours : Minutes : Seconds</div>
          <div className='Countdown-display'>
            <button onClick={() => this.adjustTimer('incHours')}><FontAwesomeIcon icon={ faAngleUp } /></button>
            <button onClick={() => this.adjustTimer('incMinutes')}><FontAwesomeIcon icon={ faAngleUp } /></button>
            <button onClick={() => this.adjustTimer('incSeconds')}><FontAwesomeIcon icon={ faAngleUp } /></button>

            <div className='Countdown-time'>
              { hours } : { minutes } : { seconds }
            </div>

            <button onClick={() => this.adjustTimer('decHours')}><FontAwesomeIcon icon={ faAngleDown } /></button>
            <button onClick={() => this.adjustTimer('decMinutes')}><FontAwesomeIcon icon={ faAngleDown } /></button>
            <button onClick={() => this.adjustTimer('decSeconds')}><FontAwesomeIcon icon={ faAngleDown } /></button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className='button-auth2'
            color='primary'
            type='submit'
            onClick={ onSubmitSetTimer }
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default SetTimer
