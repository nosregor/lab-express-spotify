const SpotifyWebApi = require('spotify-web-api-node');

// connection to Spotify API
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
});

// Retrieve an access token.
spotifyApi.clientCredentialsGrant()
  .then((data) => {
    spotifyApi.setAccessToken(data.body.access_token);
    // console.log('Successfully connected to Spotify API', data);
  }, (err) => {
    console.log('Something went wrong when retrieving an access token', err);
  });


module.exports = spotifyApi;
