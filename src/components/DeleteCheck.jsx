import React from 'react';
import {connect} from 'react-redux';
import { deleteJob } from './../actions';

function DeleteCheck(props) {

	function handleDeleteJobClick() {
		const {dispatch} = props;
		dispatch(deleteJob(props.job))
	}
	return (
		<div className='main'>
			<p>Are you sure you want to delete?</p>
		<button onClick={handleDeleteJobClick}>DELETE</button>
		<style jsx>{`
			.main {
				position: absolute;
				margin-top: 26px;
				margin-left: 200px;
				padding: 10px;
				width: 160px;
				background-color: #a82b42;
				border: 2px solid #561521;
				border-radius: 8px;
				color: white;
				text-align: center;
			}
			button {
				background-color: #ffd6dd;
				border-radius: 3px;
				border-color: black;
				font-size: 16px;
				margin: 8px;
				padding: 4px;
			}
		`}</style>
		</div>
	)
}

export default connect()(DeleteCheck);