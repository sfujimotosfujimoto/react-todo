import * as redux from 'redux';
import thunk from 'redux-thunk';
import {searchTextReducer, showCompletedReducer, todosReducer} from '../reducers/reducers';

const reducer = redux.combineReducers({
  searchText: searchTextReducer,
  showCompleted: showCompletedReducer,
  todos: todosReducer
});


export const configureStore = (initialState={}) => {
  return redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
}

// export default configureStore;
// export default function configure() {
//   return redux.createStore(reducer, redux.compose(
//     window.devToolsExtension ? window.devToolsExtension() : f => f
//   ));
// }
