import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { hashHistory } from 'react-router';

import * as actions from './actions/actions';
import firebase from 'app/firebase/';
import router from 'app/router/';


firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(actions.login(user.uid));
    store.dispatch(actions.startAddTodos());
    hashHistory.push('/todos');
  } else {
    store.dispatch(actions.logout());
    hashHistory.push('/');
  }
})

import {configureStore} from './store/configureStore';
const store = configureStore();



$(document).foundation();

// app css
require('style!css!sass!app/styles/app.scss');



ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>

  ,
  document.getElementById('app')
);
