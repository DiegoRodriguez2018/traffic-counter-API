const express = require("express");
const router = new express.Router();

router.get("/test", (req, res) => {
  const data = {
    message: "API is working"
  }
  return res.send(data);
});

module.exports = router;
