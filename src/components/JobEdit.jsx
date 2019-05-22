import React from 'react';
import styled from 'styled-components';


function JobEdit(props) {
	const {dispatch} = props;
  let _title = null;
  let _description = null;
  let _job_type = null;
  let _due_date = null;

	function handleEditJobSubmission(e) {
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
    // dispatch(addJob(newJob));
    _title = '';
    _description = '';
    _job_type = '';
    _due_date = '';

	}
	
	const EditForm = styled.div`
		position: absolute;
		margin-top: 30px;
		margin-left: 160px;
		padding: 5px;
		background-color: rgba(63, 127, 191, 0.66);
	`;
	
  return (
		<EditForm >
			<form onSubmit={()=>{}}>
        <input type='text' 
          id='title'
          placeholder='title'
          ref={(input) => {_title = input;}} /> <br/>
        <input type='text' 
          id='description'
          placeholder='description'
          ref={(input) => {_description = input;}} /><br/>
        <select
          ref={select => {_job_type = select;}}
          name="job_type">
          <option value=''>Choose a Type from the List</option>
          
          {(props.typeList).map((type) => {
            return <option value={type.id} key={type.id}>{type.title}</option>
          })}
        </select><br/>
        <input type='date' 
          id='due_date'
          placeholder='due_date'
          ref={(input) => {_due_date = input;}} /><br/>
          <br/>
        <button type='submit'>Add New Job</button>
      </form>
		</EditForm>
	)
}

export default JobEdit;