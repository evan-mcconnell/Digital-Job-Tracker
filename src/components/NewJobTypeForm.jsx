import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import { addJobType } from './../actions';



function NewJobTypeForm({dispatch}) {
  let _title = null;
  let _description = null;

  function handleNewJobTypeSubmission(e) {
    e.preventDefault();
    console.log(_title.value);
    console.log(_description.value);
    let newType = {
      title: _title.value,
      description: _description.value
    }
    dispatch(addJobType(newType));
    _title.value = '';
    _description.value = '';

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


  return (
    <div className='main'>
      <HeadDiv>Add a Job Type</HeadDiv>
      <form onSubmit={handleNewJobTypeSubmission}>
        <input type='text' 
          id='title'
          placeholder='title'
          ref={(input) => {_title = input;}} />
        <input type='text' 
          id='description'
          placeholder='description'
          ref={(input) => {_description = input;}} />
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

export default connect()(NewJobTypeForm);