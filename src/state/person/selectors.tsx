import { STATE_KEY } from './';

export const selectPeople = (state: { [x: string]: { results: any; }; }) => state[STATE_KEY].results;