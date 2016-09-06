import React from 'react';
import Todo from 'Todo';

class TodoList extends React.Component {
  render() {
    let {todos} = this.props;
    let renderTodos = () => {
      return todos.map((todo) => {
        return (
          <Todo key={todo.id} {...todo}/>
        );
      });
    }
    return (
      <div>
        {renderTodos()}
      </div>
    );
  }
}
export default TodoList;
