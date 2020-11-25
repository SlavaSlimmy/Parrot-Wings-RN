import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import restoreAuthReducer from './restoreAuthReducer';
import authReducer from './authReducer';

export default combineReducers({
  counter: counterReducer,
  restoreAuth: restoreAuthReducer,
  auth: authReducer
});
