const express = require('express');
const DataManager = require('../utils/DataManager');
const router = new express.Router();

router.get('/test', (req, res) => {
  const data = {
    data: {
      message: 'API is working'
    }
  };
  return res.send(data);
});

router.get('/total-cars', (req, res) => {
  DataManager.getTotalCount()
    .then(totalCount => {
      const data = {
        data: {
          totalCount
        }
      }
      res.send(data);
    })
    .catch(err => {
      res.send(err);
    });
});

router.get('/cars-per-day', (req, res) => {
  DataManager.getCountPerDay()
    .then(carsPerDay => {
      const data = {
        data: {
          carsPerDay
        }
      }
      res.send(data);
    })
    .catch(err => {
      res.send(err);
    });
});

router.get('/top-three-half-hour-periods', (req, res) => {
  DataManager.getTop3()
    .then(topThreeHalfHourPeriods => {
      const data = {
        data: {
          topThreeHalfHourPeriods
        }
      }
      res.send(data);
    })
    .catch(err => {
      res.send(err);
    });
});

// router.get("/1.5hour-periods-with-less-traffic",Handlers.getTest);

module.exports = router;
