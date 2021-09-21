import types from "../Types/types";

export function fetchData(data) {
  return {
    type: types.SEND_REQUEST,
    payload: data,
  };
}

export function fetchDataSuccess(user) {
  console.log("aaaaaaaaaa", user);
  return {
    type: types.SEND_REQUEST_SUCCESS,
    payload: user,
  };
}

export function fetchDataFailure(error) {
  return {
    type: types.SEND_REQUEST_FAILURE,
    payload: {},
    error: error,
  };
}
