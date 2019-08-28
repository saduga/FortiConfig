import React, { Component } from 'react';
import PropTypes from 'prop-types';
const { dialog } = require('electron').remote;

export default class Login extends Component {
  static propTypes = {
    onLogin: PropTypes.func.isRequired,
  };

  state = {
    username: '',
  };

  handleLogin = () => {
    this.props.onLogin({
      username: this.state.username,
      loggedIn: true,
    });
  };

  showDialog = () => {
    dialog.showOpenDialog(
      {
        properties: ['openFile'],
      },
      function(files) {
        if (files !== undefined) {
          // handle files
        }
      },
    );
  };

  handleChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <h2>Login</h2>
        <input onChange={this.handleChange} type="text" value={this.state.username} />
        <button onClick={this.handleLogin}>Log In</button>
        <button onClick={this.showDialog}>Choose</button>
        <div id="holder">Drag your file here</div>
      </div>
    );
  }
}
