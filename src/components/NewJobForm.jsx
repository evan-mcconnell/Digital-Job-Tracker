import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import { getJobTypes } from './../actions';



function NewJobForm(props) {
  let _title = null;
  let _desciption = null;
  let _job_type = null;

  function handleNewJobSubmission(e) {
    e.preventDefault();
    console.log(_title.value);
    console.log(_desciption.value);
    console.log(_job_type.value);
    _title = '';
    _desciption = '';
    _job_type = '';

  }
  const HeadDiv = styled.div`
    height: 49px;
    width: 100%;
    text-align: center;
    padding-top: 10px;
    font-weight: bold;
    border-right: 2px solid black;
    border-top-right-radius: 10px;
  `;

  // drop down to select a specific type of job already in the system? Edit form to update? 


  // await props.dispatch(getJobTypes());
  console.log(props.state);

  return (
    <div className='main'>
      <HeadDiv>Add a Job To Board</HeadDiv>
      <form onSubmit={handleNewJobSubmission}>
        <input type='text' 
          id='title'
          placeholder='title'
          ref={(input) => {_title = input;}} />
        <input type='text' 
          id='desciption'
          placeholder='desciption'
          ref={(input) => {_desciption = input;}} />
        <select
          ref={select => {_job_type = select;}}
          name="job_type">
          <option value=''>Choose a Type from the List</option>
          
          {/* {Object.keys(props.typesList).map((type) => {
            return <option value={props.typesList[type].title} key={type}>{props.typesList[type].title}</option>
          })} */}
        </select>
          <br/>
        <button type='submit'>Add New Job</button>
      </form>
      <style jsx>{`
        .main {
          animation: openUp 0.3s ease-in;
        }
        form {
          padding-top: 20px;
          border: 2px solid black;
          background-color: lightgrey;
          // exact height needs work
          height: 100%;
          text-align: center;
        }
        input {
          border-radius: 5px;
          line-height: 20px;
          font-size: 18px;
          margin: 10px;
          padding: 2px;
        }
        button {
          line-height: 20px;
          font-size: 18px;
          margin: 10px;
          padding: 5px;
        }
        button:hover {
          background-color: lightgreen;
        }

        @keyframes openUp {
          0% {width: 0px}
          100% {width: 400px}
        }
      `}</style>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    state: state,
  }
}

export default connect(mapStateToProps)(NewJobForm);