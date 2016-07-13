require('./env.js');
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_SECRET
});

var filterTweets = function(tweets, retweetThreshold) {
  var media = [];
  var counter = 0;     
  for (var i = 0; i < tweets.statuses.length; i++) {
    var tweet = tweets.statuses[i];
    if (tweet.entities.media) {
      media.push({
         "id": counter,
         "twitter_id": tweet.entities.media[0].id_str,
         "title": "Media Title",
         "hashtag": tweet.entities.hashtags.map(function(tag) {return tag.text}),
         "timestamp": tweet.created_at,
         "retweetsCount": tweet.retweet_count,
         "favoritesCount": tweet.favorite_count,
         "description": tweet.text,
         "tweetUrl": tweet.entities.media[0].expanded_url,
         "username": tweet.user.screen_name,
         "mediaUrl": tweet.entities.media[0].media_url,
         "mediaType": tweet.entities.media[0].type
      });
      counter++;
    }
  }
  return media;
};

var groupTweets = function(tweets) {
  var groups = {};
  tweets.map(function(tweet) {
    var ts = new Date(Date.parse(tweet.timestamp));
    var key = ts.getYear() + '-' + ts.getMonth() + '-' + ts.getDay() + '-' + ts.getHours() + '-' + ts.getMinutes() + '-' + (ts.getSeconds() % 5);
    if (groups[key] === undefined) {
      groups[key] = [];
    }
    groups[key].push(tweet);
  });
  return groups;
};

var toJson = function(groupedTweets) {
  var rows = [];
  for (var key in groupedTweets) {
    rows.push({"heading": groupedTweets[key][0]["timestamp"], "media": groupedTweets[key]});
  }
  return rows;
};

var appRouter = function(app) {
  app.get("/search", function(req, res) {
    if (req.query.hashtag) {
      var retweetThreshold = (req.query.retweet_threshold ? parseInt(req.query.retweet_threshold) : 0);
      var tweetsToSearch = (req.query.tweets_to_search ? parseInt(req.query.tweets_to_search) : 100);
      var allTweets = [];
      client.get('search/tweets', {q: '%23' + req.query.hashtag, result_type: 'recent', count: '100'}, 
        function(error, tweets, response) {
          //console.log(tweets);
          var filteredTweets = filterTweets(tweets, retweetThreshold);
          var groupedTweets = groupTweets(filteredTweets);
          var json = toJson(groupedTweets);
          //console.log({"rows": json, "count": 100});
          res.json({"rows": json, "count": tweetsToSearch});
        });
    }
      //console.log({"finalAllTweets": allTweets});
  });
};
 
module.exports = appRouter;

