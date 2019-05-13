const express = require('express');
const Counter = require('../utils/Counter');
const TrafficCounter = new Counter();
const router = new express.Router();

router.get('/', (req, res) => {
  const { headers : {host}} = req;
  const data = {
    data: {
      endpoints: [
        `${host}/total-count`,
        `${host}/count-per-day`,
        `${host}/top-half-hour-periods`,
        `${host}/bottom-hour-and-a-half-periods`
      ]
    }
  };
  return res.send(data);
});

router.get('/total-count', (req, res) => {
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

router.get('/count-per-day', (req, res) => {
  TrafficCounter.getCountPerDay()
    .then(countPerDay => {
      const data = {
        data: {
          countPerDay
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

router.get('/bottom-hour-and-a-half-periods', (req, res) => {
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

router.get('/get-all', (req, res) => {
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
