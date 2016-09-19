import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

import TodoApp from 'TodoApp';
import * as actions from './actions/actions';
import TodoAPI from './api/TodoAPI';

// import '../playground/firebase/index';


import {configureStore} from './store/configureStore';

const store = configureStore();

store.subscribe(() => {
  let state = store.getState();
  console.log('New state', state);

  TodoAPI.setTodos(state.todos);
});

const initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));


$(document).foundation();

// app css
require('style!css!sass!app/styles/app.scss');

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>

  ,
  document.getElementById('app')
);
