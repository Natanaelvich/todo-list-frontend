import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Main from './pages/main';
import Todo from './pages/todo';
import About from './pages/about';
import TodoForm from './pages/todo/form/index';

export default function src() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/todo" component={Todo} />
      <Route path="/register" component={TodoForm} />
      <Route path="/about" component={About} />
      <Redirect from="*" to="/" />
    </Switch>
  );
}
