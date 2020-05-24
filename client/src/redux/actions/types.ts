import { SetAlertAction, RemoveAlertAction } from './../interfaces/alert';

export enum actionTypes {
	SET_ALERT,
	REMOVE_ALERT,
}

export type Action = SetAlertAction | RemoveAlertAction;
