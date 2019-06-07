import { combineReducers } from 'redux';

import workReducer from './workReducer';
import aboutReducer from './aboutReducer';

export default combineReducers({
  works: workReducer,
  about: aboutReducer
});
