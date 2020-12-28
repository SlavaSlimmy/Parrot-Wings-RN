import { combineReducers } from 'redux';
import restoreAuthReducer from './restoreAuthReducer';
import authReducer from './authReducer';
import transactionsReducer from './transactionsReducer';

export default combineReducers({
  restoreAuth: restoreAuthReducer,
  auth: authReducer,
  transactions: transactionsReducer,
});
