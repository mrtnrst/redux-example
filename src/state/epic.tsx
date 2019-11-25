import { BehaviorSubject } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { combineEpics } from 'redux-observable';

import { epic as personEpic, STATE_KEY as PERSON } from './person';

const epicRegistry = {
    [PERSON]: personEpic
};

const baseEpics = Object.keys(epicRegistry).map(k => epicRegistry[k]);
const epic$ = new BehaviorSubject(combineEpics(...baseEpics));

const rootEpic = (action$: any, store: any, deps: any) =>
  epic$.pipe(mergeMap(epic => epic(action$, store, deps)))

export default rootEpic;
