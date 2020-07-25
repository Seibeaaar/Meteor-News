import { combineReducers } from 'redux';
import mainNewsReducer from './mainNews';
import searchNewsReducer from './searchNews';

const rootReducer = combineReducers({
  main: mainNewsReducer,
  search: searchNewsReducer,
});

export default rootReducer;