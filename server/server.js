const express = require("express");
const bodyParser = require("body-parser");
const util = require("util");
const request = require("request");
const path = require("path");
const http = require("http");

const app = express();
let port = process.env.PORT || 3000;
const get = util.promisify(request.get);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const server = http.createServer(app);

const BEARER_TOKEN = process.env.TWITTER_BEARER_TOKEN;

const fetchUserTweets = async (req, res, userId) => {
    if (!BEARER_TOKEN) {
        res.status(400).send(authMessage);
    }

    const token = BEARER_TOKEN;
    const url = `https://api.twitter.com/2/users/${userId}/tweets`

    const requestConfig = {
        url: url,
        auth: {
            bearer: token,
        },
        json: true,
    };

    try {
        const response = await get(requestConfig);

        if (response.statusCode !== 200) {
            if (response.statusCode === 403) {
                res.status(403).send(response.body);
            } else {
                throw new Error(response.body.error.message);
            }
        }

        res.send(response.body.data);
    } catch (e) {
        res.send(e);
    }
};

app.get('/api/tweets/movie-star', (req, res) => fetchUserTweets(req, res, '1006915357020508160'))

app.get('/api/tweets/music-star', (req, res) => fetchUserTweets(req, res, '27195114'))

const authMessage = {
    title: "Could not authenticate",
    details: [
        `Please make sure your bearer token is correct. 
      If using Glitch, remix this app and add it to the .env file`,
    ],
    type: "https://developer.twitter.com/en/docs/authentication",
};

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../build")));
    app.get("*", (request, res) => {
        res.sendFile(path.join(__dirname, "../build", "index.html"));
    });
} else {
    port = 3001;
}

server.listen(port, () => console.log(`Listening on port ${port}`));
