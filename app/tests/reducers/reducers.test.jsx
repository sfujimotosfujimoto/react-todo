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


});
