import { combineReducers } from 'redux';
import { userAuthenticationReducer } from './auth';

const rootReducers = combineReducers({
	user: userAuthenticationReducer,
});

export default rootReducers;
