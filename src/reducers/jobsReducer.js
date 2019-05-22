import constants from './../constants';

const { initialState, types } = constants;

export default function jobsReducer(state = [], action){
  switch (action.type){
  case 'GET_JOB_LIST':
		  const newJobList = action.jobList;
	  	return newJobList;
  case types.ADD_JOB:
    return state;
  default: 
    return state;
    
  }
}