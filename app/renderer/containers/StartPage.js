import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import Header from '../components/Header';
import Menu from '../components/Menu';

class StartPage extends Component {
  render() {
    return (
      <div style={{display: 'contents'}}>
        <Header />
        <Menu />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (data) => {},
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StartPage);
