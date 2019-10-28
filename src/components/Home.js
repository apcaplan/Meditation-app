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
      <Link to="/practice-journal" className='journal'>
        <FontAwesomeIcon icon={ faBookOpen } size='2x' />
        <p>Journal</p>
      </Link>
      <Link to="/set-timer" className='meditation'>
        <FontAwesomeIcon icon={ faCloud } size='2x' />
        <p>Meditation</p>
      </Link>
      <Link to="/settings" className='settings'>
        <FontAwesomeIcon icon={ faCog } size='2x' />
        <p>Settings</p>
      </Link>
    </div>
  </div>
)

export default Welcome
