import React from 'react';
import ReactDOM from 'react-dom';
import * as redux from 'redux';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

import TodoApp from 'TodoApp';

import * as actions from './actions/actions';
import configureStore from './store/configureStore';

const store = configureStore();

store.subscribe(() => {
  console.log('New state', store.getState());
});

store.dispatch(actions.addTodo('Clean the yard'));
store.dispatch(actions.setSearchText('yard'));
store.dispatch(actions.toggleShowCompleted());

$(document).foundation();

// app css
require('style!css!sass!app/styles/app.scss');

ReactDOM.render(
  <TodoApp/>
  ,
  document.getElementById('app')
);
