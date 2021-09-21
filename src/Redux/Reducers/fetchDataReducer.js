import types from "../Types/types";

const intialState = {
  loading: false,
  user: {},
  error: {},
};

const fetchDataReducer = (state = intialState, action) => {
  switch (action.types) {
    case types.SEND_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case types.SEND_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: {},
      };
    case types.SEND_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        user: {},
        error: action.error,
      };

    default:
      return {
        state,
      };
  }
};

export default fetchDataReducer;
