import * as $ from 'jquery';

class TodoAPI {
  static filterTodos(todos, showCompleted, searchText) {
    let filteredTodos = todos;

    // filtered by showCompleted
    filteredTodos = filteredTodos.filter((todo) => {
      return !todo.completed || showCompleted;
    });

    filteredTodos.sort((a, b) => {
      if(!a.completed && b.completed) {
        return -1;
      } else if(a.completed && !b.completed) {
        return 1;
      } else {
        return 0;
      }
    });

    // filtered by searchText
    filteredTodos = filteredTodos.filter((todo) => {
      let text = todo.text.toLowerCase();
      return searchText.length === 0 || text.indexOf(searchText) > -1;
    });


    // sort Todos with non completed first

    return filteredTodos;
  }

};
export default TodoAPI;
