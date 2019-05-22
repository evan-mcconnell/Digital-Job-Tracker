import React from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import { addJob } from './../actions';



function NewJobForm(props) {
  const {dispatch} = props;
  let _title = null;
  let _description = null;
  let _job_type = null;
  let _due_date = null;

  function handleNewJobSubmission(e) {
    e.preventDefault();
    console.log(_title.value);
    console.log(_description.value);
    console.log(_job_type.value);
    let newJob = {
      title: _title.value,
      description: _description.value, 
      job_type: _job_type.value,
      due_date: _due_date.value,
    }
    dispatch(addJob(newJob));
    _title = '';
    _description = '';
    _job_type = '';
    _due_date = '';

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
      <HeadDiv>Add a Job To Board</HeadDiv>
      <form onSubmit={handleNewJobSubmission}>
        <input type='text' 
          id='title'
          placeholder='title'
          ref={(input) => {_title = input;}} />
        <input type='text' 
          id='description'
          placeholder='description'
          ref={(input) => {_description = input;}} />
        <select
          ref={select => {_job_type = select;}}
          name="job_type">
          <option value=''>Choose a Type from the List</option>
          
          {(props.typeList).map((type) => {
            return <option value={type.id} key={type.id}>{type.title}</option>
          })}
        </select>
        <input type='date' 
          id='due_date'
          placeholder='due_date'
          ref={(input) => {_due_date = input;}} />
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
    typeList: state.jobTypeList,
  }
}

export default connect(mapStateToProps)(NewJobForm);