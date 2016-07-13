To run:
1. Create `env.js` file in `routes/`: `touch routes/env.js`
2. Paste your Twitter access keys into the file:
```
process.env.TWITTER_CONSUMER_KEY = '';
process.env.TWITTER_CONSUMER_SECRET = '';
process.env.TWITTER_ACCESS_KEY = '';
process.env.TWITTER_ACCESS_SECRET = '';
```
3. Run `npm install` and `node app.js` to run the web application.
4. The web app can be queried by specifying a hashtag, like this:
```
http://localhost:3000/search?hashtag=batonrouge
```
