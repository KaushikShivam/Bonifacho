import { SetAlertAction, RemoveAlertAction } from './../interfaces/alert';

export enum actionTypes {
	// Alert
	SET_ALERT,
	REMOVE_ALERT,
	// Artwork
	CREATE_ARTWORK,
	CLEAR_USER_ARTWORKS,
	GET_USER_ARTWORKS,
}

export type Action = SetAlertAction | RemoveAlertAction;

export const baseUrl = `https://bonifacho.herokuapp.com/api/v1`;
