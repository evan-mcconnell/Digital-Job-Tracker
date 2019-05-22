import React from 'react';
import styled from 'styled-components';
import Job from './Job';


const Main = styled.div`
  height: 100%;
  flex-grow: 1;
  min-width: 350px;
  max-width: 450px;
`;
const LaneName = styled.div`
  text-align: center;
  border-bottom: 1px solid black;
  height: 40px;
`;

function Lane(props) {
  const jobList = props.jobList;
  return (
    <Main>
      <LaneName>
        <h4>{props.laneinfo.name}</h4>
      </LaneName>
      <div className="lane-content">
        {jobList.map(function(job, index) {
          let lane = props.laneinfo.id;
          let jobLane = job.lane_id;
          if (jobLane === lane){
            return <Job jobInfo={job}
                        lane={lane}
              key={index} />;
          }
        })}
      </div>
      <style jsx>{`
        h4 {
          margin-top: 10px;
          font-size: 1.2em
        }
        .lane-content {
          height: 85vh;
          background-color: lightgrey; 
      // background color will be a function to gradually show a gradient of greys
          border: 1px solid black;
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </Main>
  );
}



export default Lane;