import { combineReducers } from 'redux';
import mainNewsReducer from './mainNews';
import loadingReducer from './loading';

const rootReducer = combineReducers({
  main: mainNewsReducer,
  loading: loadingReducer,
});

export default rootReducer;