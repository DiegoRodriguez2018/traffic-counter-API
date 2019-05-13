const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

// Instantiating express.json()
app.use(express.json());

// Importing the controllers folder.
app.use(require("./routes"));

app.listen(port, () => {
  console.log(`listening on ${port}`);
});

// Exporting app so is accessible to Chai during testing.
module.exports = app;