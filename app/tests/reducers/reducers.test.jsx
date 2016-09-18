import expect from 'expect';
import df from 'deep-freeze-strict'; // checks if state isn't changed
import * as reducers from '../../reducers/reducers';

describe('Reducers', () => {
  describe('searchTextReducer', () => {
    it('shold set searchtext', () => {
      let action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'dog'
      };

      let res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });
  describe('showCompletedReducer', () => {
    it('shold toggleShowCompleted', () => {
      let action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };

      let res = reducers.showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it('shold add new todo', () => {
      let action = {
        type: 'ADD_TODO',
        text: 'walk the dog'
      };

      let res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });


    it('shold toggle todo', () => {
      let todos = [
        {
          id: '123',
          text: 'Something',
          completed: true,
          createdAt: 123,
          completedAt: 125
        }
      ];
      let action = {
        type: 'TOGGLE_TODO',
        id: '123'
      };

      let res = reducers.todosReducer(df(todos), df(action));

      expect(res[0].completed).toEqual(false);
      expect(res[0].completedAt).toEqual(undefined);
    });
  });

  it('should add existing todos', () => {
    let todos =[{
      id: '111',
      text: 'anything',
      completed: false,
      completedAt: undefined,
      createdAt: 33000
    }];
    let action = {
      type: 'ADD_TODOS',
      todos
    };

    let res = reducers.todosReducer(df([]), df(action));

    expect(res.length).toEqual(1);
    expect(res[0]).toEqual(todos[0]);
  })


});
