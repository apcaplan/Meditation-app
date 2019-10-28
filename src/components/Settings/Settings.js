import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faKey, faDoorOpen } from '@fortawesome/free-solid-svg-icons'
import { backHomeIcon } from '../GoHome'

class Settings extends Component {
  constructor () {
    super()

    this.state = {
      timerTime: 0,
      modalShow: false
    }
  }

  toggleModal = () => {
    this.setState({
      modalShow: !this.state.modalShow
    })
  }

  onSubmitSetTimer = () => {
    console.log('hi!')
  }

  render () {
    return (
      <div>
        <div className='backHomeButton'>
          {backHomeIcon()}
        </div>
        <div className='welcome'>
          <h1 className='intro-text'>Settings</h1>
          <div className="settingsMenu">
            <div className='changePassword'>
              <FontAwesomeIcon icon={ faKey } size='2x' />
              <Link to="/change-password">Change Password</Link>
            </div>
            <div className='signOut'>
              <FontAwesomeIcon icon={ faDoorOpen } size='2x' />
              <Link to="/sign-out">Sign Out</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Settings
