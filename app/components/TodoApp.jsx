import React from 'react';
import TodoList from 'TodoList';
import uuid from 'node-uuid';
import moment from 'moment';

import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import TodoAPI from '../api/TodoAPI';



class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // showCompleted: false,
      // searchText: '',
      // todos: TodoAPI.getTodos()
    }
  }

  render() {
    // let {todos, showCompleted, searchText} = this.state;
    // let filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    return (
      <div>
        <h1 className="page-title">Todo App</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch />
              <TodoList />
              <AddTodo />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default TodoApp ;
