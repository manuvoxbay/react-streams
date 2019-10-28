import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import AuthReducers from './AuthReducers';
import StreamReducer from './StreamReducer';

export default combineReducers({
    AuthReducers,
    form:formReducer,
    streams:StreamReducer
});