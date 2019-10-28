import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
// import { dayName, time } from './DayOfWeek'

class Report extends Component {
  render (props) {
    console.log(this.props)
    console.log(this.state)
    console.log(event.target.response)
    console.log(this.record)
    console.log(history.location)
    return (
      <div>
        <Link to='/practice-journal'>
          <Button>X</Button>
        </Link>
      </div>
      // [  <div className='timeReport'></div>
      //   <div className='dayOfWeekReport'>{dayName(record.date)}</div>
      //   <div className='day-month-yearReport'>{record.date}</div>
      //   <div className='hourReport'>at {time(record.date)}</div>
      //   <div className='howFeelReport'>{record.howFeel}</div>
      //   <div className='meditationQualitiesReport'>{record.meditationQualities}</div>
      //   <div className='otherNotesReport'>{record.otherNotes}</div>
      // ]
      // </div>
    )
  }
}

export default Report
