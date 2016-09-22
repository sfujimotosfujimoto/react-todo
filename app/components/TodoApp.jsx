import React from 'react';
import * as Redux from 'react-redux';
import * as actions from 'actions';
import TodoList from 'TodoList';

import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import TodoAPI from '../api/TodoAPI';



export class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // showCompleted: false,
      // searchText: '',
      // todos: TodoAPI.getTodos()
    }
  }

  onLogout(e) {
    let {dispatch} = this.props;
    e.preventDefault();

    dispatch(actions.startLogout());
  }

  render() {
    // let {todos, showCompleted, searchText} = this.state;
    // let filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

    return (
      <div>

        <div className="page-actions">
          <a href="#" onClick={this.onLogout.bind(this)}>Logout</a>
        </div>

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
export default Redux.connect()(TodoApp);
