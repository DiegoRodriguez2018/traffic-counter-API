const express = require('express');
const Counter = require('../utils/Counter');
const TrafficCounter = new Counter();
const router = new express.Router();

router.get('/', (req, res) => {
  const { headers : {host}} = req;
  const data = {
    data: {
      endpoints: [
        `${host}/total-cars`,
        `${host}/cars-per-day`,
        `${host}/top-half-hour-periods`,
        `${host}/bottom-1.5hour-periods`
      ]
    }
  };
  return res.send(data);
});

router.get('/total-cars', (req, res) => {
  TrafficCounter.getTotalCount()
    .then(totalCount => {
      const data = {
        data: {
          totalCount
        }
      };
      res.send(data);
    })
    .catch(err => {
      res.send(err);
    });
});

router.get('/cars-per-day', (req, res) => {
  TrafficCounter.getCountPerDay()
    .then(carsPerDay => {
      const data = {
        data: {
          carsPerDay
        }
      };
      res.send(data);
    })
    .catch(err => {
      res.send(err);
    });
});

router.get('/top-half-hour-periods', (req, res) => {
  TrafficCounter.getTop3()
    .then(topThreeHalfHourPeriods => {
      const data = {
        data: {
          topThreeHalfHourPeriods
        }
      };
      res.send(data);
    })
    .catch(err => {
      res.send(err);
    });
});

router.get('/bottom-1.5hour-periods', (req, res) => {
  TrafficCounter.getBottom90MinPeriods()
    .then(bottomHourAndAHalfPeriods => {
      const data = {
        data: {
          bottomHourAndAHalfPeriods
        }
      };
      res.send(data);
    })
    .catch(err => {
      res.send(err);
    });
});

module.exports = router;
