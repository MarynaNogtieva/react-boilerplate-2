
import React from 'react';

import createHistory from 'history/createBrowserHistory';


import HelpPage from '../components/HelpPage';
import DashBoardPage from '../components/DashBoardPage';
import NotFoundPage from '../components/NotFoundPage';
import  LoginPage from '../components/LoginPage';
import { Router, Route, Switch }
 from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

 export const history = createHistory();
 const AppRouter = () => (
  <Router history={history}>
  <div>
   <Switch>
     <PublicRoute path="/" component={ LoginPage } exact={true}/>
     <PrivateRoute path="/dashboard" component={ DashBoardPage } /> 
     <Route component={ NotFoundPage } />
   </Switch>
   </div>
 </Router>
);

export default AppRouter;