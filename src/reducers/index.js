import { combineReducers } from 'redux';
import shoppingListItems from './sampleReducer';

const rootReducer = combineReducers({
  // short hand property names shppingListItems
  // shoppingListItems: shoppingListItems
  shoppingListItems
});

export default rootReducer;
