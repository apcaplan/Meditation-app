import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen, faCloud, faCog } from '@fortawesome/free-solid-svg-icons'

const Welcome = ({ user }) => (
  <div className='welcome'>
    <div className='intro-text'>
      <h1> Welcome, {user.email}! </h1>
    </div>
    <div className='page-body'>
    </div>
    <div className='footerBar'>
      <div className='journal'>
        <FontAwesomeIcon icon={ faBookOpen } size='2x' />
        <Link to="/practice-journal">Journal</Link>
      </div>
      <div className='meditation'>
        <FontAwesomeIcon icon={ faCloud } size='2x' />
        <Link to="/set-timer">Meditation</Link>
      </div>
      <div className='settings'>
        <FontAwesomeIcon icon={ faCog } size='2x' />
        <Link to="/settings">Settings</Link>
      </div>
    </div>
  </div>
)

export default Welcome
