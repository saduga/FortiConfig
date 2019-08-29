import React, { Component } from 'react';

export default class Menu extends Component {

  render() {

    const menuItems = [{ name: 'Dashboard', icon:'fa-dashboard' },
    { name: 'Security Fabric', icon: 'ftnt-security-fabric' },
    { name: 'FortiView', icon: 'fa-area-chart' },
    { name: 'Network', icon: 'fa-arrows' },
    { name: 'System', icon: 'fa-cog' },
    { name: 'Policy & Objects', icon: 'ftnt-policy-objects' },
    { name: 'Security Profiles', icon: 'fa-lock' },
    { name: 'VPN', icon: 'fa-laptop' },
    { name: 'User & Devices', icon: 'fa-user' },
    { name: 'WiFi & Switch Controller', icon: 'fa-wifi' },
    { name: 'Log & Report', icon: 'fa-bar-chart' },
    { name: 'Monitor', icon: 'fa-pie-chart' }];

    const menu = []
    for (const [index, value] of menuItems.entries()) {
      menu.push(<li className="level-0 ng-scope" key={index}>
        <div f-navbar-menu-item="::entry" className="ng-isolate-scope menu-item">
        </div>
        <div className="submenu ng-scope">
          <div className="submenu-label">
            <f-icon class='menu-item-icon' class={value.icon}></f-icon>
            <span className="ng-binding">{value.name}</span> <span className="spacer"></span>
            <f-icon class="fa-angle-right rotate-0"></f-icon>
          </div>
        </div>
      </li>)
    }

    return (
      <section id="navbar-view-section">
        <nav f-navbar="" className="ng-scope">
          <div className="loading-container ng-hide" ng-show="navbarCtrl.loading || navbarCtrl.loadingVdom">
            <f-icon class="fa-loading icon-lg"></f-icon>
          </div>

          <ul className="root">
            {menu}
          </ul>

          <div className="navigation-search">
                <div className="button-style bare" ng-click="navbarCtrl.searchInputVisible = true" ng-hide="navbarCtrl.searchInputVisible">
                    <f-icon class="fa-search"></f-icon>
                </div>
                <f-search-input input-placeholder="::&#39;What are you looking for?&#39; | lang" debounce="500" ng-show="navbarCtrl.searchInputVisible" model="navbarCtrl.searchModel" show-focus="navbarCtrl.searchInputVisible" on-empty-blur="navbarCtrl.searchInputVisible = false"
                    on-key-down="navbarCtrl.onSearchKeyDown($event)" class="ng-isolate-scope ng-hide">
                    <input type="text" placeholder="What are you looking for?" className="ng-pristine ng-untouched ng-valid ng-empty" />
                    <f-icon class="search-indicator fa-search" ng-class="ctrl.indicatorIcon"></f-icon>
                    <f-icon class="clear-search fa-dismiss ng-hide" ng-show="ctrl.model" ng-click="ctrl.clear()"></f-icon>
                </f-search-input>
            </div>
        </nav>

      </section>
    );
  }
}
