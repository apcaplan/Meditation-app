import React, { Component } from 'react'

import SurveyAfterPractice from './NotesSurveyModal'

import sound from './clock-chimes-daniel_simon.mp3'
import { recordPractice } from '../../api/records'
import messages from '../Auth/AutoDismissAlert/messages'
import { withRouter } from 'react-router'
import { backHomeIcon } from '../GoHome'

class CountdownB extends Component {
  constructor (props) {
    super(props)

    this.state = {
      timerOn: false,
      timerStart: this.props.location.state.timerSet,
      timerTime: 0,
      timer: 0,
      date: null,
      howFeel: '',
      meditationQualities: '',
      otherNotes: '',
      modalShow: false
    }
  }

  handleChange = event => {
    console.log('handleChange!')
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  toggleModal = () => {
    this.setState({
      modalShow: !this.state.modalShow
    })
  }

  setTimer = (num) => {
    this.setState({
      timerStart: num
    })
  }

  startTimer = () => {
    if (this.state.timerTime > 0 && this.state.timerStart === this.state.timerTime) {
      this.setState({ date: new Date() })
    }
    this.setState({
      timerOn: true,
      timerTime: this.state.timerStart
    })

    this.timer = setInterval(() => {
      const newTime = this.state.timerTime - 10
      if (newTime >= 0) {
        this.setState({
          timerTime: newTime
        })
      } else {
        document.getElementById('alarm').play()
        clearInterval(this.timer)
        this.setState({ timerOn: false })
      }
    }, 10)
  }

stopTimer = () => {
  clearInterval(this.timer)
  this.setState({ timerOn: false })
}

discardTimer = () => {
  if (this.state.timerOn === false) {
    this.setState({
      timerTime: this.state.timerStart
    })
  }
}

finishTimer = (props) => {
  const { user } = this.props
  this.setState({ modalShow: true })
  console.log(props, user)
}

sendSummary = () => {
  const { alert, history, user } = this.props
  recordPractice(this.state, user)
    .then(() => alert({
      heading: 'Successfully logged your practice!',
      // message: messages.submitSurveySuccess,
      variant: 'success'
    }))
    .then(this.toggleModal())
    .then(() => history.push('/welcome'))
    .catch(error => {
      console.error(error)
      alert({
        heading: 'Failed to submit Practice Reflection',
        message: messages.submitSurvey,
        variant: 'danger'
      })
    })
}

onSubmitSurvey = event => {
  event.preventDefault()
  // Set time to be recorded:
  // --timerStart if completed the whole set time
  // --timerTime if stopped early
  if (this.state.timerTime === 0) {
    this.setState({ timer: this.state.timerStart
    }, () => {
      this.sendSummary()
    })
  } else {
    this.setState({ timer: (this.state.timerStart - this.state.timerTime)
    }, () => {
      this.sendSummary()
    })
  }
}

componentDidMount () {
  this.setState({
    timerTime: this.state.timerStart
  })
}

render () {
  const { timerTime, timerStart, timerOn } = this.state
  const seconds = ('0' + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2)
  const minutes = ('0' + Math.floor((timerTime / 60000) % 60)).slice(-2)
  const hours = ('0' + Math.floor((timerTime / 3600000) % 60)).slice(-2)

  return (
    <div className='welcome'>
      { backHomeIcon() }
      <h1 className='intro-text'>Meditation</h1>
      <div className='timer'>
        <div className='Timer'>
          <div className="Countdown-display">
            <div className="Countdown-time">
              { hours } : { minutes } : { seconds }
            </div>
          </div>

          {timerOn === false && (timerStart === 0 || timerTime === timerStart) && (
            <button className="Button-start" onClick={this.startTimer}>Start</button>
          )}

          {timerOn === true && timerTime >= 1000 && (
            <button className="Button-stop" onClick={this.stopTimer}>Stop</button>
          )}

          <div className='Buttons-timer'>
            {timerOn === false &&
             (timerStart !== 0 && timerStart !== timerTime && timerTime !== 0) && (
              <button className="Button-start" onClick={this.startTimer}>Resume</button>
            )}

            <div className="Buttons-DandF">
              {(timerOn === false || timerTime < 1000) &&
               (timerStart !== timerTime && timerStart > 0) && (
                <button className="Button-discard" onClick={this.discardTimer}>Discard Session</button>
              )}

              {(timerOn === false || timerTime < 1000) &&
               (timerStart !== timerTime && timerStart > 0) && (
                <button className="Button-finish" onClick={this.finishTimer}>Finish</button>
              )}
            </div>
          </div>
          <audio id="alarm" src={ sound } preload="auto" />

          <SurveyAfterPractice
            state={this.state}
            user={this.props.user}
            handleChange={this.handleChange}
            show={ this.state.modalShow }
            onHide={this.toggleModal}
            onSubmitSurvey={this.onSubmitSurvey}
          />
        </div>
      </div>
    </div>
  )
}
}

export default withRouter(CountdownB)
