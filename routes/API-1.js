const express = require('express');
const Counter = require('../utils/Counter');
const TrafficCounter = new Counter(); // The default path is "data/lines.txt", but Counter also allows custom paths to be passed.
 
const router = new express.Router();

router.get('/', (req, res) => {
  // Extracting host and baseUrl from the request.
  let { headers: { host } } = req;
  const { baseUrl } = req;

  // Adding "http://" if is localhost, or "https://" otherwise (for production).
  if (host.substring(0, 9) === 'localhost') {
    host = `http://${host}`;
  } else {
    host = `https://${host}`;
  }

  const data = {
    data: {
      endpoints: [
        `${host}${baseUrl}/total-count`,
        `${host}${baseUrl}/count-per-day`,
        `${host}${baseUrl}/top-half-hour-periods`,
        `${host}${baseUrl}/bottom-hour-and-a-half-periods`
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
  TrafficCounter.getTopHalfHourPeriods()
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
  TrafficCounter.getBottomHourAndAHalfPeriods()
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
