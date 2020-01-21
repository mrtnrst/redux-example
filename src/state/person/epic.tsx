import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError, concat, mergeMap, map } from 'rxjs/operators';
import { combineEpics, ofType } from 'redux-observable';
import { FETCH_USERS, default as actions } from './actions';

const body = {
  token: '6J3mnVZJzeBtlHY56ygJYA',
  parameters: {
    delay: 5,
    consistent: false,
  },
  data: {
    "id": "cryptoUUID",
    "firstName": "nameFirst",
    "lastName": "nameLast",
    _repeat: 2,
  },
};

const fetchUserEpic = action$ => action$.pipe(
    ofType(FETCH_USERS),
    () => of(actions.fetchingUser(true)),
    mergeMap(() =>
      ajax({
        url: 'https://app.fakejson.com/q',
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body,
      })
      .pipe(
        map(({ response }) => actions.userFetched(response), actions.fetchingUser(false))
      )
    ),
    catchError(err => { throw err })
  );

export default combineEpics(fetchUserEpic);
