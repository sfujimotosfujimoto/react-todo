import expect from 'expect';
import * as actions from '../../actions/actions';
// var actions = require('../../actions/actions');

describe('Actions', () => {
  it('should generate searchText action', () => {
    let action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    };
    let res = actions.setSearchText(action.searchText);

    expect(res).toEqual(action);
  });

  it('should generate add todo action', () => {
    let action = {
      type: 'ADD_TODO',
      text: 'Thing to do'
    };

    let res = actions.addTodo(action.text);

    expect(res).toEqual(action);
  });

  it('should generate toggleShowCompleted action', () => {
    let action = {
      type: 'TOGGLE_SHOW_COMPLETED',
    };

    let res = actions.toggleShowCompleted();

    expect(res).toEqual(action);
  });

  it('should generate toggleTodo action', () => {
    let action = {
      type: 'TOGGLE_TODO',
      id: '123'
    };

    let res = actions.toggleTodo(action.id);

    expect(res).toEqual(action);
  })
});
