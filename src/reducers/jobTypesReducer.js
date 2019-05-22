import constants from './../constants';

const { initialState, types } = constants;

export default function jobTypesReducer(state = [], action){
  switch (action.type){
  case 'GET_JOB_TYPE_LIST':
    const newJobTypeList = action.jobTypeList;
    return newJobTypeList;
  case types.ADD_JOB_TYPE:
    return state;
  default: 
    return state;
  }
}
  