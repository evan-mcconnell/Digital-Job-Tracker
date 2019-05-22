import React from 'react';
import PropTypes from 'prop-types';

function JobBoardOptions(props) {

  return (
    <div>
      <button className='newJobType' onClick={props.onOpenNewJobType}>Add a Job Type</button>
      <button className='newJob' onClick={props.onOpenNewJob}>Add A Job</button>
      <hr/>
      <style jsx>{`
        button {
          margin: 5px;
          margin-left: 3%;
          background-color: #eee;
          border-radius: 10px;
          border: none;
          font-size: 18px;
          padding: 5px;
        }
        .newJob {
          background-color: #d9f1f9;
        }
        .newJobType {
          background-color: #b9f7be;
        }
        .newJob:hover {
          background-color: #b9e7f7;
        }
        .newJobType:hover {
          background-color: #a9f2af;
        }
      `}</style>
    </div>
  );
}

JobBoardOptions.propTypes = {
  onOpenNewJob: PropTypes.func,
};

export default JobBoardOptions;