import {fork} from "@redux-saga/core/effects";
import {watchTwitter} from "./twitter";

export function* rootSaga() {
    yield fork(watchTwitter)
}
