import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

import TodoApp from 'TodoApp';

$(document).foundation();

// app css
require('style!css!sass!app/styles/app.scss');

ReactDOM.render(
  <TodoApp/>
  ,
  document.getElementById('app')
);
