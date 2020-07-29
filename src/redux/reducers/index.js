import { combineReducers } from 'redux';
import mainNewsReducer from './mainNews';
import searchNewsReducer from './searchNews';
import loadingReducer from './loading';

const rootReducer = combineReducers({
  main: mainNewsReducer,
  search: searchNewsReducer,
  loading: loadingReducer,
});

export default rootReducer;