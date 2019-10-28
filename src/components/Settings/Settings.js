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
            <Link to="/change-password" className='changePassword'>
              <FontAwesomeIcon icon={ faKey } size='2x' />
              <p>Change Password</p>
            </Link>
            <Link to="/sign-out" className='signOut'>
              <FontAwesomeIcon icon={ faDoorOpen } size='2x' />
              <p>Sign Out</p>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Settings
