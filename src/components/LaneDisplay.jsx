import React from 'react';
import styled from 'styled-components';

import Lane from './Lane';
import {masterLaneList} from './../data';

const LaneContainer = styled.div`
  display: flex;
  flex-direction: row;
`;


function LaneDisplay() {
  return (
    <div>
      <LaneContainer>
        {Object.keys(masterLaneList).map(function(laneId, index) {
          return <Lane laneinfo={masterLaneList[laneId]}
            key={index} />;
        })}
      </LaneContainer>
    </div>
  );
}

export default LaneDisplay;