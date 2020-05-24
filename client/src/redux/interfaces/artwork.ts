import { actionTypes } from './../actions/types';

export interface CreateArtworkBody {
	name: string;
	edition: string;
	price: number;
	category: string;
	image: string;
}

export interface CreateArtworkAction {
	type: actionTypes.CREATE_ARTWORK;
}
