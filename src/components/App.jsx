import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import JobBoard from './JobBoard';
import Header from './Header';
import {connect} from 'react-redux';
import { getJobTypes, getJobs, getLanes } from './../actions';



function App(props) {
  
  
  useEffect(() => {
    props.dispatch(getJobTypes());
    props.dispatch(getJobs());
    props.dispatch(getLanes());
  });


  return (
    <div>
      <Router>
        <Header />
        <hr />
        <Route exact path="/" component={JobBoard} />
        {/* <Route path="/inventory" component={InventoryBoard} /> */}
      </Router>
      <style jsx global>{`
        body {
          font-family: comfortaa, sans-serif;
        }
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
      
      `}</style>
    </div>
  );
}


const mapDispatchToProps = dispatch => {
  return {
    getJobTypes,
    getJobs,
    getLanes,
  };
};



export default connect(mapDispatchToProps)(App);
