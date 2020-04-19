import { SIGN_IN, SIGN_OUT } from "../actions/types";

export default (state = { isSignedIn: null, id: null }, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        ...state,
        isSignedIn: true,
        id: action.payload,
      };
    case SIGN_OUT:
      return {
        ...state,
        isSignedIn: false,
        id: null,
      };
    default:
      return state;
  }
};
