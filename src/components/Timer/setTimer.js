import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'

class SetTimer extends Component {
  render () {
    const { onHide, adjustTimer, saveTimerSet } = this.props
    const { timerSet } = this.props.state
    const seconds = ('0' + (Math.floor((timerSet / 1000) % 60) % 60)).slice(-2)
    const minutes = ('0' + Math.floor((timerSet / 60000) % 60)).slice(-2)
    const hours = ('0' + Math.floor((timerSet / 3600000) % 60)).slice(-2)

    return (
      <Modal
        {...this.props}
        size='lg'
        area-labelledby='contained-modal-title-vcenter'
        centered
        onHide={onHide}
      >
        <Modal.Header>
          <Modal.Title id='contained-modal-title-vcenter'>
          Set the timer for your practice
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='setTimer-container'>
          <div className='setTimer-label'>Hours : Minutes : Seconds</div>
          <div className='setTimer-display'>
            <button onClick={() => adjustTimer('incHours')}><FontAwesomeIcon icon={ faAngleUp } />  </button>
            <button onClick={() => adjustTimer('incMinutes')}><FontAwesomeIcon icon={ faAngleUp } />  </button>
            <button onClick={() => adjustTimer('incSeconds')}><FontAwesomeIcon icon={ faAngleUp } />  </button>

            <div className='setTimer-time'>
              { hours } : { minutes } : { seconds }
            </div>

            <button onClick={() => adjustTimer('decHours')}><FontAwesomeIcon icon={ faAngleDown } />  </button>
            <button onClick={() => adjustTimer('decMinutes')}><FontAwesomeIcon icon={ faAngleDown } />  </button>
            <button onClick={() => adjustTimer('decSeconds')}><FontAwesomeIcon icon={ faAngleDown } />  </button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className='button-auth2'
            color='primary'
            type='submit'
            onClick={saveTimerSet}
          >
            Set Timer
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}
export default withRouter(SetTimer)
