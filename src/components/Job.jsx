import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import JobEdit from './JobEdit';
import DeleteCheck from './DeleteCheck';


function Job(props) {

  const [editFormOpen, setEditFormOpen] = useState(false);
  const [deleteCheck, setDeleteCheck] = useState(false);

  function handleOpenEditForm() {
    setEditFormOpen(!editFormOpen);
  }

  function handleOpenDeleteCheck() {
    setDeleteCheck(!deleteCheck);
  }

  useEffect(() => {
    if (editFormOpen) {
      setEditFormOpen(!editFormOpen);
    }
  }, true);

  let headerColor = ['#0091FF', '#1db001', '#9d18e0','#FA6400', '#e05ccb', '#44D7B6', '#6236FF'];

  const MainCard = styled.div`
    padding: 5px;
    font-family: arial;
  `;
  const JobTypeDescription = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
  `;
  const JobHeader = styled.div`
    height: 30px;
    background-color: ${headerColor[props.jobInfo.job_type - 1]};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5px;`;
    
  return (
    <div className="card">
      <JobHeader>
        <h3>{props.typeList[props.jobInfo.job_type - 1].title}</h3>
        <h5>{props.jobInfo.due_date}</h5>
        <div>
          <button onClick={handleOpenEditForm}>Edit</button>
          <p className='delete' onClick={handleOpenDeleteCheck}>X</p>
        </div>
        { deleteCheck && 
          <DeleteCheck job={props.jobInfo}/>}
        { editFormOpen && 
          <JobEdit jobInfo={props.jobInfo}
            laneList={props.laneList}
            typeList={props.typeList}
            onEditSubmit={handleOpenEditForm}/> }
      </JobHeader>
      <MainCard>
      <p><span>Job Notes: </span>{props.jobInfo.description}</p><br/>
        <JobTypeDescription>
        <h5>{props.typeList[props.jobInfo.job_type - 1].description}</h5>
          {/* <a href="">Inventory</a> */}
        </JobTypeDescription>
      </MainCard>
      <style jsx>{`
        .card {
          box-shadow: 1px 1px 5px grey;
          height: 100px;
          width: 90%;
          margin: 10px auto;
          border: 1px solid black;
          background-color: white;
          transition: width, 0.3s;
        }
        .card:hover {
          width: 95%;
          height: 110px;
        }
        .delete {
          padding: 4px;
          display: inline;
          padding-top: 2px;
        }
        .delete:hover, button:hover {
          cursor: pointer;
        }
        span {
          font-size: 0.9em;
        }
        button {
          background-color: rgb(189, 211, 233);
          border-radius: 3px;
          border-color: rgb(75, 135, 195);
          padding: 3px;
          margin-right: 3px;
        }
      `}</style>
    </div>
  );
}

export default Job;