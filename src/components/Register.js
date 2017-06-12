import React, { Component } from 'react'
import { auth } from '../helpers/auth'

function setErrorMsg(error) {
  return {
    registerError: error.message
  }
}

export default class Register extends Component {
  state = { registerError: null }
  handleSubmit = (e) => {
    e.preventDefault()
    auth(this.email.value, this.pw.value)
      .catch(e => this.setState(setErrorMsg(e)))
  }
  render () {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="large-4 columns">
              <label>Email</label>
              <input ref={(email) => this.email = email} placeholder="Email"/>
            </div>
          </div>
          <div className="row">
            <div className="large-4 columns">
              <label>Password</label>
              <input type="password"  placeholder="Password" ref={(pw) => this.pw = pw} />
            </div>
          </div>
          {
            this.state.registerError &&
            <div className="alert alert-danger" role="alert">
              <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
              <span className="sr-only">Error:</span>
              &nbsp;{this.state.registerError}
            </div>
          }
          <button type="submit">Register</button>
        </form>
      </div>
    )
  }
}
