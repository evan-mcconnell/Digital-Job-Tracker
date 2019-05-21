import { combineReducers } from 'redux';
import jobsReducer from './jobsReducer';
import jobTypesReducer from './jobTypesReducer';
import lanesReducer from './lanesReducer';

const rootReducer = combineReducers({
  jobsList: jobsReducer,
  jobTypesList: jobTypesReducer,
  lanesList: lanesReducer
});

export default rootReducer;