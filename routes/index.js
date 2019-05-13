const express = require('express');
const router = new express.Router();

router.get('/', (req, res) => {
  // Extracting host from the request.
  let {
    headers: { host }
  } = req;
  // Checking is host is localhost and adding 'http://' if true. By doing this the API can be easily navigated with a modern browser.
  if (host.substring(0, 9) === 'localhost') {
    host = `http://${host}`;
  }

  const data = {
    data: {
      APIs: [`${host}/API-1`, `${host}/API-2`]
    }
  };
  res.send(data);
});

router.use('/API-1', require('./API-1'));
router.use('/API-2/', require('./API-2'));

module.exports = router;
