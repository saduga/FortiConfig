import React, { Component } from 'react';

class SubMenuItem extends Component {
    render() {

        if(this.props.isGroup) {
        return (
            
            <li className="level-1 has-children ui-sortable-handle">
                <div f-navbar-menu-item="::entry" className="ng-isolate-scope menu-item"></div>
                <div className="submenu ng-scope">
                    <div className="submenu-label">
                        <f-icon class="menu-item-icon"></f-icon><span className="ng-binding">{this.props.name} 2</span>
                    </div>
                    <f-navbar-menu menu="::entry" level="::navbarMenuCtrl.level + 1" class="ng-isolate-scope">
                        <ul ui-sortable="navbarMenuCtrl.menu.sortableOptions" f-vertical-collapse="::navbarMenuCtrl.level === 1" className="ng-pristine ng-untouched ng-valid ng-isolate-scope ui-sortable ui-sortable-disabled ng-not-empty">
                            
                        {this.props.items.map((value, index) => {
                                return (
                                    <li className="level-2 ui-sortable-handle">
                                <div f-navbar-menu-item="::entry" className="ng-isolate-scope menu-item">
                                    <a href='' className="ng-scope">
                                        <div className="menu-item-icons">
                                            <f-icon class="menu-item-icon" ng-class="menuItemCtrl.menuItemIcon"></f-icon>
                                        </div>
                                        <span className="ng-binding">{value.name}</span> </a>
                                    <f-icon class="favorite-icon ng-scope fa-star-o" title="Add Favorite"></f-icon>
                                </div>
                            </li>
                                )
                            })}

                            

                        </ul>
                    </f-navbar-menu>
                </div>
            </li>)
        }
        return(
            <li className="level-1 ui-sortable-handle">
                <div f-navbar-menu-item="::entry" className="ng-isolate-scope menu-item">
                    <a className="ng-scope" href="#">
                        <div className="menu-item-icons">
                            <f-icon class="menu-item-icon"></f-icon>
                        </div>
                        <span className="ng-binding">{this.props.name}</span>
                    </a>
                    <f-icon class="favorite-icon ng-scope fa-star-o" title="Add Favorite" >
                    </f-icon>
                </div>
            </li>
        )
    }
}

export default class MenuItem extends Component {

    handleClick = (id) => {
        store.dispatch({
            type: 'MENU_SELECT',
            payload: id,
        });
    };

    render() {
        return (
            <li className={"level-0 ng-scope " + (this.props.isSelected ? 'expanded-menu' : '')} onClick={() => this.handleClick(this.props.index)} >
                <div f-navbar-menu-item="::entry" className="ng-isolate-scope menu-item">
                </div>
                <div className="submenu ng-scope">
                    <div className="submenu-label">
                        <f-icon class='menu-item-icon' class={this.props.value.icon}></f-icon>
                        <span className="ng-binding">{this.props.value.name}</span> <span className="spacer"></span>
                        <f-icon class={"fa-angle-right " + (this.props.isSelected ? 'rotate-90' : 'rotate-0 ')}></f-icon>
                    </div>
                    <f-navbar-menu class="ng-isolate-scope">
                        <ul f-vertical-collapse="::navbarMenuCtrl.level === 1"
                            className={"ng-pristine ng-untouched ng-valid ng-isolate-scope ui-sortable ui-sortable-disabled ng-not-empty " + (this.props.isSelected ? '' : 'ng-hide')}>

                            {this.props.value.subMenu.map((value, index) => {
                                return <SubMenuItem key={index} name={value.name} items={value.items} isGroup={value.isGroup}/>
                            })}

                        </ul>
                    </f-navbar-menu>
                </div>
            </li>
        );
    }
}