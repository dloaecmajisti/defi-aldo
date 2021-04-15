import {createSelector} from "@reduxjs/toolkit";

const twitterSelector = (state) => state.twitter;

export const movieStarFeeds = createSelector(
    [twitterSelector],
    (state) => state.movieStarFeeds
)
export const musicStarFeeds = createSelector(
    [twitterSelector],
    (state) => state.musicStarFeeds
)
export const movieView = createSelector(
    [twitterSelector],
    (state) => state.movieView
)
