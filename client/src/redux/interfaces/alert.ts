import { actionTypes } from './../actions/types';

export enum alertType {
	success = 'success',
	error = 'error',
}

export interface Alert {
	message: string;
	type: alertType;
}

export interface SetAlertAction {
	type: actionTypes.SET_ALERT;
	payload: Alert;
}

export interface RemoveAlertAction {
	type: actionTypes.REMOVE_ALERT;
}
