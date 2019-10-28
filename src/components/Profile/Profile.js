import React, { Component } from 'react'
import SetTimer from '../Timer/setTimer'
import { Button } from 'react-bootstrap'

class Testing extends Component {
  constructor (props) {
    super(props)

    this.state = {
      modal: false,
      timerSet: 0
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
    console.log('handleChange!')
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  toggleModal = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  test = () => {
    console.log('howdy!')
    this.toggleModal()
    console.log(this.state)
  }

  saveTimerSet = () => {
    console.log(this.state)
    this.toggleModal()
  }

  componentDidMount () {
    this.setState({ modal: true })
  }

  render () {
    return (
      <div>
        <h1>Testing!</h1>
        <Button className='' onClick={this.test}>Modal</Button>
        <SetTimer
          user={this.props.user}
          state={this.state}
          onHide={this.toggleModal}
          show={this.state.modal}
          adjustTimer={this.adjustTimer}
          saveTimerSet={this.saveTimerSet}
        />
      </div>
    )
  }
}

export default Testing
