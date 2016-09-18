import * as redux from 'redux';
import {searchTextReducer, showCompletedReducer, todosReducer} from '../reducers/reducers';

const reducer = redux.combineReducers({
  searchText: searchTextReducer,
  showCompleted: showCompletedReducer,
  todos: todosReducer
});


export default function configure() {
  return redux.createStore(reducer, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
}
