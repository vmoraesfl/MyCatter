import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

const basePath = process.env.BASE_PATH || '/';

ReactDOM.render(
    <Router basename={ basePath }>
      <Switch>
        <Route path="/:product" children={<App/> } />
      </Switch>
  </ Router>,
  document.getElementById('root')
);

