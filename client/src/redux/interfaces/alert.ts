import { actionTypes } from './../actions/types';

export enum errorType {
	success = 'success',
	error = 'error',
}

export interface Error {
	message: string;
	type: errorType;
}

export interface SetAlertAction {
	type: actionTypes.SET_ALERT;
	payload: Error;
}

export interface RemoveAlertAction {
	type: actionTypes.REMOVE_ALERT;
}
