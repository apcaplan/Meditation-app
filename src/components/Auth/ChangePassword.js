import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { changePassword } from '../../api/auth'
import messages from './AutoDismissAlert/messages'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { backHomeIcon } from '../GoHome'

class ChangePassword extends Component {
  constructor () {
    super()

    this.state = {
      oldPassword: '',
      newPassword: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onChangePassword = event => {
    event.preventDefault()

    const { alert, history, user } = this.props

    changePassword(this.state, user)
      .then(() => alert({
        heading: 'Password changed successfully!',
        // message: messages.changePasswordSuccess,
        variant: 'success'
      }))
      .then(() => history.push('/settings'))
      .catch(error => {
        console.error(error)
        this.setState({ oldPassword: '', newPassword: '' })
        alert({
          heading: 'Change Password Failed',
          message: messages.changePasswordFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { oldPassword, newPassword } = this.state

    return (
      <div>
        <div className='backHomeButton'>
          {backHomeIcon()}
        </div>
        <div className="changePW-form row">
          <div className="form-wrapper2">
            <h3>Change Password</h3>
            <Form onSubmit={this.onChangePassword}>
              <Form.Group controlId="oldPassword">
                <Form.Label>Old password</Form.Label>
                <Form.Control
                  required
                  name="oldPassword"
                  value={oldPassword}
                  type="password"
                  placeholder="Enter old password"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="newPassword">
                <Form.Label>New Password</Form.Label>
                <Form.Control
                  required
                  name="newPassword"
                  value={newPassword}
                  type="password"
                  placeholder="Enter new password"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Button
                className='button-auth2'
                variant="primary"
                type="submit"
              >
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(ChangePassword)
