import {
  // SIGN_IN,
  // SIGN_OUT,
  // CREATE_STREAM,
  // FETCH_STREAM,
  // FETCH_STREAMS,
  // DELETE_STREAM,
  // EDIT_STREAM,
  CREATE_STORE,
  CREATE_ORDER,
  GET_ORDER,
  GET_STORE,
} from "./types";
// import streams from "../apis/streams";
// import history from "../history";

// export const signIn = (id) => {
//   return {
//     type: SIGN_IN,
//     payload: id,
//   };
// };

// export const signOut = () => {
//   return {
//     type: SIGN_OUT,
//   };
// };

// export const createStream = (formValues) => async (dispatch, getState) => {
//   const userId = getState().auth.id;
//   history.push("/");
//   const response = await streams.post("/streams", { ...formValues, userId });

//   dispatch({
//     type: CREATE_STREAM,
//     payload: response.data,
//   });
// };

// export const fetchStreams = () => async (dispatch) => {
//   const response = await streams.get("/streams");

//   dispatch({
//     type: FETCH_STREAMS,
//     payload: response.data,
//   });
// };

// export const fetchStream = (id) => async (dispatch) => {
//   const response = await streams.get(`/streams/${id}`);

//   dispatch({
//     type: FETCH_STREAM,
//     payload: response.data,
//   });
// };

// export const editStream = (id, formValues) => async (dispatch) => {
//   const response = await streams.patch(`/streams/${id}`, formValues);
//   history.push("/");
//   dispatch({
//     type: EDIT_STREAM,
//     payload: response.data,
//   });
// };

// export const deleteStream = (id) => async (dispatch) => {
//   await streams.delete(`/streams/${id}`);
//   history.push("/");
//   dispatch({
//     type: DELETE_STREAM,
//     payload: id,
//   });
// };

export const createOrder = (formValues) => async (dispatch) => {
  const response = await fetch("");
  response.then((data) => {
    dispatch({
      type: CREATE_ORDER,
      payload: formValues,
    });
  });
};
export const getOrders = () => async (dispatch) => {
  const response = await fetch("");
  response.then((data) => {
    dispatch({
      type: GET_ORDER,
      payload: data,
    });
  });
};
export const createStore = (formValues) => async (dispatch) => {
  const response = await fetch("");
  const data = await response.json();
  data.then((info) => {
    dispatch({
      type: CREATE_ORDER,
      payload: formValues,
    });
  });
};
export const getStores = () => async (dispatch) => {
  const response = await fetch("");
  const data = await response.json();
  data.then((info) => {
    dispatch({
      type: GET_STORE,
      payload: info,
    });
  });
};
