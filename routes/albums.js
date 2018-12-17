const express = require('express');

const router = express.Router();

const spotifyApi = require('../spotify');

router.get('/:artistId', (req, res) => {
  console.log(req.params);

  spotifyApi.getArtistAlbums(req.params.artistId)
    .then((data) => {
      console.log(data);
      res.render('albums', { info: data.body.items });
    }, (err) => {
      console.log(err);
    })
    .catch(err => console.log(err));
});


module.exports = router;
