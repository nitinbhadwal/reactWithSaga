import { takeEvery, call, put } from "redux-saga/effects";
import types from "../Types/types";
import axios from "axios";
import { fetchDataSuccess } from "../Actions/action";

function* asyncFetchRequest(action) {
  try {
    console.log("Dsds");
    const url = "https://jsonplaceholder.typicode.com/posts";
    const response = yield call(() => axios.get(url));
    console.log("nitin", response);
    yield put(fetchDataSuccess(response.data));
  } catch (error) {
    console.log("error", error);
  }
}

export default function* watchFetchDataSaga() {
  yield takeEvery(types.SEND_REQUEST, asyncFetchRequest);
}
