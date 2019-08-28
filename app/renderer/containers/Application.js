import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import userActions from '../actions/user';
import parseConfig from '../helpers/configParser';
const { dialog } = require('electron').remote;

class Application extends Component {
  constructor(props) {
    super(props);
    this.showDialog = this.showDialog.bind(this);
  }

  showDialog = () => {
    const self = this.props;
    dialog.showOpenDialog(
      {
        properties: ['openFile'],
      },
      function(file) {
        if (file !== undefined) {
          parseConfig(file[0]).then(function(result) {
            var sections = result;
          });
          self.onLogin(file);
        }
      },
    );
  };

  render() {
    return (
      <div>
        <button onClick={this.showDialog}>Choose</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  const user = bindActionCreators(userActions, dispatch);
  return {
    onLogin: (data) => {
      dispatch(push('/start'));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Application);
