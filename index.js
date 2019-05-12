const express = require("express");
const app = express();
const port = 8080;

// Instantiating express.json()
app.use(express.json());

// Importing the controllers folder.
app.use(require("./controllers"));

app.listen(port, () => {
  console.log(`listening on ${port}`);
});

// Exporting app so is accessible to Chai during testing.
module.exports = app;