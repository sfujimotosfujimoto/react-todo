export const setSearchText = (searchText) => ({
    type: 'SET_SEARCH_TEXT',
    searchText
})

export const toggleShowCompleted = () => ({
    type: 'TOGGLE_SHOW_COMPLETED'
})

export const addTodo = (text) => ({
    type: 'ADD_TODO',
    text
});

export const addTodos = (todos) => ({
    type: 'ADD_TODOS',
    todos
});

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
