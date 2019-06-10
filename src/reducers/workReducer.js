import { FETCH_WORKS, FETCH_WORK } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_WORKS:
      return action.payload;
    case FETCH_WORK:
      return action.payload;
    default:
      return state;
  }
};
