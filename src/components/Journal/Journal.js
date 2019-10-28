import React, { Component } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { time, dayName, monthName, day, year, timerTimeConversion } from './DateTimeConversions'
import { backHomeIcon } from '../GoHome'
import { showHistory, destroy } from '../../api/records'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faPencilAlt } from '@fortawesome/free-solid-svg-icons'

class Journal extends Component {
  constructor (props) {
    super(props)

    this.state = {
      records: [],
      error: null
    }
  }

  display = () => {
    showHistory(this.props.user)
      .then(res => this.setState({ records: res.data.records }))
      .catch(err => this.setState({ error: err.stack }))
  }

  componentDidMount () {
    this.display()
  }

  render () {
    const { records, error } = this.state

    // Conditional for presenting note blurb in Journal summary

    // const noteBlurb = (params) => {
    //   if (params.howFeel) {
    //     return <p>{params.howFeel}</p>
    //   }
    //   if (params.meditationQualities) {
    //     return <p>{params.meditationQualities}</p>
    //   }
    //   if (params.otherNotes) {
    //     return <p>{params.otherNotes}</p>
    //   }
    // }

    const noteBlurbA = (params) => {
      if (params.howFeel) {
        return <p>{params.howFeel}</p>
      }
    }

    const noteBlurbB = (params) => {
      if (params.meditationQualities) {
        return <p>{params.meditationQualities}</p>
      }
    }

    const noteBlurbC = (params) => {
      if (params.otherNotes) {
        return <p>{params.otherNotes}</p>
      }
    }

    // const editIcon = (params) => {
    //   if (params.howFeel || params.meditationQualities || params.otherNotes) {
    //     return <Link to="/welcome">
    //       <FontAwesomeIcon icon={ faPencilAlt } />
    //     </Link>
    //   }
    // }

    const journalList = records.length ? (
      records.map(record => {
        return (
          <Container className='' key={record.id}>
            <Row className='record-content'>
              <Col md='2' className='text-center practiceDate'>
                <p>{dayName(record.date)}</p>
                <p>{day(record.date)}</p>
                <p>{monthName(record.date)} {year(record.date)}</p>
              </Col>
              <Col sm='2'>
                <p className='practiceTime'>{time(record.date)}</p>
              </Col>
              <Col md lg='auto'>
                <div className='practiceNotes'>
                  {noteBlurbA(record)}
                  {noteBlurbB(record)}
                  {noteBlurbC(record)}
                </div>
              </Col>
              <Col md='3'>
                <p className='practiceLength'>
                  {timerTimeConversion(record.timer)}
                </p>
              </Col>
              <Col sm='1'>
                <Link to={`/records/${record.id}/edit-record`}>
                  <FontAwesomeIcon icon={ faPencilAlt } />
                </Link>
                <Link to="/welcome">
                  <FontAwesomeIcon icon={ faTrash } onClick={() => {
                    destroy(record.id, this.props.user)
                      .then(this.display())
                  }}
                  />
                </Link>
              </Col>
            </Row>
          </Container>
        )
      })
    ) : (
      <div className='center'>No entries yet. Practice to create one!</div>
    )

    if (error) {
      return <p className='recordless'>ERROR: { error }</p>
    }

    return (
      <div className='container welcome'>
        {backHomeIcon()}
        <h1 className='journalHeading'>Practice Journal</h1>
        {journalList}
      </div>
    )
  }
}

export default Journal
