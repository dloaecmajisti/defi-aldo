const fetchJson = (endpoint) => fetch(endpoint, {method: 'GET', headers: {'Content-Type': 'application/json'}})

export const getMovieStarTweets = async () => {
    const response = await fetchJson(`/api/tweets/movie-star`)

    return await response.json();
}

export const getMusicTweets = async () => {
    const response = await fetchJson(`/api/tweets/music-star`)

    return await response.json();
}
