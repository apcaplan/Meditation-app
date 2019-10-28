import React, { Component } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { withRouter } from 'react-router-dom'
// import { recordPractice } from '../../api/records'
// import messages from '../Auth/AutoDismissAlert/messages'

class SurveyAfterPractice extends Component {
  render () {
    const { onHide, howFeel, meditationQualities, otherNotes, handleChange, onSubmitSurvey } = this.props

    return (
      <Modal
        {...this.props}
        size='lg'
        area-labelledby='contained-modal-title-vcenter'
        centered
        onHide={onHide}
      >
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>
          Now that you&apos;ve completed the practice...
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="howFeel">
              <Form.Label>How do you feel?</Form.Label>
              <Form.Control
                as="textarea"
                rows="2"
                name="howFeel"
                value={howFeel}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="meditationQualities">
              <Form.Label>What were some general qualities of the meditation?</Form.Label>
              <Form.Control
                as="textarea"
                rows="2"
                name="meditationQualities"
                value={meditationQualities}
                onChange={handleChange}
              />
              <Form.Text className="text-muted">
                For example: &rdquo;inert + unclear&rdquo;, &rdquo;agitated mind&rdquo;, &rdquo;calm + luminous&rdquo;, &ldquo;focused&rdquo;
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="otherNotes">
              <Form.Label>Other notes?</Form.Label>
              <Form.Control
                as="textarea"
                rows="4"
                name="otherNotes"
                value={otherNotes}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className='button-auth2'
            color="primary"
            type="submit"
            onClick={onSubmitSurvey}
          >
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default withRouter(SurveyAfterPractice)
