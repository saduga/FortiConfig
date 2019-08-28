import React from 'react';
import { Switch, Route } from 'react-router';

import LoggedInPage from './containers/LoggedInPage';
import Application from './containers/Application';
import StartPage from './containers/StartPage';

export default (
  <Switch>
    <Route exact path="/" component={Application} />
    <Route exact path="/loggedin" component={LoggedInPage} />
    <Route exact path="/start" component={StartPage} />
  </Switch>
);
