# Aldo Challenge
Small project for Aldo challenge, that reads Twitter feeds

Start the project with `yarn start` and open [http://localhost:3000](http://localhost:3000)

Twitter API calls are made in a Node.js Backend to remove credentials from the Frontend, however it should have an authentication to the Backend as well, but regarding the scope of this project there is not. It **MUST** be implemented for a production environment. 

The Backend part is inspired from [this article](https://developer.twitter.com/en/docs/tutorials/building-an-app-to-stream-tweets)

# Requirements
- Node.js
- Environment variable for Twitter authentication, set it with `export TWITTER_BEARER_TOKEN=<YourDeveloperBearerToken>`
