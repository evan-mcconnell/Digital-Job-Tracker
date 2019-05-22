import React from 'react';
import PropTypes from 'prop-types';

function JobBoardOptions(props) {

  return (
    <div>
      <button onClick={props.onOpenNewJob}>Add A Job</button>
      <button onClick={props.onOpenNewJobType}>Add a Job Type</button>
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
        button:hover {
          background-color: #ccc;
        }
      `}</style>
    </div>
  )
};

JobBoardOptions.propTypes = {
  onOpenNewJob: PropTypes.func,
};

export default JobBoardOptions;