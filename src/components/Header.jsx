import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FlexDiv = styled.div`
  display: flex;
  flex-direction: row;
`;
const Today = styled.div`
  padding: 20px;
`;
const Main = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-left: 15px;
  width: 90%;
  height: 70px;
`;
const Alinks = styled.p`
  font-size: 1em;
`;

var thisDay = new Date().toJSON().slice(0,10).replace(/-/g,'/');

function Header() {

  const linkStyle = {
    textDecoration: 'none',
    color: 'inherit',
    padding: '5px'
  };
  return (
    <Main>
      <FlexDiv>
        <h2>Digital Kanban</h2>
        <h4>Job Tracking for Your Business</h4>
      </FlexDiv>
      <FlexDiv>
        <Alinks><Link style={linkStyle} to="/">Jobs Board </Link></Alinks>
        <Alinks><Link style={linkStyle} to="/"> Inventory Board</Link></Alinks>
      </FlexDiv>
      <Today>
        {thisDay}
      </Today>
      <style jsx>{`
        Alinks {
          font-size: 1em;
          transition: font-size 0.5s;
          color: grey;
          padding: 10px;
        }
        Alinks:hover {
          font-size: 1.1em;

          color: black;
        }
        h4 {
          padding-top: 5px;
          padding-left: 30px;
        }
      `}</style>
    </Main>
  );
}

export default Header;