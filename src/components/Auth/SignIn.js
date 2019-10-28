import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'

import { signIn } from '../../api/auth'
import messages from './AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class SignIn extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSignIn = event => {
    event.preventDefault()

    const { alert, history, setUser } = this.props

    signIn(this.state)
      .then(res => setUser(res.data.user))
      .then(() => history.push('/welcome'))
      .catch(error => {
        console.error(error)
        this.setState({ email: '', password: '' })
        alert({
          heading: 'Sign In Failed',
          message: messages.signInFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const { email, password } = this.state

    return (
      <div className="signIn wrapper row">
        <div className="form-wrapper">
          <h3>Sign In</h3>
          <Form className='signIn-form' onSubmit={this.onSignIn}>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                type="email"
                name="email"
                value={email}
                placeholder="Enter email"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                name="password"
                value={password}
                type="password"
                placeholder="Enter password"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button
              className='button-auth'
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
          </Form>
          <p>No account? Sign up <Link style={{ color: '#007BFF' }} to="/sign-up">here</Link>!</p>
        </div>
      </div>
    )
  }
}

export default withRouter(SignIn)
