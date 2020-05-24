import { actionTypes, Action } from './../actions/types';
import { Alert } from './../interfaces/alert';

const INITIAL_STATE: Alert | {} = {};

const alertReducer = (state = INITIAL_STATE, action: Action) => {
	switch (action.type) {
		case actionTypes.SET_ALERT:
			return action.payload;
		case actionTypes.REMOVE_ALERT:
			return {};
		default:
			return state;
	}
};

export default alertReducer;
