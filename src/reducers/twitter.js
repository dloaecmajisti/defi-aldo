import {createReducer} from "@reduxjs/toolkit";
import {populateTwitterMovieStarFeedsAction, populateTwitterMusicStarFeedsAction} from "../redux/actions/api";
import {setMovieViewAction} from "../redux/actions/app";

export const twitterReducer = createReducer({
    movieStarFeeds: [],
    musicStarFeeds: [],
    movieView: true,
}, (builder) => {
    builder.addCase(populateTwitterMovieStarFeedsAction, (state, action) => {
        state.movieStarFeeds = action.payload;
    }).addCase(populateTwitterMusicStarFeedsAction, (state, action) => {
        state.musicStarFeeds = action.payload;
    }).addCase(setMovieViewAction, (state, action) => {
        state.movieView = action.payload;
    })
})
