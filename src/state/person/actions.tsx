import { types } from './index';

export const FETCH_USERS = 'person/FETCH_USERS';
export const FETCHED_USER = 'person/FETCHED_USER';
export const FETCHING_USER = 'person/FETCHING_USER';

const fetchUsers = () => {
    return { type: FETCH_USERS }
}

const userFetched = (data: [types.Person]) => {
    return { type: FETCHED_USER, payload: data }
}

const fetchingUser = (isFetching: boolean) => {
    return {
        type: FETCHING_USER,
        payload: isFetching
    }
}

export const handlers = {
    [FETCHED_USER](state: any, action: { payload: [types.Person]; }) {
        return {
            ...state,
            results: action.payload,
        }
    },
    [FETCHING_USER](state: any, action: { payload: boolean; }) {
        return {
            ...state,
            isFetching: action.payload,
        }
    }
}

export default {
    fetchUsers,
    userFetched,
    fetchingUser,
}