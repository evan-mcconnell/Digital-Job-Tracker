// Constants

const ADD_JOB = 'ADD_JOB';

// Action Creators

export function addJob(job) {
  return {
    type: ADD_JOB,
    job
  }
}

// Initial State
export const initialState = {
  masterLaneList: {
    0: {
      name: 'To Be Started',
      id: 0,
      details: null,
    },
    1: {
      name: 'Phase 1',
      id: 1,
      details: null,
    },
    2: {
      name: 'Phase 2',
      id: 2,
      details: null,
    },
    3: {
      name: 'Phase 3',
      id: 3,
      details: null,
    }
  },
  masterJobsList: {
    0: {
      id: 0,
      jobType: 'Test',
      lane: 'Phase 3',
      startDate: 'dateString',
      dueDate: 'dateString',
      specialInstructions: 'make sure this job is done first'
    },
    1: {
      id: 1,
      jobType: 'Test',
      lane: 'To Be Started',
      startDate: 'dateString',
      dueDate: 'dateString',
      specialInstructions: 'No special instructions'
    },
    2: {
      id: 2,
      jobType: 'Test',
      lane: 'Phase 3',
      startDate: 'dateString',
      dueDate: 'dateString',
      specialInstructions: 'make sure this job is done'
    },
    3: {
      id: 3,
      jobType: 'Torsion',
      lane: 'Phase 1',
      startDate: 'dateString',
      dueDate: 'dateString',
      specialInstructions: 'Talk to Nick for more info'
    },
    4: {
      id: 4,
      jobType: 'Test',
      lane: 'Phase 3',
      startDate: 'dateString',
      dueDate: 'dateString',
      specialInstructions: 'make sure this job is done first'
    },
    5: {
      id: 5,
      jobType: 'Test',
      lane: 'To Be Started',
      startDate: 'dateString',
      dueDate: 'dateString',
      specialInstructions: 'No special instructions'
    },
    6: {
      id: 6,
      jobType: 'Torsion',
      lane: 'Phase 2',
      startDate: 'dateString',
      dueDate: 'dateString',
      specialInstructions: 'make sure this job is done'
    },
    7: {
      id: 7,
      jobType: 'Torsion',
      lane: 'Phase 1',
      startDate: 'dateString',
      dueDate: 'dateString',
      specialInstructions: 'Talk to Nick for more info'
    },
  }
}

// Reducer

export default function reducer(state = initialState, action){
  switch (action.type){
  case ADD_JOB:
    return state;
  default: 
    return state;
  }
}