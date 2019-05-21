import React from 'react';
import styled from 'styled-components';


function Job(props) {
  console.log("mememe")
  let headerColor;
  // if (props.jobInfo.jobType === 'Test') {
  //   headerColor = '#0091FF';
  // } else {
  //   headerColor = "#1db001";
  // }

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
    background-color: ${headerColor};
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5px;`;
    
  return (
    <div className="card">
      <JobHeader>
        <h3>{props.jobInfo.job_type}</h3>
        {/* <h5>{props.jobInfo.dueDate}</h5> */}
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
      `}</style>
    </div>
  );
}

export default Job;