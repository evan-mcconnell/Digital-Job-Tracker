import constants from './../constants';

const { initialState, types } = constants;

export default function lanesReducer(state = [], action){
	switch (action.type){
	case 'GET_LANE_LIST':
		const newLaneList = action.laneList
		return newLaneList;
	case types.ADD_LANE:
			return state;
	default: 
			return state;
	}
}