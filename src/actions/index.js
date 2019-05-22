import * as types from '../constants/ActionTypes';


// JOBS SECTION
 
export function setJobList(jobList) {
  return {
    type: 'GET_JOB_LIST',
    jobList
  }
}

export function getJobs(){
  return async function(dispatch) {
    let json;
    try {
      const response = await fetch('http://localhost:3000/jobs')
      json = await response.json();
      console.log("in action", json);
      dispatch(setJobList(json));
    }
    catch (e) {
      json = console.log('An ERROR!', e)
    }
  }
}

export function editJob(job){
  return async function(dispatch) {
    let json;
    try {
      const response = await fetch(`http://localhost:3000/jobs/${job.id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id: job.id,
          title: job.title,
          description: job.description,
          lane_id: job.lane_id,
          job_type: job.job_type,
          due_date: job.due_date
        })
      })
      console.log(response)
      dispatch(getJobs());
    }
    catch (e) {
      json = console.log('An ERROR!', e)
    }
  }
}


export function addJob(job) {
  return async function(dispatch) {
    try {
      await fetch('http://localhost:3000/jobs', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: job.title,
          description: job.description,
          lane_id: 1,
          job_type: job.job_type,
          due_date: job.due_date
        })
      })
      dispatch(getJobs());
    }
    catch (e) {
      console.log('An ERROR!', e)
    }
  }
}

// JOB TYPES SECTION

export function setJobTypeList(jobTypeList) {
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
      dispatch(setJobTypeList(json));
    }
    catch (e) {
      json = console.log('An ERROR!', e)
    }
  }
}

export function addJobType(jobType){
  return async function(dispatch) {
    try {
      await fetch('http://localhost:3000/job_types', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: jobType.title,
          description: jobType.description
        })
      })
      dispatch(getJobTypes());
    }
    catch (e) {
      console.log('An ERROR!', e)
    }
  }
}


// LANES SECTION


export function setLaneList(laneList) {
  return {
    type: 'GET_LANE_LIST',
    laneList
  }
}

export function getLanes(){
  return async function(dispatch) {
    let json;
    try {
      const response = await fetch('http://localhost:3000/lanes')
      json = await response.json();
      console.log("in action lanes", json);
      dispatch(setLaneList(json));
    }
    catch (e) {
      json = console.log('An ERROR!', e)
    }
  }
}


export function addLane(lane) {
  return {
    type: ADD_LANE,
    lane
  }
}