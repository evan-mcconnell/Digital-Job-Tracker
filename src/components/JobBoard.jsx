import React, { useState } from 'react';
import styled from 'styled-components';
import LaneDisplay from './LaneDisplay';
import JobBoardOptions from './JobBoardOptions';
import NewJobForm from './NewJobForm';
import NewJobTypeForm from './NewJobTypeForm';

function JobBoard() {

  const [newJobOpen, setNewJobOpen] = useState(false);
  const [newJobTypeOpen, setNewJobTypeOpen] = useState(false);

  function handleOpenNewJob() {
    setNewJobOpen(!newJobOpen)
  }
  function handleOpenNewJobType() {
    setNewJobTypeOpen(!newJobTypeOpen)
  }

  const FlexDiv = styled.div`
    display: flex;
    flex-direction: row;
  `;

  

  return (
    <div>
      <JobBoardOptions onOpenNewJob={handleOpenNewJob}
        onOpenNewJobType={handleOpenNewJobType}/>
      <FlexDiv>
        { newJobTypeOpen && 
          <NewJobTypeForm /> 
        }
        { newJobOpen && 
          <NewJobForm /> 
        }
        <LaneDisplay />
      </FlexDiv>
      <style jsx>{`
        NewJobForm {
          height: 100%;
        }
        
      `}</style>
    </div>
  );
}

export default JobBoard;