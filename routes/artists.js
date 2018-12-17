const express = require('express');

const router = express.Router();
// const bodyParser = require('body-parser');

const spotifyApi = require('../spotify');

router.get('/', (req, res) => {
  res.render('artists');
});

// const urlEncoder = bodyParser.urlencoded({ extended: true });

router.post('/', (req, res) => {
  console.log(req.body);

  spotifyApi.searchArtists(req.body.searchArtist)
    .then((data) => {
      console.log(data);
      res.render('artists', { search: data.body.artists.items });
    })
    .catch((err) => {
      console.log('Error:', err);
    });
});

module.exports = router;
