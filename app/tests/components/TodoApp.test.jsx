import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import expect from 'expect';
import $ from 'jQuery';
import TestUtils from 'react-addons-test-utils';

import {configureStore} from '../../store/configureStore';

import TodoList from 'TodoList';
import {TodoApp} from 'TodoApp';

describe('TodoApp', () =>{
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should render todo list', () => {
    let store = configureStore();
    let provider = TestUtils.renderIntoDocument(
      <Provider store={store}>
        <TodoApp />
      </Provider>
    );

    let todoApp = TestUtils.scryRenderedComponentsWithType(provider, TodoApp)[0];
    let todoList = TestUtils.scryRenderedComponentsWithType(todoApp, TodoList);

    expect(todoList.length).toEqual(1);
  });

});
