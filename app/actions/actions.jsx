import moment from 'moment';

import firebase, {firebaseRef} from 'app/firebase/';


export const setSearchText = (searchText) => ({
    type: 'SET_SEARCH_TEXT',
    searchText
})

export const toggleShowCompleted = () => ({
    type: 'TOGGLE_SHOW_COMPLETED'
})

export const addTodo = (todo) => ({
    type: 'ADD_TODO',
    todo
});

export const addTodos = (todos) => ({
    type: 'ADD_TODOS',
    todos
});

export const startAddTodo = (text) => {
  return (dispatch, getState) => {
    let todo = {
      text,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null
    };
    let todoRef = firebaseRef.child('todos').push(todo);

    return todoRef.then(() => {
      dispatch(addTodo({
        ...todo,
        id: todoRef.key
      }));
    })
  };
}

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id
})

// export const setSearchText = (searchText) => {
//   return {
//     type: 'SET_SEARCH_TEXT',
//     searchText
//   };
// };
