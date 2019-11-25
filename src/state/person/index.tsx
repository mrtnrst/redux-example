import reducer from './reducer';
import epic from './epic';
import actions from './actions';
import * as selectors from './selectors';
import * as types from './types';

const STATE_KEY = 'person';

export {
    STATE_KEY,
    actions,
    reducer,
    epic,
    selectors,
    types
}