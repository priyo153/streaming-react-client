import {
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  EDIT_STREAM,
  DELETE_STREAM,
} from "../actions/types";
import _ from "lodash";
export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_STREAM:
      var newstate = { ...state };
      newstate[action.payload.id] = action.payload;
      return newstate;

    case CREATE_STREAM:
      newstate = { ...state };
      newstate[action.payload.id] = action.payload;
      return newstate;

    case EDIT_STREAM:
      newstate = { ...state };
      newstate[action.payload.id] = action.payload;
      return newstate;

    case DELETE_STREAM:
      return _.omit(state, action.payload);

    default:
      return state;
  }
};
