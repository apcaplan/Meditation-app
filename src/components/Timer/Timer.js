import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
// import CountdownB from './CountdownB'
import SetTimer from './setTimer'

class Timer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      timerSet: 0,
      modal: false
    }
  }

  adjustTimer = input => {
    const { timerSet } = this.state
    if (input === 'incHours' && timerSet + 3600000 < 216000000) {
      this.setState({ timerSet: timerSet + 3600000 })
    } else if (input === 'decHours' && timerSet - 3600000 >= 0) {
      this.setState({ timerSet: timerSet - 3600000 })
    } else if (input === 'incMinutes' && timerSet + 60000 >= 0) {
      this.setState({ timerSet: timerSet + 60000 })
    } else if (input === 'decMinutes' && timerSet - 60000 >= 0) {
      this.setState({ timerSet: timerSet - 60000 })
    } else if (input === 'incSeconds' && timerSet + 1000 >= 0) {
      this.setState({ timerSet: timerSet + 1000 })
    } else if (input === 'decSeconds' && timerSet - 1000 >= 0) {
      this.setState({ timerSet: timerSet - 1000 })
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  saveTimerSet = () => {
    this.toggleModal()
    this.props.history.push({
      pathname: '/timer',
      state: { timerSet: this.state.timerSet }
    })
  }

  componentDidMount () {
    this.setState({ modal: true })
  }

  render () {
    return (
      <div className='welcome'>
        <h1 className='intro-text'>Meditation</h1>
        <div className='timer'>
          <SetTimer
            user={this.props.user}
            state={this.state}
            onHide={this.toggleModal}
            show={this.state.modal}
            adjustTimer={this.adjustTimer}
            saveTimerSet={this.saveTimerSet}
            handleChange={this.handleChange}
          />
        </div>
      </div>
    )
  }
}

export default withRouter(Timer)
