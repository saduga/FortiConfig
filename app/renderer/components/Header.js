import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="fortinet-grid-icon">
          <f-icon class="ftnt-fortinet-grid icon-xxl" />
        </div>
        <div className="platform">
          <div>FortiGate VM64-KVM</div>
          <div className="hostname small-hide">
            <span
              f-object-tooltip=""
              mkey="FGVM010000137260"
              datasource="csfFortiGates"
              className="tooltip-hint"
              tooltip-id="_1jgd4ksvd"
              style={{ display: 'inline-block' }}>
              chameleon-kvm29
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
                <div className="small-hide">admin</div>
                <f-icon class="ftnt-user-o icon-lg small-show" />
              </div>
              <div className="caret-container">
                <span className="caret-down" />
              </div>
            </div>
          </button>
        </div>
        <div className="error-message-container">
          <div className="error-message">
            <f-icon class="fa-exclamation-triangle" />
          </div>
        </div>
      </header>
    );
  }
}
