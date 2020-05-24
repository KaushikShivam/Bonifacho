import { SetAlertAction, RemoveAlertAction } from './../interfaces/alert';

export enum actionTypes {
	// Alert
	SET_ALERT,
	REMOVE_ALERT,
	// Artwork
	CREATE_ARTWORK,
}

export type Action = SetAlertAction | RemoveAlertAction;

export const baseUrl = `https://bonifacho.herokuapp.com/api/v1`;
