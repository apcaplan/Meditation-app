import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'

import AuthenticatedRoute from '../Auth/AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from '../Auth/AutoDismissAlert/AutoDismissAlert'
// import Header from '../Header/Header'
import SignUp from '../Auth/SignUp'
import SignIn from '../Auth/SignIn'
import SignOut from '../Auth/SignOut'
import ChangePassword from '../Auth/ChangePassword'
import Welcome from '../Home'
import Journal from '../Journal/Journal'
import Report from '../Journal/Report'
import Timer from '../Timer/Timer'
import Countdown from '../Timer/CountdownB'
import Settings from '../Settings/Settings'

class App extends Component {
  constructor () {
    super()

    this.state = {
      user: null,
      alerts: []
    }
  }

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  alert = ({ heading, message, variant }) => {
    this.setState({ alerts: [...this.state.alerts, { heading, message, variant }] })
  }

  render () {
    const { alerts, user } = this.state

    return (
      <Fragment>
        <main className="container">
          {alerts.map((alert, index) => (
            <AutoDismissAlert
              key={index}
              heading={alert.heading}
              variant={alert.variant}
              message={alert.message}
            />
          ))}
          <Route exact path='/' render={() => (
            <SignIn alert={this.alert} setUser={this.setUser} />
          )} />
          <Route path='/sign-up' render={() => (
            <SignUp alert={this.alert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut alert={this.alert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/welcome' render={() => (
            <Welcome user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/practice-journal' render={() => (
            <Journal alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/report' render={() => (
            <Report user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/set-timer' render={() => (
            <Timer alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/timer' render={() => (
            <Countdown alert={this.alert} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/settings' render={() => (
            <Settings user={user} />
          )} />
        </main>
      </Fragment>
    )
  }
}

export default App
