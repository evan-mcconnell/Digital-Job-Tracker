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

export function addJobType(jobType){
  return function(dispatch) {
    let json;
    console.log(jobType)
    console.log(JSON.stringify(jobType))
    try {
      fetch('http://localhost:3000/job_types', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
        },
        body: JSON.stringify(jobType)
      })
      dispatch(getJobTypes());
    }
    catch (e) {
      json = console.log('An ERROR!', e)
    }
  }
}
