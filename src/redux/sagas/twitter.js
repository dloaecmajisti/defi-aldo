import {call, fork, put} from "@redux-saga/core/effects";
import {getMovieStarTweets, getMusicTweets} from "../../connectivity/api";
import {populateTwitterMovieStarFeedsAction, populateTwitterMusicStarFeedsAction} from "../actions/api";
import {fetchTwitterMovieStarFeedsAction, fetchTwitterMusicStarFeedsAction} from "../actions/app";

const {takeEvery} = require("@redux-saga/core/effects");

function* fetchMovieStarFeeds() {
    yield put(populateTwitterMovieStarFeedsAction(yield call(getMovieStarTweets)))
}

function* fetchMusicStarFeeds() {
    yield put(populateTwitterMusicStarFeedsAction(yield call(getMusicTweets)))
}

export function* watchTwitter() {
    yield fork(watchTwitterMovieStarFeeds);
    yield fork(watchTwitterMusicStarFeeds);
}

function* watchTwitterMovieStarFeeds() {
    yield takeEvery(fetchTwitterMovieStarFeedsAction().type, fetchMovieStarFeeds);
}

function* watchTwitterMusicStarFeeds() {
    yield takeEvery(fetchTwitterMusicStarFeedsAction().type, fetchMusicStarFeeds);
}
