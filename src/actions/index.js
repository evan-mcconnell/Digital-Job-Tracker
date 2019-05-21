import * as types from '../constants/ActionTypes';

export function addJob(job) {
  return {
    type: ADD_JOB,
    job
  }
}

export function getJobTypeList(jobTypeList) {
  return {
    type: 'GET_JOB_TYPE_LIST',
    jobTypeList
  }
}

export function getJobTypes(){
  return async function(dispatch) {
    let json;
    try {
      const response = await fetch('http://localhost:3000/job_types')
      json = await response.json();
      console.log("in action", json);
      // console.log(GET_JOB_TYPE_LIST);
      dispatch(getJobTypeList(json));
    }
    catch (e) {
      json = console.log('An ERROR!', e)
    }
  }
}
