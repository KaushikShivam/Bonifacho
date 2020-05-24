import axios from 'axios';
import { Dispatch, AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { baseUrl, actionTypes } from './../actions/types';
import { setAlert } from './alert';
import { alertType } from '../interfaces/alert';

import {
	CreateArtworkBody,
	CreateArtworkAction,
} from './../interfaces/artwork';

export const createArtwork = (body: CreateArtworkBody) => async (
	dispatch: ThunkDispatch<{}, {}, AnyAction>
) => {
	try {
		await axios.post(`${baseUrl}/artworks`, body);

		dispatch<CreateArtworkAction>({
			type: actionTypes.CREATE_ARTWORK,
		});

		dispatch(setAlert('Artwork Created!', alertType.success));

		return Promise.resolve();
	} catch (err) {
		dispatch(setAlert(err.response.data.message, alertType.error));
	}
};
