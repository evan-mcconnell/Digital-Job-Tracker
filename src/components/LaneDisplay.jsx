import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';

import Lane from './Lane';


const LaneContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: auto;
`;


function LaneDisplay(props) {
  const laneList = props.laneList;
  return (
      <LaneContainer>
        {laneList.map(function(lane, index) {
          return <Lane laneinfo={lane}
            jobList={props.jobList}
            key={index} />;
        })}
      </LaneContainer>
  );
}

const mapStateToProps = state => {
  return {
    jobList: state.jobList,
    jobTypeList: state.jobTypeList,
    laneList: state.laneList
  }
}


export default connect(mapStateToProps)(LaneDisplay);