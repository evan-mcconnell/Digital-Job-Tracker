import * as types from '../constants/ActionTypes';

export function addJob(job) {
  return {
    type: ADD_JOB,
    job
  }
}

export function getJobTypes(){
  return async function() {
    let json;
    console.log("somewhere");
    try {
      const response = await fetch('http://localhost:3000/job_types')
      json = await response.json();
      console.log("somewhere", json);
      return json;
    }
    catch (e) {
      json = console.log('An ERROR!', e)
    }
  }
}
