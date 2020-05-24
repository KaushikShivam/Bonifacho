import { Dispatch } from 'redux';
import { actionTypes } from './types';
import {
	SetAlertAction,
	RemoveAlertAction,
	errorType,
} from './../interfaces/alert';

// TODO: Make error type to be an enum?

export const setAlert = (message: string, type: errorType) => (
	dispatch: Dispatch
) => {
	dispatch<SetAlertAction>({
		type: actionTypes.SET_ALERT,
		payload: { message, type },
	});

	setTimeout(() => {
		dispatch<RemoveAlertAction>({ type: actionTypes.REMOVE_ALERT });
	}, 1000);
};
