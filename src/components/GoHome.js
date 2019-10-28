import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft } from '@fortawesome/free-solid-svg-icons'

export const backHomeIcon = () => {
  return (
    <div className="backHomeIcon">
      <Link to="/welcome">
        <FontAwesomeIcon icon={ faChevronCircleLeft } color='#6c757d' size='2x' />
      </Link>
    </div>
  )
}
