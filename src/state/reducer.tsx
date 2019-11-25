import { combineReducers } from 'redux';

import { reducer as personReducer, STATE_KEY as PERSON } from './person';

export default combineReducers({
    [PERSON]: personReducer,
})