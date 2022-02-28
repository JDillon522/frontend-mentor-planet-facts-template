const express = require('express');
const router = express.Router();
const data = require('../public/javascripts/data.json');

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { planets: data });
});

router.get('/:id', (req, res, next) => {
  const planetName = req.params.id;
  const planetId = data.findIndex(planet => planet.name.toLowerCase() === planetName.toLowerCase());
  res.render('planet', {planet: data[planetId], planets: data});
})

module.exports = router;
