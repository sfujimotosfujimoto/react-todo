
import * as $ from 'jquery';



class TodoAPI {
  static setTodos(todos) {
    if ($.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos));
      return todos;
    }
  }

  static getTodos() {
    let stringTodos = localStorage.getItem('todos');
    let todos = [];

    try {
      todos = JSON.parse(stringTodos);
    } catch (e) {

    }

    return $.isArray(todos) ? todos : [];
  }

  static filterTodos(todos, showCompleted, searchText) {
    let filteredTodos = todos;

    // filtered by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    })

    // filtered by searchText

    // sort Todos with non completed first

    return filteredTodos;
  }

};
export default TodoAPI;
