import { combineReducers } from 'redux';
import jobsReducer from './jobsReducer';
import jobTypesReducer from './jobTypesReducer';
import lanesReducer from './lanesReducer';

const rootReducer = combineReducers({
  jobList: jobsReducer,
  jobTypeList: jobTypesReducer,
  // lanesList: lanesReducer
});

export default rootReducer;