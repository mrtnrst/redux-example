import { handlers } from './actions';

export const initialState = {
    results: [],
    isFetching: false,
}

const personReducer = (state: any = initialState, action: any) => {
    const handler = handlers[action.type];

    if (handlers[action.type]) {
        return handler(state, action);
    }

    return state;
}

export default personReducer; 