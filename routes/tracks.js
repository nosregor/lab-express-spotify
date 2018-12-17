const express = require('express');

const router = express.Router();

const spotifyApi = require('../spotify');

router.get('/:albumId', (req, res) => {
  console.log(req.params);

  spotifyApi.getAlbumTracks(req.params.albumId)
    .then((data) => {
      console.log(data.body.items);
      res.render('tracks', { track: data.body.items });
    }, (err) => {
      console.log(err);
    })
    .catch(err => console.log(err));
});


module.exports = router;
