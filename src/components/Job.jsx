import React, { useState } from 'react';
import styled from 'styled-components';
import JobEdit from './JobEdit';


function Job(props) {

  const [editFormOpen, setEditFormOpen] = useState(false);

  function handleOpenEditForm() {
    setEditFormOpen(!editFormOpen);
    console.log(editFormOpen);
  }

  let headerColor = ['#0091FF', '#1db001', '#9d18e0', '#b06101'];

  const MainCard = styled.div`
    padding: 5px;
    font-family: arial;
  `;
  const InventoryInfo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
        <button onClick={handleOpenEditForm}>Edit</button>
        { editFormOpen && 
          <JobEdit jobInfo={props.jobInfo}
            laneList={props.laneList}
            typeList={props.typeList}
            onEditSubmit={handleOpenEditForm}/> }
      </JobHeader>
      <MainCard>
        {props.jobInfo.description}<br></br>
        <InventoryInfo>
          {props.lane}
          <a href="">Inventory</a>
        </InventoryInfo>
      </MainCard>
      <style jsx>{`
        .card {
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
        button {
          background-color: rgb(189, 211, 233);
          border-radius: 3px;
          border-color: rgb(75, 135, 195);
          padding: 2px;
        }
      `}</style>
    </div>
  );
}

export default Job;