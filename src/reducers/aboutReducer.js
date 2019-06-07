import { FETCH_ABOUT } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_ABOUT:
      return action.payload;
    default:
      return state;
  }
};
