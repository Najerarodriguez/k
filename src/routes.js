import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import NotFoundPage from './containers/NotFoundPage.js';
import LoginPage from './containers/LoginPage';
import FormPage from './containers/FormPage';
import TablePage from './containers/TablePage';
import Dashboard from './containers/DashboardPage';
/*
import login from './user/login';
import register from  './user/register';
import perfiledit from './user/perfil-edit';
import perfileconomic from './user/perfil-economic';
import start from './test-learning/star';
import meetup from './meetup/meetup';
import forum from './forum/forum';
import real from './statistics/real';
import projected from './statistics/projected';
import reportlearning from './statistics/report-learning';
import faq from './FAQ/faq';
import reward from './reward/reward';
import opensource from './project/opensource';
import changelle from './project/challenge';
import projectreward from './project/reward';
*/

export default (
  <Route>
    <Route path="login" component={LoginPage}/>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard}/>
      <Route path="dashboard" component={Dashboard}/>
      <Route path="form" component={FormPage}/>
      <Route path="table" component={TablePage}/>
      <Route path="*" component={NotFoundPage}/>
    </Route>
  </Route>
);
