import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="fortinet-grid-icon">
          <f-icon class="ftnt-fortinet-grid icon-xxl" />
        </div>
        <div className="platform">
          <div>{this.props.header.defaultUser}</div>
          <div className="hostname small-hide">
            <span
              f-object-tooltip=""
              className="tooltip-hint"
              style={{ display: 'inline-block' }}>
              {this.props.header.deviceName}
            </span>
          </div>
        </div>
        <div className="expand">
          <button
            type="button"
            className="bare"
            ng-click="structure.toggleResponsiveMenu()"
            title="Show menu">
            <f-icon class="ftnt-hamburger icon-lg" />
          </button>
        </div>
        
        <div className="expandable">
          <button type="button" className="bare" f-pop-up-menu-toggle="notificationPopUpMenu">
            <div className="flex-button-content">
              <div className="flex-button-content">
                <f-icon class="fa-notification icon-lg" />
              </div>
              <div className="caret-container">
                <span className="caret-down" />
              </div>
            </div>
          </button>
          <button type="button" className="bare" f-pop-up-menu-toggle="helpPopUpMenu">
            <div className="flex-button-content">
              <div className="flex-button-content">
                <f-icon class="ftnt-help-o icon-lg" />
              </div>
              <div className="caret-container">
                <span className="caret-down" />
              </div>
            </div>
          </button>
          <button type="button" className="bare" ng-click="cliConsole()">
            <f-icon class="fa-terminal icon-lg" />
          </button>
          <button type="button" className="bare" ng-click="openFullscreen()">
            <f-icon class="ftnt-full-screen icon-lg" />
          </button>
          <button type="button" className="bare" f-pop-up-menu-toggle="adminPopUpMenu">
            <div className="flex-button-content">
              <div className="flex-button-content">
                <div className="small-hide">{this.props.header.defaultUser}</div>
                <f-icon class="ftnt-user-o icon-lg small-show" />
              </div>
              <div className="caret-container">
                <span className="caret-down" />
              </div>
            </div>
          </button>
        </div>
        
      </header>
    );
  }
}

function mapStateToProps(state){
  return {
    header: state.header
  }
}

export default connect(mapStateToProps)(Header)