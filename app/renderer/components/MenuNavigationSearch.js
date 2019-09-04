import React, { Component } from 'react';

export default class MenuNavigationSearch extends Component {

    render() {
        return (
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
        )
    }
}