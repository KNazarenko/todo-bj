import { combineReducers } from 'redux';
import tasksReducer from './tasksReducer';
import loginReducer from './loginReducer';
import sortReducer from './sortReducer';

export default combineReducers({
  tasks: tasksReducer,
  login: loginReducer,
  sort: sortReducer
});
