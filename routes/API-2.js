const express = require('express');
const Counter = require('../utils/Counter');
const TrafficCounter = new Counter();
const router = new express.Router();

router.get('/', (req, res) => {
  TrafficCounter.getAllData()
    .then(result => {
      // Spreading the result and storing the properties inside the data object:
      const data = {
        data: {...result}
      };
      res.send(data);
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = router;
