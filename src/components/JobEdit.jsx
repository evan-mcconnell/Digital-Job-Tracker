import React from 'react';
import styled from 'styled-components';
import { editJob } from './../actions';
import {connect} from 'react-redux';



function JobEdit(props) {
  const {dispatch} = props;
  let _lane = null;
  let _title = null;
  let _description = null;
  let _job_type = null;
  let _due_date = null;

  async function handleEditJobSubmission(e) {
    e.preventDefault();
    console.log(_title.value);
    console.log(_description.value);
    console.log(_job_type.value);
    let id = props.jobInfo.id;
    let newLane = _lane.value ? _lane.value : props.jobInfo.lane;
    let newTitle = _title.value ? _title.value : props.jobInfo.title;
    let newDescription = _description.value ? _description.value : props.jobInfo.description;
    let newJobType = _job_type.value ? _job_type.value : props.jobInfo.job_type;
    let newDueDate = _due_date.value ? _due_date.value : props.jobInfo.due_date;
    let edittedJob = {
      id: id,
      lane_id: newLane,
      title: newTitle,
      description: newDescription,
      job_type: newJobType,
      due_date: newDueDate
    };
    console.log(newLane);
    await dispatch(editJob(edittedJob));
    _title = '';
    _description = '';
    _job_type = '';
    _due_date = '';
    props.onEditSubmit;
  }
	
  const EditForm = styled.div`
		position: absolute;
		margin-top: 26px;
		margin-left: 160px;
		padding: 5px;
		background-color: rgba(63, 127, 191, 0.9);
		border: 2px solid rgba(63, 127, 191, 1);
		border-radius: 8px;
	`;
	
  return (
    <EditForm >
      <form onSubmit={handleEditJobSubmission}>
			<label>New Lane: </label><br/>
        <select
          ref={select => {_lane = select;}}
          name="lane">
          <option value=''>Change Lane</option>
          {(props.laneList).map((lane) => {
            return <option value={lane.id} key={lane.id}>{lane.name}</option>;
          })}
        </select><br/>
				<label>Edit Title: </label><br/>
        <input type='text' 
          id='title'
          placeholder={props.jobInfo.title}
          ref={(input) => {_title = input;}} /> <br/>
					<label>Edit Description: </label><br/>
        <textarea type='text' 
          id='description'
          placeholder={props.jobInfo.description}
          ref={(input) => {_description = input;}} /><br/>
					<label>Change Job Type: </label><br/>
        <select
          ref={select => {_job_type = select;}}
          name="job_type">
          <option value=''>Change Job Type</option>
          
          {(props.typeList).map((type) => {
            return <option value={type.id} key={type.id}>{type.title}</option>;
          })}
        </select><br/>
				<label>Change Due Date: </label><br/>
        <input type='date' 
          id='due_date'
          ref={(input) => {_due_date = input;}} /><br/>
        <br/>
        <button type='submit'>Edit Job</button>
      </form>
			<style jsx>{`
				label {
					font-size: 14px;
					color: white;
				}
				form {
					padding: 5px;
					text-align: center;
				}
				form * {
					margin: 4px;
				}
				button {
          background-color: rgb(189, 211, 233);
          border-radius: 3px;
          border-color: rgb(75, 135, 195);
          padding: 2px;
        }
			
			`}</style>
    </EditForm>
  );
}

export default connect()(JobEdit);