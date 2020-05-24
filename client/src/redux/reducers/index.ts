import { combineReducers } from 'redux';
import { Alert } from './../interfaces/alert';
import alertReducer from './../reducers/alert';

// TODO: Add a StoreState for combine reducers

interface StoreState {
	alert: Alert | {};
}

const rootReducer = combineReducers<StoreState>({
	alert: alertReducer,
});

export default rootReducer;
